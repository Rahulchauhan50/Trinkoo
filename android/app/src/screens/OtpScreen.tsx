import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import OtpInputBox from '../components/OtpInputBox';
import { COLORS } from '../theme/colors';

export default function OtpScreen() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (text: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = text;
    setOtp(updatedOtp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>OTP Verification</Text>

        <Text style={styles.subtitle}>
          Enter the verification code that we have sent{'\n'}
          to your e-mail example@email.com
        </Text>

        <View style={styles.otpRow}>
          {otp.map((digit, index) => (
            <OtpInputBox
              key={index}
              value={digit}
              isActive={index < 3}
              onChangeText={(text) => handleChange(text, index)}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
  },
  content: {
    marginTop: 120,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#8A8A8A',
    lineHeight: 20,
    marginBottom: 32,
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  button: {
    height: 48,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
  },
});
