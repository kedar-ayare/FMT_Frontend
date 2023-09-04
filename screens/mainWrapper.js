import { View, StyleSheet, Dimensions, } from 'react-native'
import React from 'react'

import { useState, useEffect } from 'react';

import BottomNav from './components/bottomNav';
import ProfileScreen from './profileScreen';

import SearchWrapper from './searchWrapper';
import HomeWrapper from './homeWrapper';

import NewPost from './newPost';

import Notifications from './notifications';

let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;


export default function MainWrapper({ logout }) {

    const [navOpt, setNavOpt] = useState("search");

    function handleTap(value) {

        if (value !== navOpt) {
            console.log("Inside: ", value);
            setNavOpt(value)
        }

    }

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
            {/* <Search /> */}
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
        // backgroundColor: "yellow",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: 0,
        padding: 0,
        backgroundColor: "#fbfbfb"
    },
    content: {
        height: sHeight * 0.9,
        // backgroundColor: "",
    }

})