import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../theme/colors';
import AppLogo from '../components/AppLogo';


export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.coin}>🏆 270</Text>
      <AppLogo size={160} />
      <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.avatar} />
    
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coin: {
    backgroundColor: '#000',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 12,
  },
  logo: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
});
