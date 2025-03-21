// DUSRE USER KA SCREEN
// SEEND WHEN APNA USER VISITS KISI AUR KA PROFILE BY SEARCHING
// OR BY TAPPING ON THE PROFILE OF POST/COMMENT OR ANY SIMILAR WAY


import { StyleSheet, RefreshControl, ScrollView, ActivityIndicator, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';

import UserScreenHeader from './components/UserScreenHeader';
import UserPosts from './userPosts';
import UserScreenButtons from './components/userScreenButtons';
import NavHeader from './components/navHeader';
import { getServerAddress, sHeight, sWidth, tokenKeyName } from '../utilities/data';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { encrypt } from '../utilities/encrypt';


export default function UserScreen({ route }) {


    const { userDets } = route.params;
    const [refreshing, setRefreshing] = useState();
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(undefined)

    const [isFollowed, setFollowed] = useState(false);
    const [isConnected, setConnected] = useState(false);

    // const [banner, setBanner] = useState(true);

    useEffect(() => {
        fetchUserDetails()
    }, [])

    useEffect(() => {
        initialRun()
    }, [userData])


    function checkIfRequested(userId, kind) {
        for (let i = 0; i < userData[kind].length; i++) {
            if (userData[kind][i].senderId == userId) {
                return true
            }
        }
        return false

    }
    function checkFollowing(userId) {
        if (userData.followers.indexOf(userId) != -1) {
            setFollowed("Following")
        } else if (checkIfRequested(userId, "followReqs")) {
            setFollowed("Requested")
        } else {
            setFollowed("Follow")
        }

    }

    function checkConnection(userId) {
        if (
            userData.parents.indexOf(userId) != -1 ||
            userData.siblings.indexOf(userId) != -1 ||
            userData.children.indexOf(userId) != -1
        ) {
            setConnected("Connected")
        } else if (checkIfRequested(userId, "connectReqs")) {
            setConnected("Requested")
        } else {
            setConnected("Connect")
        }
    }
    async function initialRun() {
        if (userData != undefined) {
            const userId = await AsyncStorage.getItem("userId");
            checkFollowing(userId)
            checkConnection(userId)
        }
        setRefreshing(false)
    }

    function refetch() {
        console.log("Refetching")
        setTimeout(() => {
            fetchUserDetails()
        }, 500)
    }

    async function onRefresh() {
        fetchUserDetails()
    }

    function renderDisplay() {
        if (loading && userData == undefined) {
            return <LoadingScreen />
        } else {
            return <>
                <ScrollView
                    style={{ height: sHeight * 0.92, position: 'relative' }}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()} />
                    }
                >
                    <NavHeader />

                    {/* Height 0.22 */}
                    <UserScreenHeader
                        userData={userData}
                    />

                    {/* Height 0.14 */}
                    <UserScreenButtons
                        isFollowed={isFollowed}
                        isConnected={isConnected}
                        setConnected={setConnected}
                        userData={userData}
                        refetch={refetch}
                        setLoading={setLoading}
                    />
                    {loading && <LoadingBlock />}
                    <UserPosts
                        userData={userData}
                    />

                </ScrollView>

            </>
            // { banner && <ErrBanner message={banner.message} type={banner.type} /> }


        }
    }

    async function fetchUserDetails() {
        console.log("Fetching User Details....")
        const url = getServerAddress() + "/api/users/" + userDets[0]
        const token = await AsyncStorage.getItem(tokenKeyName())
        const headers = {
            token: await encrypt(token)
        }
        console.log("Headers ka token jo bhej rahe hai")
        console.log(headers.token)
        axios.get(url, { headers }).then((response) => {
            console.log(response.data)
            if (response.data !== userData) {
                setUserData(response.data)
            }
            setLoading(false)
        }).catch((error) => {
            console.log(error)
        })

    }

    return (
        <>
            {
                renderDisplay()
            }
        </>

    )
}

const LoadingScreen = () => {
    return (
        <View style={{ height: sHeight * 0.92, width: sWidth, alignItems: "center", justifyContent: "center", }}>
            <ActivityIndicator size={50} color="#5C735D" style={styles.loader} />
        </View>

    );
};

const LoadingBlock = () => {
    return (
        <View style={{ height: sHeight * 0.1, width: sWidth, alignItems: "center", justifyContent: "center", }}>
            <ActivityIndicator size={50} color="#5C735D" style={styles.loader} />
        </View>

    );
}


const styles = StyleSheet.create({

})