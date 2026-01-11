import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

const TABS = ['International', 'National', 'City'];

export default function LeaderboardTabs() {
  const [active, setActive] = useState(0);

  return (
    <View style={styles.container}>
      {TABS.map((item, index) => (
        <TouchableOpacity
          key={item}
          style={styles.tab}
          onPress={() => setActive(index)}
        >
          <Text style={[styles.text, active === index && styles.active]}>
            {item}
          </Text>
          {active === index && <View style={styles.indicator} />}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.dark,
    marginHorizontal: 20,
    marginTop: 12,
    borderRadius: 24,
    paddingVertical: 6,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: COLORS.gray,
    fontSize: 13,
  },
  active: {
    color: COLORS.white,
    fontWeight: '600',
  },
  indicator: {
    marginTop: 6,
    width: 22,
    height: 3,
    borderRadius: 2,
    backgroundColor: COLORS.lime,
  },
});
