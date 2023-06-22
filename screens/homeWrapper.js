import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import AllComments from './allComments';


let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

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

const styles = StyleSheet.create({
    main: {
        width: sWidth,
        height: sHeight * 0.92,
    }
})