/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import logSign from './screens/logSign';
import logIn from './screens/logIn';
import register_1 from './screens/register_1';
import register_2 from './screens/register_2';
import otpScreen from './screens/otpScreen';
import Search from './screens/search';
import MainWrapper from './screens/mainWrapper';

import { name as appName } from './app.json';
import asyncStorage from './screens/asyncStorage';


AppRegistry.registerComponent(appName, () => MainWrapper);
