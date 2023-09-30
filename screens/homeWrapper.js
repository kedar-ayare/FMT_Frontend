import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import AllComments from './allComments';

import { sHeight, sWidth, wrapperStyleSheet } from '../utilities/data';

const Stack = createStackNavigator();

const HomeWrapper = () => {
    return (
        <View style={styles.main}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="AllComments" component={AllComments} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}


export default HomeWrapper

const styles = wrapperStyleSheet;