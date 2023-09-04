import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { React, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store"
import { getServerAddress } from '../utilities/data';
import axios from 'axios';
import { encrypt } from '../utilities/encrypt';


import LogSignWrapper from './logSignWrapper'
import MainWrapper from './mainWrapper';
import LoadingScreen from './components/loading';
import LoadingNoNet from './components/loadingNoNet';

export default function AppWrapper() {
    console.info("In App Wrapper")

    const [loggedIn, setLoggedIn] = useState();

    useEffect(() => {
        checkUserLogIn1()
    }, [])

    async function logout() {
        try {
            const temp = await AsyncStorage.setItem('userId', "")
            console.log(temp)
            setLoggedIn(false)
        } catch (e) {
            console.log(e)
        }
    }

    async function setUserId(token) {
        console.log("Token received")
        console.log(token)
        try {
            await AsyncStorage.setItem('userId', token)
            const _value = await AsyncStorage.getItem('userId')
            console.log(_value)
            setLoggedIn(true)
        } catch (e) {
            console.log(e)
        }
    }

    async function checkUserLogIn1() {
        console.log("checkUserLogIn")
        var value;
        try {
            value = await AsyncStorage.getItem('userId')
            console.log("value: ", encrypt(value))
        } catch (e) {
            console.log(e)
        }
        if (value != null) {
            var endpoint = getServerAddress() + "/api/validation/"
            console.log(endpoint)
            const headers = {
                token: encrypt(value)
            }

            try {
                console.log("Send endpoint request")
                const response = await axios.get(endpoint, { headers })
                console.log(response.data)
                // console.log("7777777777777")
                if (response.data.err === "Code-01") {
                    setLoggedIn(true);
                } else {
                    setLoggedIn(false)
                }

            } catch (e) {

                console.log(setLoggedIn("Net"))
            }
        } else {
            setLoggedIn(false)
        }

    }
    return (
        <>
            {loggedIn === "Net" ? <LoadingNoNet logout={logout} /> :
                loggedIn === undefined ? <LoadingScreen /> :
                    (loggedIn) ? <MainWrapper logout={logout} /> : <LogSignWrapper setUserId={setUserId} />}
        </>

    )
}

const styles = StyleSheet.create({})


// http://5ddd-103-44-107-153.ngrok-free.app/api/validation/ 