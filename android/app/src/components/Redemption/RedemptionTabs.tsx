import React, { useState }  from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

const tabs = ['Confirmed', 'Pending', 'History'];

export default function RedemptionTabs() {
    const [active, setActive] = useState(0);
  
  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={tab} 
          style={[styles.tab, active === index && styles.activeTab]}
           onPress={() => setActive(index)}
        >
          <Text
           style={[styles.text, active === index && styles.active]}
          >
            {tab}
          </Text>
           {active === index && <View style={styles.indicator} />}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
   indicator: {
    marginTop: 6,
    width: 22,
    height: 3,
    borderRadius: 2,
    backgroundColor: COLORS.lime,
  },
   text: {
    color: COLORS.gray,
    fontSize: 13,
  },
  active: {
    color: COLORS.white,
    fontWeight: '600',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#5A0094',
    borderRadius: 24,
    padding: 4,
    marginVertical: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    color: COLORS.textLight,
    fontWeight: '500',
  },
  activeText: {
    color: COLORS.yellow,
    fontWeight: '700',
  },
});
