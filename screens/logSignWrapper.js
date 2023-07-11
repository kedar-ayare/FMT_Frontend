import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogSign from './logSign';
import LogIn from './logIn';
import Register_1 from './register_1';
import Register_2 from './register_2';
import OtpScreen from './otpScreen';

const Stack = createStackNavigator();

let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

function withSetUserId(Component, setUserId) {
    return function WrappedComponent(props) {
        return <Component {...props} setUserId={setUserId} />;
    };
}

export default function LogSignWrapper({ setUserId }) {
    console.info("Inside LogSign Wrapper")

    const LogSignWithSetUserId = withSetUserId(LogIn, setUserId);


    return (
        <View style={styles.main}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        screenFunction: setUserId
                    }}
                >
                    <Stack.Screen name="LogSign" component={LogSign} options={{
                        headerShown: false,

                    }}


                    />
                    <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }}
                        initialParams={{
                            setUserId
                        }}
                    />
                    <Stack.Screen name="Register1" component={Register_1} options={{ headerShown: false }} />
                    <Stack.Screen name="Register2" component={Register_2} options={{ headerShown: false }} />
                    <Stack.Screen name="OTP" component={OtpScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        width: sWidth,
        height: sHeight,
    }
})