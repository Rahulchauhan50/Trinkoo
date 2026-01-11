import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import LeaderboardIcon from '../assets/icons/leaderboard.svg';
import AddIcon from '../assets/icons/add.svg';
import FriendsIcon from '../assets/icons/friends.svg';
import HistoryIcon from '../assets/icons/history.svg';

import { View, Text } from 'react-native';
import HomeIcon from '../assets/icons/home.svg';
import { COLORS } from '../theme/colors';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import HistoryScreen from '../screens/HistoryScreen';
import TeamScreen from '../screens/TeamScreen';
import TopUpScreen from '../screens/TopUpScreen';

const Tab = createBottomTabNavigator();

const Dummy = ({ label }: { label: string }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{label}</Text>
  </View>
);

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: '#9E9E9E',
        tabBarStyle: {
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
        },

        tabBarIcon: ({ color, focused }) => {
          const size = route.name === 'Add' ? 30 : 24;

          switch (route.name) {
            case 'Home':
              return <HomeIcon width={size} height={size} fill={color} />;

            case 'Leaderboard':
              return <LeaderboardIcon width={size} height={size} fill={color} />;

            case 'Add':
              return <AddIcon width={size} height={size} fill={color} />;

            case 'Friends':
              return <FriendsIcon width={size} height={size} fill={color} />;

            case 'History':
              return <HistoryIcon width={size} height={size} fill={color} />;

            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Tab.Screen name="Add" component={TopUpScreen} />
      <Tab.Screen name="Friends" component={TeamScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>


    // <Tab.Navigator
    //   screenOptions={({ route }) => ({
    //     headerShown: false,
    //     tabBarShowLabel: true,
    //     tabBarActiveTintColor: COLORS.primary,
    //     tabBarInactiveTintColor: '#999',
    //     tabBarStyle: {
    //       height: 70,
    //       borderTopLeftRadius: 20,
    //       borderTopRightRadius: 20,
    //     },

    //     tabBarIcon: ({ focused, color, size }) => {
    //       let iconName = '';

    //       switch (route.name) {
    //         case 'Home':
    //           iconName = focused ? 'home' : 'home-outline';
    //           break;
    //         case 'Leaderboard':
    //           iconName = focused ? 'trophy' : 'trophy-outline';
    //           break;
    //         case 'Add':
    //           iconName = focused ? 'add-circle' : 'add-circle-outline';
    //           size = 34; // center icon bigger
    //           break;
    //         case 'Friends':
    //           iconName = focused ? 'people' : 'people-outline';
    //           break;
    //         case 'History':
    //           iconName = focused ? 'time' : 'time-outline';
    //           break;
    //       }

    //       return <Ionicons name={iconName} size={size} color={color} />;
    //     },
    //   })}
    // >
    //   <Tab.Screen name="Home" component={HomeScreen} />
    //   <Tab.Screen name="Leaderboard" children={() => <Dummy label="Leaderboard" />} />
    //   <Tab.Screen name="Add" children={() => <Dummy label="Add" />} />
    //   <Tab.Screen name="Friends" children={() => <Dummy label="Friends" />} />
    //   <Tab.Screen name="History" children={() => <Dummy label="History" />} />
    // </Tab.Navigator>
  );
}

