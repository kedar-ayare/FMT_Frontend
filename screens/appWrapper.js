import { ScrollView, Text, View } from 'react-native'
import { React, useState, useEffect } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { getServerAddress, tokenKeyName } from '../utilities/data';
import { encrypt } from '../utilities/encrypt';

import axios from 'axios';

import LogSignWrapper from './logSignWrapper'
import MainWrapper from './mainWrapper';
import LoadingScreen from './loadingScreen';
import LoadingNoNet from './loadingNoNet';

export default function AppWrapper() {
    console.info("In App Wrapper")

    const [loggedIn, setLoggedIn] = useState();

    // Hook to run the checkUSerLogin when screen is loaded
    useEffect(() => {
        checkUserLogIn1()
    }, [])


    /*
    Function that let's user Logout from the account.
    Is passed to the MainWrapper screen below to be added in require component/screen 
    */
    async function logout() {
        try {
            const temp = await AsyncStorage.setItem(tokenKeyName(), "")
            console.log(temp)
            setLoggedIn(false)
        } catch (e) {
            console.log(e)
        }
    }

    /* 
        Fuction passed to LogSignWrapper to set user Id whenever
        user registers or logs in and refreshes the app.
    */
    async function setUserId(token, userId) {
        // console.log("Token received")
        // console.log(token)
        try {
            await AsyncStorage.setItem(tokenKeyName(), token)
            await AsyncStorage.setItem("userId", userId)
            const _value = await AsyncStorage.getItem(tokenKeyName())
            // console.log(_value)
            setLoggedIn(true)
        } catch (e) {
            console.log(e)
        }
    }

    /* 
        Function that runs when app opened
        Looks for user token in local storage and validates it
        updates the "loggedIn" state accordingly
    */
    async function checkUserLogIn1() {
        var value;
        try {
            value = await AsyncStorage.getItem(tokenKeyName())
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
            {loggedIn === "Net" ? <LoadingNoNet logout={logout} /> : //No Internet or Server Issue
                loggedIn === undefined ? <LoadingScreen /> : //Loading screen for user till validation is completed
                    (loggedIn) ? <MainWrapper logout={logout} /> : <LogSignWrapper setUserId={setUserId} />}
        </>

    )
}



// http://5ddd-103-44-107-153.ngrok-free.app/api/validation/ 