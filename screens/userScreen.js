import { View, Text, RefreshControl, ScrollView } from 'react-native'
import React, { useState } from 'react'

import UserScreenHeader from './components/userScreenHeader';
import UserScreenButtons from './components/userScreenButtons';
import UserPosts from './userPosts';



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
            <UserScreenButtons />
            <UserPosts />
        </ScrollView>

    )
}