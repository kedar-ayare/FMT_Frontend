import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './search';
import UserScreen from './userScreen';


let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

const Stack = createStackNavigator();

const SearchWrapper = () => {
    return (
        <View style={styles.main}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="UserList" component={Search} options={{ headerShown: false }} />
                    <Stack.Screen name="UserDetail" component={UserScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}


export default SearchWrapper

const styles = StyleSheet.create({
    main: {
        width: sWidth,
        height: sHeight * 0.92,
    }
})