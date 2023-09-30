// DUSRE USER KA SCREEN
// SEEND WHEN APNA USER VISITS KISI AUR KA PROFILE BY SEARCHING
// OR BY TAPPING ON THE PROFILE OF POST/COMMENT OR ANY SIMILAR WAY


import { StyleSheet, Text, View, RefreshControl, ScrollView, Dimensions, Modal } from 'react-native'
import React from 'react'
import { useState } from 'react';

import UserScreenHeader from './components/UserScreenHeader';
import UserPosts from './userPosts';
import UserScreenButtons from './components/userScreenButtons';
import { sHeight, sWidth } from '../utilities/data';


let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

export default function UserScreen({ route }) {

    const { name } = route.params;

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
        </ScrollView>

    )
}

const styles = StyleSheet.create({

})