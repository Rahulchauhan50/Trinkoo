import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

export default function BalanceCard() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.value}>623</Text>
        <Text style={styles.label}>Total Diamond</Text>
      </View>

      <View style={[styles.box, styles.active]}>
        <Text style={styles.value}>982</Text>
        <Text style={styles.label}>Total Credit</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    borderRadius: 14,
    overflow: 'hidden',
  },
  box: {
    flex: 1,
    backgroundColor: COLORS.dark,
    paddingVertical: 14,
    alignItems: 'center',
  },
  active: {
    backgroundColor: COLORS.secondary,
  },
  value: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
  },
  label: {
    color: COLORS.white,
    fontSize: 12,
    marginTop: 4,
  },
});
