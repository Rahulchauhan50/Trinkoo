import React from 'react';
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
} from 'react-native';
import { COLORS } from '../theme/colors';
import AppLogo from '../components/AppLogo';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
  const navigation = useNavigation();

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
              />

              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                placeholder="+91 XXXXX-XXXXX"
                placeholderTextColor="#BDBDBD"
                style={styles.input}
                keyboardType="phone-pad"
              />

              <Text style={styles.label}>E-mail</Text>
              <TextInput
                placeholder="example@gmail.com"
                placeholderTextColor="#BDBDBD"
                style={styles.input}
                keyboardType="email-address"
              />

              <Text style={styles.label}>Password</Text>
              <TextInput
                placeholder="********"
                placeholderTextColor="#BDBDBD"
                secureTextEntry
                style={styles.input}
              />

              <TouchableOpacity activeOpacity={0.85} style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>

              <Text style={styles.footer}>
                Already have account?{' '}
                <Text
                  style={styles.link}
                  onPress={() => navigation.goBack()}
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
