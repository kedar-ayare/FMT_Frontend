import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import NPAddImages from './npAddImages'
import NPAddDetails from './npAddDetails'
import { wrapperStyleSheet } from '../../utilities/data'
import { ImageProvider } from './imageProvider'
// import NewTemp from './newTemp'
const Stack = createStackNavigator()
export default function NewPostWrapper() {

    return (
        <ImageProvider>
            <View style={styles.main}>
                <NavigationContainer>
                    <Stack.Navigator>
                        {/* <Stack.Screen name="newTemp" component={NewTemp} options={{ headerShown: false }} /> */}
                        <Stack.Screen name="AddImages" component={NPAddImages} options={{ headerShown: false }} />
                        <Stack.Screen name="AddDetails" component={NPAddDetails} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </ImageProvider>
        
    )
}

const styles = wrapperStyleSheet