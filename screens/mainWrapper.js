import { View, Text, StyleSheet, Dimensions, } from 'react-native'
import React from 'react'

import { useState, useEffect } from 'react';

import BottomNav from './components/bottomNav';
import Search from './search';
import UserScreen from './userScreen';

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
            return <View style={styles.content} />
        } else if (navOpt === "search") {
            return <Search />
        } else if (navOpt === "profile") {
            return <UserScreen />
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