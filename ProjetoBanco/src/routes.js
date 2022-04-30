import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './components/home';
import DescriptionPage from './components/description';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Description" component={DescriptionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};