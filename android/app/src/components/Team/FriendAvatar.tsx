import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Share } from 'react-native';
import { COLORS } from '../../theme/colors';


export default function FriendAvatar({ name, image }: any) {
   const onShare = async () => {
      try {
        await Share.share({
          message: 'Check this out! Trinnkoo is an amazing app to connect with friends and play games together. Join me on Trinnkoo and let\'s have some fun!',
        });
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <TouchableOpacity onPress={onShare} style={styles.item}>
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
