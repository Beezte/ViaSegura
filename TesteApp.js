import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Singup, Termos, Welcome, SplashVideo } from './screens'

import * as Font from 'expo-font';
import { useState, useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Inter_100Thin, Inter_200ExtraLight, Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter'

// SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <SplashVideo />
  );
}