import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import BottomTabs from './BottomTabs';
import FlappyBirdScreen from '../games/FlappyBirdScreen';
import LudoScreen from '../games/LudoScreen';
import BubbleShooterScreen from '../games/BubbleShooterScreen';
import CandyCrushScreen from '../games/CandyCrushScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DailyCheckIn from '../screens/DailyCheckinScreen';
import RedemptionsScreen from '../screens/RedemptionsScreen';
import ChatScreen from '../screens/ChatScreen';


export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  HomeTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="HomeTabs" component={BottomTabs} />
        <Stack.Screen name="FlappyBird" component={FlappyBirdScreen} />
        <Stack.Screen name="Ludo" component={LudoScreen} />
        <Stack.Screen name="BubbleShooter" component={BubbleShooterScreen} />
        <Stack.Screen name="CandyCrush" component={CandyCrushScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="DailyCheckin" component={DailyCheckIn} />
        <Stack.Screen name="Redemptions" component={RedemptionsScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
