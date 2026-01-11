import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/colors';
import LeaderboardTabs from '../components/Leaderboard/LeaderboardTabs';
import TopThree from '../components/Leaderboard/TopThree';
import LeaderboardRow from '../components/Leaderboard/LeaderboardRow';
import FilterDropdown from '../components/Leaderboard/FilterDropdown';

export default function LeaderboardScreen() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Leaderboard</Text>
        <TouchableOpacity style={styles.search}>
          <Text style={{ color: COLORS.white }}>🔍</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <LeaderboardTabs />
        <FilterDropdown />
        <TopThree />

        <View style={styles.list}>
          <LeaderboardRow rank="01" name="@hrmandays" sub="100 poin" points="1000 tiket" />
          <LeaderboardRow rank="02" name="@madynguzna" sub="100 poin" points="900 tiket" />
          <LeaderboardRow rank="03" name="@gloryaaaaaa" sub="98 poin" points="850 tiket" />
          <LeaderboardRow rank="04" name="@katespade" sub="90 poin" points="632 tiket" />
          <LeaderboardRow rank="05" name="@callmegrandma" sub="85 poin" points="591 tiket" />
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
    fontSize: 20,
    fontWeight: '700',
  },
  search: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    paddingHorizontal: 20,
    marginTop: 6,
  },
});
