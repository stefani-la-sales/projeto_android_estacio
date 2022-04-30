/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoginPage from './src/components/login';

AppRegistry.registerComponent(appName, () => LoginPage);
