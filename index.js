/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';

import { name as appName } from './app.json';
import asyncStorage from './screens/asyncStorage';


import AppWrapper from './screens/appWrapper';
import LogSign from './screens/logSign';
import MainWrapper from './screens/mainWrapper';
import LoadingNoNet from './screens/loadingNoNet';
import YourScreen from './testingComponents/main';
import App from './testingComponents/main';
import npAddImages from './screens/newPost/npAddImages';
import NewPost from './utilities/test';
import NewPostWrapper from './screens/newPost/newPostWrapper';

// AppRegistry.registerComponent(appName, () => NewPostWrapper);

AppRegistry.registerComponent(appName, () => AppWrapper);   
