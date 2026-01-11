import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../theme/colors';

type Props = {
  title: string;
  points: string;
  time: string;
  image: any;
};

export default function HistoryCard({ title, points, time, image }: Props) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.icon} />

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.points}>{points}</Text>
      </View>

      <View style={styles.timeBox}>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '600',
  },
  points: {
    color: COLORS.gray,
    fontSize: 12,
    marginTop: 2,
  },
  timeBox: {
    backgroundColor: COLORS.black,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  time: {
    color: COLORS.white,
    fontSize: 11,
  },
});
