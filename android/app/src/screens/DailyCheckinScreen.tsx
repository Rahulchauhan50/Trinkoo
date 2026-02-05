import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { COLORS } from '../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';


import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function DailyCheckinScreen() {
    const navigation = useNavigation();
  
  const checkedDays = [1, 2, 3];

  return (
    <LinearGradient
      colors={['#7B0FCB', '#5A00A8']}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      {/* HEADER */}
      <View style={styles.header}>
         <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>
        <Text style={styles.headerTitle}>Daily Checkin</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* CREDIT COUNTER */}
      <View style={styles.creditRow}>
        {['2', '7', '5'].map((d, i) => (
          <View key={i} style={styles.creditBox}>
            <Text style={styles.creditText}>{d}</Text>
          </View>
        ))}
        <Text style={styles.creditLabel}>Credit</Text>
      </View>

      {/* CALENDAR CARD */}
      <View style={styles.calendarCard}>
        {/* HOOKS */}
        <View style={styles.hooksRow}>
          {Array.from({ length: 7 }).map((_, i) => (
            <View key={i} style={styles.hookWrapper}>
              <View style={styles.hookTop} />
              <View style={styles.hookBottom} />
            </View>
          ))}
        </View>

        {/* DAYS GRID */}
        <View style={styles.daysGrid}>
          {Array.from({ length: 30 }).map((_, i) => {
            const day = i + 1;
            const checked = checkedDays.includes(day);

            return (
              <View key={day} style={styles.dayCell}>
                {checked ? (
                  <View style={styles.checkedDay}>
                    <Ionicons
                      name="checkmark"
                      size={16}
                      color="#FFF"
                    />
                  </View>
                ) : (
                  <View style={styles.emptyDay}>
                    <Text style={styles.dayText}>{day}</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </View>
    </LinearGradient>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  backArrow: {
      color: COLORS.white,
      fontSize: 42,
      fontWeight: '600',
    },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 56,
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },

  /* CREDIT */
  creditRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 20,
  },
  creditBox: {
    width: 52,
    height: 64,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  creditText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
  },
  creditLabel: {
    color: '#FFF',
    fontSize: 14,
    marginLeft: 8,
    marginBottom: 8,
  },

  /* CALENDAR CARD */
  calendarCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingTop: 22,
    paddingBottom: 18,
    paddingHorizontal: 12,
  },

  /* HOOKS */
  hooksRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    marginBottom: 12,
  },
  hookWrapper: {
    alignItems: 'center',
    width: '14.28%',
  },
  hookTop: {
    width: 6,
    height: 14,
    backgroundColor: '#7B0FCB',
    borderRadius: 3,
  },
  hookBottom: {
    width: 10,
    height: 10,
    backgroundColor: '#00C853',
    borderRadius: 5,
    marginTop: -2,
  },

  /* DAYS GRID */
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: '14.28%',
    alignItems: 'center',
    marginVertical: 6,
  },
  checkedDay: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#00C853',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyDay: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#AAA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    fontSize: 12,
    color: '#222',
  },
});
