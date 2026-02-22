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
import SankeLadder from '../games/SankeLadder';
import ShipScreen from '../games/ShipScreen';
import WaterSortScreen from '../games/WaterSortScreen';
import BlocksMatch from '../games/BlocksMatch';
import FruitNinja from '../games/FruitNinja';
import WordPuzzle from '../games/WordPuzzle';
import KnifeScreen from '../games/KnifeScreen';
import PaymentScreen from '../screens/PaymentScreen';


export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  HomeTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator({ initialRouteName = 'Onboarding' }: { initialRouteName?: string }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
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
        <Stack.Screen name="SankeLadder" component={SankeLadder} />
        <Stack.Screen name="Ship" component={ShipScreen} />
        <Stack.Screen name="WaterSort" component={WaterSortScreen} />
        <Stack.Screen name="BlocksMatch" component={BlocksMatch} />
        <Stack.Screen name="FruitNinja" component={FruitNinja} />
        <Stack.Screen name="WordPuzzle" component={WordPuzzle} />
        <Stack.Screen name="Knife" component={KnifeScreen} />

        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="DailyCheckin" component={DailyCheckIn} />
        <Stack.Screen name="Redemptions" component={RedemptionsScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} /> 

        <Stack.Screen name="PaymentScreen" component={PaymentScreen} /> 


      </Stack.Navigator>
    </NavigationContainer>
  );
}
