/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/pages/home';
import RegisterPage from './src/pages/registers';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerTintColor: "red"}}>
        </Stack.Screen>
        <Stack.Screen
          name="Registers"
          component={RegisterPage}
          options={{headerTintColor: "red"}}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
