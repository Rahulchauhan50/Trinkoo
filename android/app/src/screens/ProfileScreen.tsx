import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { COLORS } from '../theme/colors';
import ProfileHeader from '../components/Profile/ProfileHeader';
import DailyCheckInCard from '../components/Profile/DailyCheckInCard';
import RewardStatusCard from '../components/Profile/RewardStatusCard';
import ProfileMenuCard from '../components/Profile/ProfileMenuCard';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ProfileHeader />

      <View style={styles.section}>
        <DailyCheckInCard />
        <RewardStatusCard />
        <ProfileMenuCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  section: {
    padding: 16,
    gap: 16,
  },
});
