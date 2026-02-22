import React, { useState, useRef } from 'react';
import {
  View,
  Animated,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { COLORS } from '../theme/colors';
import AppLogo from '../components/AppLogo';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { authStart, authError, authSuccess, setUser } from "../redux/slices/authSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { registerWithGoogle, startRegister } from "../services/authService";


export default function RegisterScreen() {

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: ""
  });
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const emailRef = useRef<any>(null);
  const nameRef = useRef<any>(null);
  const phoneRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const toastOpacity = useRef(new Animated.Value(0)).current;
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  let toastTimer: any = null;

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

  const handleRegister = async () => {
    // client-side validation
    setNameError('');
    setPhoneError('');
    setEmailError('');
    setPasswordError('');

    const firstEmpty = (
      !form.name ? 'name' : !form.phone ? 'phone' : !form.email ? 'email' : !form.password ? 'password' : null
    );

    if (firstEmpty) {
      if (firstEmpty === 'name') setNameError('Field is required');
      if (firstEmpty === 'phone') setPhoneError('Field is required');
      if (firstEmpty === 'email') setEmailError('Field is required');
      if (firstEmpty === 'password') setPasswordError('Field is required');

      // focus and shake the first empty field
      setTimeout(() => {
        if (firstEmpty === 'name') nameRef.current?.focus();
        else if (firstEmpty === 'phone') phoneRef.current?.focus();
        else if (firstEmpty === 'email') emailRef.current?.focus();
        else if (firstEmpty === 'password') passwordRef.current?.focus();
        triggerShake();
      }, 50);

      return;
    }

    // format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setEmailError('Invalid email address');
      setTimeout(() => {
        emailRef.current?.focus();
        triggerShake();
      }, 50);
      return;
    }

    const cleanedPhone = form.phone.replace(/\D/g, '');
    if (cleanedPhone.length < 10 || cleanedPhone.length > 10) {
      setPhoneError('Invalid phone number');
      setTimeout(() => {
        phoneRef.current?.focus();
        triggerShake();
      }, 50);
      return;
    }

    // password complexity checks
    const pw = form.password || '';
    const missing: string[] = [];
    if (pw.length < 8) missing.push('length');
    if (!/[A-Z]/.test(pw)) missing.push('capital');
    if (!/[^A-Za-z0-9]/.test(pw)) missing.push('symbol');

    if (missing.length) {
      const msgs: string[] = [];
      if (missing.includes('length')) msgs.push('at least 8 characters');
      if (missing.includes('capital')) msgs.push('an uppercase letter');
      if (missing.includes('symbol')) msgs.push('a symbol');
      setPasswordError('Password must include ' + msgs.join(', '));
      setTimeout(() => {
        passwordRef.current?.focus();
        triggerShake();
      }, 50);
      return;
    }

    dispatch(authStart());
    try {
      // normalize phone to include country code if missing
      const normalizedPhone = form.phone.startsWith('+') ? form.phone : `+91${cleanedPhone}`;
      const payload = { ...form, phone: normalizedPhone };
      const { data } = await startRegister(payload);
      dispatch(authSuccess(data.token));
      // persist token and user (use form values as user)
      try { await AsyncStorage.setItem('token', data.token); } catch (e) { }
      const userObj = { name: form.name, email: form.email, phone: normalizedPhone, photo: null };
      try { await AsyncStorage.setItem('user', JSON.stringify(userObj)); } catch (e) { }
      dispatch(setUser(userObj));
      console.log('Registration successful, token:', data);
      // Reset navigation stack so Back button won't return to Register/Login
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeTabs' }],
      });
    } catch (error) {
      console.log('Registration error:', error);
      const status = error?.response?.status;
      const message = error?.response?.data?.message || 'Registration failed';

      if (status === 409) {
        // user already exists — highlight email input and show message
        setEmailError('User already exist');
        // focus and shake the email input to draw attention
        setTimeout(() => {
          emailRef.current?.focus();
          triggerShake();
        }, 50);
      }

      dispatch(authError(message));
    }
  };

  const handleGoogleRegister = async () => {
    await GoogleSignin.signOut();
    try {
      dispatch(authStart());

      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const userInfo = await GoogleSignin.signIn();

      console.log("--- GOOGLE USER DATA ---");
      console.log("User Info Object:", JSON.stringify(userInfo, null, 2));


      const idToken = userInfo.data?.idToken;
      if (!idToken) throw new Error("No Google ID token");


      const res = await registerWithGoogle(idToken);

      // 👇 THIS is what you want
      console.log("Google register API response:", res.data);

      dispatch(authSuccess(res.data.token));
      try { await AsyncStorage.setItem('token', res.data.token); } catch (e) { }
      const profile = res?.data?.user
      console.log('User profile from server response:', profile);
      try { await AsyncStorage.setItem('user', JSON.stringify(profile)); } catch (e) {}
      dispatch(setUser(profile));
      navigation.replace("HomeTabs");
    } catch (err) {
      console.log("Google register error (raw):", err);


      const status = err?.response?.status;
      if (status === 409) {
        // user already exists: show themed in-app toast with Login action
        setToastMessage('User already exists — please login');
        setToastVisible(true);
        // animate in
        Animated.timing(toastOpacity, { toValue: 1, duration: 250, useNativeDriver: true }).start();
        // auto-hide after 4s
        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          Animated.timing(toastOpacity, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => setToastVisible(false));
          navigation.navigate('Login');
        }, 4000);
      }

      dispatch(
        authError(
          err.message || "Google registration failed"
        )
      );
    }

  };

  const navigation = useNavigation<NavigationProp<any>>();

  const styles = StyleSheet.create({
    scrollContent: {
      flexGrow: 1,
    },

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
      marginBottom: 0,
    },

    title: {
      fontSize: 22,
      fontWeight: '700',
      marginTop: 16,
      color: '#000',
    },

    subtitle: {
      fontSize: 14,
      color: '#777',
      textAlign: 'center',
      marginVertical: 8,
      marginBottom: 20,
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
      color: '#000', // VERY IMPORTANT
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
    googleButton: {
      width: "100%",
      height: 48,
      backgroundColor: "#fff",
      borderRadius: 12,
      borderWidth: 1,
      borderColor: "#ddd",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 12,
      flexDirection: 'row', // This aligns the icon and text horizontally
      paddingHorizontal: 20,
    },
    googleText: {
      color: '#000',
      fontWeight: '600',
    }
  });

  // Toast styles
  styles.toastContainer = {
    position: 'absolute',
    top: 36,
    left: 16,
    right: 16,
    backgroundColor: COLORS.primaryDark,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  };

  styles.toastText = {
    color: '#fff',
    flex: 1,
    marginRight: 12,
  };

  styles.toastAction = {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 6,
  };

  styles.toastActionText = {
    color: COLORS.primary,
    fontWeight: '700',
  };


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <StatusBar barStyle="light-content" />

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={styles.card}>
              <AppLogo size={120} />

              <Text style={styles.title}>Create your account</Text>
              <Text style={styles.subtitle}>
                Join Trinkoo and start playing & earning
              </Text>

              <Animated.View style={{ transform: [{ translateX: shakeAnim }], width: '100%' }}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  ref={nameRef}
                  placeholder="John Doe"
                  placeholderTextColor="#BDBDBD"
                  style={[styles.input, nameError ? { borderWidth: 1, borderColor: 'red' } : {}]}
                  value={form.name}
                  onChangeText={(v) => {
                    setForm({ ...form, name: v });
                    if (nameError) setNameError('');
                  }}
                />
                {nameError ? <Text style={{ color: 'red', alignSelf: 'flex-start', marginTop: 6 }}>{nameError}</Text> : null}

                <Text style={styles.label}>Phone Number</Text>
                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                  <View style={{ height: 48, paddingHorizontal: 12, paddingVertical: 12, backgroundColor: '#EFEFEF', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderWidth: phoneError ? 1 : 0, borderColor: phoneError ? 'red' : 'transparent' }}>
                    <Text style={{ color: '#333' }}>+91</Text>
                  </View>
                  <TextInput
                    ref={phoneRef}
                    placeholder=""
                    placeholderTextColor="#BDBDBD"
                    style={[{ flex: 1, height: 48, backgroundColor: '#F3F3F3', paddingHorizontal: 12, borderTopRightRadius: 10, borderBottomRightRadius: 10 }, phoneError ? { borderWidth: 1, borderColor: 'red' } : {}]}
                    keyboardType="phone-pad"
                    value={form.phone}
                    onChangeText={(v) => {
                      // allow entering with or without +91; store raw input
                      setForm({ ...form, phone: v });
                      if (phoneError) setPhoneError('');
                    }}
                  />
                </View>
                {phoneError ? <Text style={{ color: 'red', alignSelf: 'flex-start', marginTop: 6 }}>{phoneError}</Text> : null}

                <Text style={styles.label}>E-mail</Text>
                <TextInput
                  ref={emailRef}
                  placeholder="example@gmail.com"
                  placeholderTextColor="#BDBDBD"
                  style={[styles.input, emailError ? { borderWidth: 1, borderColor: 'red' } : {}]}
                  keyboardType="email-address"
                  value={form.email}
                  onChangeText={(v) => {
                    setForm({ ...form, email: v });
                    if (emailError) setEmailError('');
                  }}
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
                  onChangeText={(v) => {
                    setForm({ ...form, password: v });
                    if (passwordError) setPasswordError('');
                  }}
                />
                {passwordError ? <Text style={{ color: 'red', alignSelf: 'flex-start', marginTop: 6 }}>{passwordError}</Text> : null}
              </Animated.View>

              <TouchableOpacity activeOpacity={0.85} style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.googleButton}
                activeOpacity={0.85}
                onPress={handleGoogleRegister}
              >
                <Image
                  source={require('../assets/images/google-logo.png')}
                  style={[
                    // styles.logo,
                    { width: 24, height: 40, marginRight: 10 },
                  ]}
                  resizeMode="contain"
                />
                <Text style={styles.googleText}>Register with Google</Text>
              </TouchableOpacity>


              <Text style={styles.footer}>
                Already have account?{' '}
                <Text
                  style={styles.link}
                  onPress={() => navigation.navigate('Login')}
                >
                  Login here
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>

        {toastVisible ? (
          <Animated.View
            style={[
              styles.toastContainer,
              { opacity: toastOpacity, transform: [{ translateY: toastOpacity.interpolate({ inputRange: [0, 1], outputRange: [-10, 0] }) }] },
            ]}
          >
            <Text style={styles.toastText}>{toastMessage}</Text>
            <TouchableOpacity
              style={styles.toastAction}
              onPress={() => {
                if (toastTimer) clearTimeout(toastTimer);
                Animated.timing(toastOpacity, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => setToastVisible(false));
                navigation.navigate('Login');
              }}
            >
              <Text style={styles.toastActionText}>Login</Text>
            </TouchableOpacity>
          </Animated.View>
        ) : null}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );


}

