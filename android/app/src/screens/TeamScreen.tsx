import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Share } from 'react-native';
import { COLORS } from '../theme/colors';
import InviteFriends from '../components/Team/InviteFriends';
import DirectMessageCard from '../components/Team/DirectMessageCard';

export default function TeamScreen() {
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
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Invite your friends to play together!
        </Text>

        <TouchableOpacity onPress={onShare}  style={styles.addBtn}>
          <Text style={{ color: COLORS.white }}>👥+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <InviteFriends />

        <Text style={styles.section}>Direct Message</Text>

        <View style={styles.list}>
          <DirectMessageCard
            name="Adellia Enggar"
            message="Halo, ayo main tetris jam 7 nanti setelah itu kita..."
            time="15.32"
            image={require('../assets/avatars/a1.png')}
            online
          />

          <DirectMessageCard
            name="Yanuar Ega Karimun"
            message="Besok kita bermain hitung angka dengan yang lain"
            time="12.27"
            image={require('../assets/avatars/a2.png')}
          />

          <DirectMessageCard
            name="Herman Aliansyah"
            message="Yuk main!"
            time="10.13"
            image={require('../assets/avatars/a3.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
    width: '75%',
  },
  addBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(0,0,0,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '600',
    marginHorizontal: 20,
    marginTop: 18,
    marginBottom: 8,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
});
