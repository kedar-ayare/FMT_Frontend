import { View, Text, RefreshControl, ScrollView } from 'react-native'
import React, { useState } from 'react'

import UserScreenHeader from './components/UserScreenHeader';
import ProfileScreenButtons from './components/ProfileScreenButtons';
import UserPosts from './userPosts';



export default function ProfileScreen() {

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
            <ProfileScreenButtons />

            {/* <UserPosts /> */}
        </ScrollView>

    )
}