import React, { useState, useRef } from 'react';
import { COLORS } from '../theme/colors';
import AppLogo from '../components/AppLogo';
import {
  View,
  Animated,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Image,
} from 'react-native';

import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';
import { authStart, authSuccess, authError, setUser } from '../redux/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginWithGoogle, login } from '../services/authService';

export default function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const [form, setForm] = useState({ email: '', password: '' });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  const shakeAnim = useRef(new Animated.Value(0)).current;

  const toastOpacity = useRef(new Animated.Value(0)).current;
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const toastTimer = useRef<any>(null);

  const triggerShake = () => {
    shakeAnim.setValue(0);
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -6, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 6, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  };

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      if (!form.email) {
        setEmailError('Field is required');
        setTimeout(() => {
          emailRef.current?.focus();
          triggerShake();
        }, 50);
      }
      if (!form.password) {
        setPasswordError('Field is required');
        if (form.email) {
          setTimeout(() => {
            passwordRef.current?.focus();
            triggerShake();
          }, 50);
        }
      }
      return;
    }

    try {
      dispatch(authStart());
      const res = await login(form);
      dispatch(authSuccess(res.data.token));
      try {
        await AsyncStorage.setItem('token', res.data.token);
      } catch (e) {}
      if (res.data.user) {
        try { await AsyncStorage.setItem('user', JSON.stringify(res.data.user)); } catch (e) {}
        dispatch(setUser(res.data.user));
      }
      navigation.reset({ index: 0, routes: [{ name: 'HomeTabs' }] });
    } catch (err) {
      console.log('Login error:', err);
      const status = err?.response?.status;
      const message = err?.response?.data?.message || 'Login failed';
      if (status === 401) {
        setEmailError('Invalid credentials');
        setPasswordError('Invalid credentials');
        setTimeout(() => {
          emailRef.current?.focus();
          triggerShake();
        }, 50);
      }
      dispatch(authError(message));
    }
  };

  const handleGoogleLogin = async () => {
    await GoogleSignin.signOut();
    try {
      dispatch(authStart());
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('--- GOOGLE USER DATA ---');
      console.log('User Info Object:', JSON.stringify(userInfo, null, 2));
      const idToken = userInfo.data?.idToken;
      const res = await loginWithGoogle(idToken);
      console.log('Server response after Google login:', res);
      dispatch(authSuccess(res.data.token));
      try { await AsyncStorage.setItem('token', res.data.token); } catch (e) {}
      // build google user object from provider response
      const profile = res?.data?.user
      console.log('User profile from server response:', profile);
            try { await AsyncStorage.setItem('user', JSON.stringify(profile)); } catch (e) {}
      dispatch(setUser(profile));
      navigation.replace('HomeTabs');
    } catch (error) {
      console.log('Google Sign-In error:', error);
      const status = error?.response?.status;
      if (status === 404) {
        setToastMessage('User not registered — please register first');
        setToastVisible(true);
        Animated.timing(toastOpacity, { toValue: 1, duration: 250, useNativeDriver: true }).start();
        if (toastTimer.current) clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => {
          Animated.timing(toastOpacity, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => setToastVisible(false));
          navigation.navigate('Register');
        }, 3500);
      }
      dispatch(authError('Google sign-in failed'));
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.primary,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    card: {
      backgroundColor: COLORS.white,
      borderRadius: 24,
      padding: 24,
      alignItems: 'center',
      marginBottom: 40,
    },
    appName: {
      fontSize: 22,
      fontWeight: '700',
      marginTop: 0,
      color: COLORS.black,
    },
    tagline: {
      fontSize: 14,
      color: '#777',
      marginBottom: 40,
    },
    welcome: {
      alignSelf: 'flex-start',
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 2,
    },
    label: {
      alignSelf: 'flex-start',
      fontSize: 13,
      color: '#555',
      marginTop: 12,
      marginBottom: 6,
    },
    input: {
      width: '100%',
      height: 48,
      backgroundColor: '#F3F3F3',
      borderRadius: 10,
      paddingHorizontal: 14,
      fontSize: 14,
      color: COLORS.black,
    },
    button: {
      width: '100%',
      height: 48,
      backgroundColor: COLORS.primary,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: COLORS.white,
      fontSize: 16,
      fontWeight: '600',
    },
    footer: {
      marginTop: 16,
      fontSize: 13,
      color: '#666',
    },
    link: {
      color: COLORS.primary,
      fontWeight: '600',
    },
    scrollContent: { flexGrow: 1 },
    googleButton: {
      width: '100%',
      height: 48,
      backgroundColor: '#fff',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#ddd',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 12,
      flexDirection: 'row',
      paddingHorizontal: 20,
    },
    googleText: { color: '#000', fontWeight: '600' },
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'android' ? undefined : 'padding'}>
        <StatusBar barStyle="light-content" />
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.card}>
              <AppLogo size={120} />
              <Text style={styles.appName}>Trinkoo</Text>
              <Text style={styles.tagline}>Play, Chat & Earn</Text>
              <Text style={styles.welcome}>Welcome back 👋</Text>

              <Animated.View style={{ transform: [{ translateX: shakeAnim }], width: '100%' }}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                  ref={emailRef}
                  placeholder="example@gmail.com"
                  placeholderTextColor="#BDBDBD"
                  style={[styles.input, emailError ? { borderWidth: 1, borderColor: 'red' } : {}]}
                  keyboardType="email-address"
                  value={form.email}
                  onChangeText={(v) => { setForm({ ...form, email: v }); if (emailError) setEmailError(''); }}
                />
                {emailError ? <Text style={{ color: 'red', alignSelf: 'flex-start', marginTop: 6 }}>{emailError}</Text> : null}

                <Text style={styles.label}>Password</Text>
                <TextInput
                  ref={passwordRef}
                  placeholder="********"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry
                  style={[styles.input, passwordError ? { borderWidth: 1, borderColor: 'red' } : {}]}
                  value={form.password}
                  onChangeText={(v) => { setForm({ ...form, password: v }); if (passwordError) setPasswordError(''); }}
                />
                {passwordError ? <Text style={{ color: 'red', alignSelf: 'flex-start', marginTop: 6 }}>{passwordError}</Text> : null}
              </Animated.View>

              <TouchableOpacity activeOpacity={0.85} style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, styles.googleButton, { backgroundColor: '#fff', borderWidth: 1 }]} onPress={handleGoogleLogin}>
                <Image source={require('../assets/images/google-logo.png')} style={{ width: 24, height: 40, marginRight: 10 }} resizeMode="contain" />
                <Text style={{ color: '#000', fontWeight: '600' }}>Continue with Google</Text>
              </TouchableOpacity>

              <Text style={styles.footer}>
                Already have account?{' '}
                <Text style={styles.link} onPress={() => navigation.navigate('Register')}>Create an account</Text>
              </Text>

            </View>
          </View>
        </ScrollView>

        {toastVisible ? (
          <Animated.View style={{ position: 'absolute', top: 36, left: 16, right: 16, backgroundColor: '#5A00A8', paddingHorizontal: 14, paddingVertical: 12, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', elevation: 6, opacity: toastOpacity, transform: [{ translateY: toastOpacity.interpolate({ inputRange: [0, 1], outputRange: [-10, 0] }) }] }}>
            <Text style={{ color: '#fff', flex: 1, marginRight: 12 }}>{toastMessage}</Text>
            <TouchableOpacity style={{ paddingHorizontal: 12, paddingVertical: 6, backgroundColor: '#fff', borderRadius: 6 }} onPress={() => { if (toastTimer.current) clearTimeout(toastTimer.current); Animated.timing(toastOpacity, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => setToastVisible(false)); navigation.navigate('Register'); }}>
              <Text style={{ color: '#2b6cb0', fontWeight: '700' }}>Register</Text>
            </TouchableOpacity>
          </Animated.View>
        ) : null}

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
