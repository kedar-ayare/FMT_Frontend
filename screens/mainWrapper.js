import { View, StyleSheet } from 'react-native'
import React from 'react'

import { useState } from 'react';

import BottomNav from './components/bottomNav';

// All Five Screens
import ProfileScreen from './profileScreen';
import SearchWrapper from './searchWrapper';
import HomeWrapper from './homeWrapper';
import NewPost from './newPost';
import Notifications from './notifications';

import { sHeight, sWidth } from '../utilities/data';


export default function MainWrapper({ logout }) {

    const [navOpt, setNavOpt] = useState("search");


    /*
        Called when any bottom nav option is clicked
    */
    function handleTap(value) {

        if (value !== navOpt) {
            console.log("Inside: ", value);
            setNavOpt(value)
        }

    }


    /* 
        Function that displays the appropriate component 
        based on potion selected in bottom nav
    */
    function renderDisplay() {
        if (navOpt === "home") {
            return <HomeWrapper />
        } else if (navOpt === "search") {
            return <SearchWrapper />
        } else if (navOpt === "profile") {
            return <ProfileScreen logout={logout} />
        } else if (navOpt === "notification") {
            return <Notifications />
        }
        else if (navOpt === "newpost") {
            return <NewPost />
        }
        else {
            return <View style={styles.content} />
        }
    }

    return (
        <View style={styles.main}>
            {
                renderDisplay()
            }

            <BottomNav
                navOpt={navOpt}
                handleTap={handleTap}
            />
        </View>


    )
}

const styles = StyleSheet.create({
    main: {
        height: sHeight,
        width: sWidth,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: 0,
        padding: 0,
        backgroundColor: "#fbfbfb"
    },
    content: {
        height: sHeight * 0.9,
    }

})