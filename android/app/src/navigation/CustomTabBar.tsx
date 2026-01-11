import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { COLORS } from '../theme/colors';

import HomeIcon from '../assets/icons/home.svg';
import LeaderboardIcon from '../assets/icons/leaderboard.svg';
import TeamIcon from '../assets/icons/team.svg';
import HistoryIcon from '../assets/icons/history.svg';
import TicketIcon from '../assets/icons/ticket.svg';

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {

    const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },

  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 32,
    height: 72,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    elevation: 10,
  },

  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  label: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },

  centerButtonWrapper: {
    position: 'absolute',
    alignSelf: 'center',
    top: -30,
  },

  centerButton: {
    width: 64,
    height: 64,
    backgroundColor: COLORS.dark,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '45deg' }],
    elevation: 12,
  },
});


  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          if (route.name === 'Add') {
            return (
              <View key={route.key} style={styles.centerButtonWrapper}>
                <TouchableOpacity style={styles.centerButton}>
                  <TicketIcon width={26} height={26} color="#FFC107" />
                </TouchableOpacity>
              </View>
            );
          }

          const onPress = () => navigation.navigate(route.name);

          const color = isFocused ? COLORS.primary : COLORS.gray;

          const Icon =
            route.name === 'Home'
              ? HomeIcon
              : route.name === 'Leaderboard'
              ? LeaderboardIcon
              : route.name === 'Team'
              ? TeamIcon
              : HistoryIcon;

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.tab}
              activeOpacity={0.8}
            >
              <Icon width={22} height={22} color={color} />
              <Text style={[styles.label, { color }]}>{route.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
