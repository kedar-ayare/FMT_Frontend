// USER KA KHUD KA SCREEN. 
// VISISTED UPON CLICKING THE RIGHT MOST BUTTON ON NAV BAR

import { View, Text, RefreshControl, ScrollView } from 'react-native'
import React, { useState } from 'react'

import UserScreenHeader from './components/UserScreenHeader';
import ProfileScreenButtons from './components/ProfileScreenButtons';
import UserPosts from './userFeed';



export default function ProfileScreen({ logout }) {

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
            <ProfileScreenButtons logout={logout} />

            {/* <UserPosts /> */}
        </ScrollView>

    )
}