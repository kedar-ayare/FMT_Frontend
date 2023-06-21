import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, useNavigation } from 'react-native'
import React from 'react'

import { useState, useEffect } from 'react';



let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

export default function BottomNav({ navOpt, handleTap }) {



    return (
        <View style={styles.main}>
            <TouchableOpacity
                style={styles.navButton}
                onPress={() => {
                    handleTap("home")
                }}
            >
                <Image
                    source={navOpt === "home" ? require("../../assets/home-bold.png") : require("../../assets/home.png")}
                    style={styles.navImg} />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navButton}
                onPress={() => {
                    handleTap("search")
                }}
            >
                <Image
                    source={navOpt === "search" ? require("../../assets/search-bold.png") : require("../../assets/search.png")} style={styles.navImg} />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navButton}
                onPress={() => {
                    handleTap("newpost")
                }}
            >
                <Image
                    source={navOpt === "newpost" ? require("../../assets/newPost-bold.png") : require("../../assets/newPost.png")} style={styles.navImg} />
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.navButton}
                onPress={() => {
                    console.log("noti")
                    handleTap("notification")
                }}
            >
                <Image
                    source={navOpt === "notification" ? require("../../assets/heart-bold.png") : require("../../assets/heart.png")} style={styles.navImg} />
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.navButton}
                onPress={() => {
                    handleTap("profile")
                }}
            >
                <Image source={{ uri: 'https://myfamtree.000webhostapp.com/appImages/kedar.jpg' }} style={[styles.navImg, styles.profileImg]} />
            </TouchableOpacity>




        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        height: sHeight * 0.08,
        backgroundColor: "white",
        width: sWidth,

        color: "red",

        elevation: 45,

        shadowColor: '#000',
        shadowOffset: { width: -10, height: -10 },
        shadowOpacity: 1,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: sHeight * 0.01
    },
    navImg: {
        height: sHeight * 0.035,
        width: sHeight * 0.035,
    },
    profileImg: {
        borderRadius: sHeight * 0.2
    },
    navButton: {
        height: sHeight * 0.1,
        width: sWidth * 0.33,
        justifyContent: "center",
        alignItems: "center"
    }

})