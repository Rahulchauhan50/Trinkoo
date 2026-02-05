import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

type Props = {
  value: string;
  isActive?: boolean;
  onChangeText: (text: string) => void;
};

export default function OtpInputBox({ value, isActive, onChangeText }: Props) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      keyboardType="number-pad"
      maxLength={1}
      style={[
        styles.box,
        { borderColor: isActive ? COLORS.borderActive : COLORS.borderInactive },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  box: {
    width: 44,
    height: 44,
    borderRadius: 8,
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
});
