import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';


export default function ChatInput() {
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder="Type message here..."
        placeholderTextColor={COLORS.muted}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: COLORS.inputbywhole,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 13,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
});
