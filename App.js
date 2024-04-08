import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Singup, Termos, Welcome } from './screens'

import * as Font from 'expo-font';
import { useState, useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Inter_100Thin, Inter_200ExtraLight, Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter'

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
          Inter_400Regular,
          Inter_500Medium,
          Inter_700Bold,
          Inter_900Black,
        });
        // Garante que o tempo mínimo de carregamento seja de 5 segundos
        setTimeout(async () => {
          await SplashScreen.hideAsync();
          setIsReady(true);
        }, 5000);
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
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
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
          name="Singup"
          component={Singup}
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

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
