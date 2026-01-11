import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

export default function LeaderboardRow({ rank, name, sub, points }: any) {
  return (
    <View style={styles.row}>
      <Text style={styles.rank}>{rank}</Text>

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.sub}>{sub}</Text>
      </View>

      <Text style={styles.points}>{points}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  rank: {
    width: 36,
    color: COLORS.gray,
    fontSize: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    color: COLORS.white,
    fontSize: 14,
  },
  sub: {
    color: COLORS.gray,
    fontSize: 11,
    marginTop: 2,
  },
  points: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 13,
  },
});
