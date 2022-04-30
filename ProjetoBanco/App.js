import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';

import AppContext from './components/AppContext';

import LoginScreen from './components/LoginScreen.js';
import HomeScreen from './components/HomeScreen.js';
import DetailsScreen from './components/DetailsScreen.js';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isSignedIn, setisSignedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const signIn = (user, password) => {
    if (user && password) {
      setUserName(user);
      setisSignedIn(true);
    }
    else {
      alert('Usuário e Senha devem ser preenchidos');
    }
  };

  const signOut = () => {
    setUserName('');
    setisSignedIn(false);
  };

  const userSettings = {
    isSignedIn,
    userName,
    signIn,
    signOut
  };

  return (
    <AppContext.Provider value={userSettings}>
      <NavigationContainer>
        <Stack.Navigator>
          {
            !isSignedIn ? (
              <>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
              </>
            ) :
              (
                <>
                  <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({
                    title: `Olá ${userName}`,
                    headerRight: () => (
                      <TouchableOpacity onPress={signOut}> 
                        <Text>Sair</Text>
                      </TouchableOpacity>
                    ),
                  })} />
                  <Stack.Screen name="Details" component={DetailsScreen} />
                </>
              )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
