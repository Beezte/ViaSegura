import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Signup, Termos, Welcome, SplashVideo, Home } from './screens'

import * as Font from 'expo-font';
import { useState, useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Inter_100Thin, Inter_200ExtraLight, Inter_300Light ,Inter_400Regular, 
  Inter_500Medium, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter'

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator()

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Inter_100Thin,
          Inter_200ExtraLight,
          Inter_300Light,
          Inter_400Regular,
          Inter_500Medium,
          Inter_700Bold,
          Inter_900Black,
        });
        
        await SplashScreen.hideAsync();
        // setTimeout(async () => {
        //   await SplashScreen.hideAsync();
        //   setIsReady(true);
        // }, 5000);
      } catch (e) {
        console.log(e);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SplashVideo'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
            animation: 'none'
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Termos"
          component={Termos}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="SplashVideo"
          component={SplashVideo}
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}