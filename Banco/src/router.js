import React from 'react';
import HomePage from './pages/home';
import RegisterPage from './pages/registers';
import  { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
    createStackNavigator({
        Home: HomePage,
        Register: RegisterPage
    })
)

export default Routes;