import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';


export default function DailyCheckInCard() {
        const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={() => navigation.navigate('DailyCheckin')}>
    <View style={styles.card}>
      <Text style={styles.title}>Daily Check In</Text>
      <Text style={styles.sub}>Get 5 credits every day!</Text>

      <View style={styles.progress}>
        <View style={styles.fill} />
        <Text style={styles.day}>Day 1</Text>
      </View>

      <Text style={styles.claim}>Claim here</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 14,
  },
  title: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 15,
  },
  sub: {
    color: COLORS.muted,
    fontSize: 12,
    marginVertical: 6,
  },
  progress: {
    height: 10,
    backgroundColor: '#6A22C7',
    borderRadius: 6,
    marginTop: 8,
    position: 'relative',
  },
  fill: {
    width: '30%',
    height: '100%',
    backgroundColor: COLORS.yellow,
    borderRadius: 6,
  },
  day: {
    position: 'absolute',
    right: 0,
    top: -18,
    fontSize: 12,
    color: COLORS.white,
  },
  claim: {
    color: COLORS.yellow,
    fontSize: 12,
    textAlign: 'right',
    marginTop: 6,
  },
});
