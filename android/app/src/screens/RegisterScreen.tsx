import React, { useState } from 'react';
import {
  View,
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
import { authStart, authError, authSuccess, setPendingPhone } from "../redux/slices/authSlice";
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

  const handleRegister = async () => {
    try {
      dispatch(authStart());

      await startRegister(form);

      dispatch(setPendingPhone(form.phone));
      navigation.navigate("Otp");
    } catch (err) {
      dispatch(authError(err.response?.data?.message || "Error"));
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


      const idToken = userInfo.idToken;
      if (!idToken) throw new Error("No Google ID token");


      const res = await registerWithGoogle(idToken);

      // 👇 THIS is what you want
      console.log("Google register API response:", res.data);

      dispatch(authSuccess(res.data.token));
      navigation.replace("HomeTabs");
    } catch (err) {
      console.log("Google register error (raw):", err);
      console.log("Google register error message:", err.message);
      console.log("Google register error code:", err.code);
      console.log("Google register error stack:", err.stack);

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

              <Text style={styles.label}>Name</Text>
              <TextInput
                placeholder="John Doe"
                placeholderTextColor="#BDBDBD"
                style={styles.input}
                onChangeText={(v) => setForm({ ...form, name: v })}
              />

              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                placeholder="+91 XXXXX-XXXXX"
                placeholderTextColor="#BDBDBD"
                style={styles.input}
                keyboardType="phone-pad"
                onChangeText={(v) => setForm({ ...form, phone: v })}
              />

              <Text style={styles.label}>E-mail</Text>
              <TextInput
                placeholder="example@gmail.com"
                placeholderTextColor="#BDBDBD"
                style={styles.input}
                keyboardType="email-address"
                onChangeText={(v) => setForm({ ...form, email: v })}
              />

              <Text style={styles.label}>Password</Text>
              <TextInput
                placeholder="********"
                placeholderTextColor="#BDBDBD"
                secureTextEntry
                style={styles.input}
                onChangeText={(v) => setForm({ ...form, password: v })}
              />

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
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );


}
