import React from 'react';
import { View, StyleSheet } from 'react-native';
import FriendAvatar from './FriendAvatar';
import { COLORS } from '../../theme/colors';

export default function InviteFriends() {
  return (
    <View style={styles.card}>
      <View style={styles.grid}>
        <FriendAvatar name="Ando Bo" image={require('../../assets/avatars/a4.png')} />
        <FriendAvatar name="Angga Y." image={require('../../assets/avatars/a5.png')} />
        <FriendAvatar name="Bobby P." image={require('../../assets/avatars/a6.png')} />
        <FriendAvatar name="Jake" image={require('../../assets/avatars/a7.png')} />
        <FriendAvatar name="Glorya S." image={require('../../assets/avatars/a8.png')} />
        <FriendAvatar name="Jihan" image={require('../../assets/avatars/a1.png')} />
        <FriendAvatar name="Emily Sui" image={require('../../assets/avatars/a2.png')} />
        <FriendAvatar name="Bella Gui" image={require('../../assets/avatars/a3.png')} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 16,
    marginTop: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
