import { View, Text, StyleSheet, Dimensions, } from 'react-native'
import React from 'react'

import { useState, useEffect } from 'react';

import BottomNav from './components/bottomNav';
import ProfileScreen from './profileScreen';
import Home from './home';
import SearchWrapper from './searchWrapper';

let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;


export default function MainWrapper() {

    const [navOpt, setNavOpt] = useState("profile");

    function handleTap(value) {

        if (value !== navOpt) {
            console.log(value);
            setNavOpt(value)
        }

    }

    function renderDisplay() {
        if (navOpt === "home") {
            return <Home />
        } else if (navOpt === "search") {
            return <SearchWrapper />
        } else if (navOpt === "profile") {
            return <ProfileScreen />
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