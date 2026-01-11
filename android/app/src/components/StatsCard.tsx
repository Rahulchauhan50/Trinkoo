import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StatsCard() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.number}>623</Text>
        <Text style={styles.numberdetails}>Total Diamond</Text>
      </View>
      <View style={[styles.box, styles.white]}>
        <Text style={styles.numberDark}>982</Text>
        <Text>Total Credit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    borderRadius: 16,
    overflow: 'hidden',
    borderBlockColor: '#e0e0e0',
    borderWidth: 1,
    // borderRadius: 16,
  },
  box: {
    flex: 1,
    backgroundColor: '#7B0FCB',
    padding: 16,
    alignItems: 'center',
  },
  white: { backgroundColor: '#fff' },
  number: { color: '#fff', fontWeight: '700', fontSize: 18 },
  numberDark: { color: '#000', fontWeight: '700', fontSize: 18 },
  numberdetails: { color: '#E0E0E0', fontSize: 12 },  
  // active: { borderRadius: 16},

});
