/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';

import { name as appName } from './app.json';
import asyncStorage from './screens/asyncStorage';


import AppWrapper from './screens/appWrapper';
import LogSign from './screens/logSign';
import MainWrapper from './screens/mainWrapper';
import LoadingNoNet from './screens/loadingNoNet';


AppRegistry.registerComponent(appName, () => AppWrapper);
