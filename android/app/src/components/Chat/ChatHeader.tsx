import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';


export default function ChatHeader() {
    const navigation = useNavigation();
  
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Image
          source={require('../../assets/avatars/a1.png')} // replace with your avatar
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Rahul</Text>
          <Text style={styles.status}>online</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>‹</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backArrow: {
    color: COLORS.white,
    fontSize: 52,
    fontWeight: '600',
    marginRight: 20,
  },
  header: {
    paddingTop: 82,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  name: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 14,
  },
  status: {
    color: '#D9FF3F',
    fontSize: 11,
  },
});
