import { StyleSheet, Text, View, RefreshControl, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { useState } from 'react';

import UserScreenHeader from './components/UserScreenHeader';
import UserPosts from './userPosts';


let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

export default function UserScreen() {

    const [refreshing, setRefreshing] = useState();
    function onRefresh() {
        console.log("Refreshed")
        setRefreshing(false)
    }
    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            {/* Height 0.22 */}
            <UserScreenHeader />

            {/* Height 0.14 */}
            {/* <ProfileScreenButtons /> */}

            <UserPosts />
        </ScrollView>

    )
}

const styles = StyleSheet.create({

})