import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../theme/colors';

export default function FriendAvatar({ name, image }: any) {
  return (
    <TouchableOpacity style={styles.item}>
      <Image source={image} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.action}>Send Message</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    width: '22%',
    alignItems: 'center',
    marginBottom: 14,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginBottom: 6,
  },
  name: {
    color: COLORS.white,
    fontSize: 11,
    textAlign: 'center',
  },
  action: {
    color: '#C6F000',
    fontSize: 10,
    marginTop: 2,
  },
});
