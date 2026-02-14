import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';


export default function DailyCheckIn() {
          const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={() => navigation.navigate('DailyCheckin')}>
      <Text style={styles.title}>Daily Check In</Text>
      <Text style={styles.sub}>Get 5 credits every day!</Text>
      <View style={styles.progress} />
      <Text style={styles.day}>Day 1</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#8E2DE2',
    margin: 20,
    padding: 16,
    borderRadius: 16,
  },
  title: { color: '#fff', fontWeight: '700' },
  sub: { color: '#E0E0E0', fontSize: 12 },
  progress: {
    height: 8,
    backgroundColor: '#C8F169',
    borderRadius: 8,
    marginTop: 12,
  },
  day: {
    alignSelf: 'flex-end',
    color: '#fff',
    fontSize: 12,
  },
});
