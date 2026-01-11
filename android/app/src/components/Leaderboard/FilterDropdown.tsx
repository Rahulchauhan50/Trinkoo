import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

export default function FilterDropdown() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Semua Permainan ⌄</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 6,
  },
  text: {
    color: COLORS.gray,
    fontSize: 12,
  },
});
