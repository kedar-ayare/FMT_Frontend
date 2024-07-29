import { StyleSheet, View } from 'react-native'
import React from 'react';
import { sHeight, sWidth, wrapperStyleSheet } from '../utilities/data';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './search';
import UserScreen from './userScreen';
import ProfileScreen from './profileScreen';
import PostDetails from './postDetails';
import AllComments from './allComments';



const Stack = createStackNavigator();

const SearchWrapper = () => {
    return (
        <View style={styles.main}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="UserList" component={Search} options={{ headerShown: false }} />
                    <Stack.Screen name="UserScreen" component={UserScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="PostDetails" component={PostDetails} options={{ headerShown: false }} />
                    <Stack.Screen name="AllComments" component={AllComments} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}


export default SearchWrapper

const styles = wrapperStyleSheet;