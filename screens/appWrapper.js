import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { React, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


import LogSignWrapper from './logSignWrapper'
import MainWrapper from './mainWrapper';
import LoadingScreen from './components/loadingScreen';

export default function AppWrapper() {
    console.info("In App Wrapper")

    const [loggedIn, setLoggedIn] = useState();

    useEffect(() => {
        checkUserLogIn1()
    }, [])


    async function setUserId(token) {
        console.log("Token received")
        console.log(token)
        try {
            const temp = await AsyncStorage.setItem('userId', token)
            console.log(temp)
            setLoggedIn(true)
        } catch (e) {
            console.log(e)
        }
    }

    async function checkUserLogIn1() {
        var value;
        try {
            value = await AsyncStorage.getItem('userId')
            console.log(value)
        } catch (e) {
            console.log(e)
        }
        if (value != null) {
            setLoggedIn(true);
        }
    }
    return (
        <>
            {loggedIn === undefined ? <LoadingScreen /> : (loggedIn) ? <MainWrapper /> : <LogSignWrapper setUserId={setUserId} />}
        </>

    )
}

const styles = StyleSheet.create({})