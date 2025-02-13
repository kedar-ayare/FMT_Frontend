import { View, Text, StyleSheet, Image, TouchableOpacity, useNavigation } from 'react-native'
import React from 'react'
import { sHeight, sWidth, navBottomHeight } from '../../utilities/data';

export default function BottomNav({ navOpt, handleTap }) {
    const data = [
        {
            handleTap: "home",
            navOpt: "home",
            normal_img: require("../../assets/home.png"),
            bold_img:require("../../assets/home-bold.png")
        },
        {
            handleTap: "search",
            navOpt: "search",
            normal_img: require("../../assets/search.png"),
            bold_img:require("../../assets/search-bold.png")
        },
        {
            handleTap: "newpost",
            navOpt: "newpost",
            normal_img: require("../../assets/newPost.png"),
            bold_img:require("../../assets/newPost-bold.png")
        },
        {
            handleTap: "notification",
            navOpt: "notification",
            normal_img: require("../../assets/heart.png"),
            bold_img:require("../../assets/heart-bold.png")
        },
    ]

    const handleTapFunctions = {
        "home": () => handleTap("home"),
        "search": () => handleTap("search"),
        "newpost": () => handleTap("newpost"),
        "notification": () => handleTap("notification")
    };
    function renderNav(){
        const options = []
        for(let i = 0; i<data.length; i++){
            options.push(<TouchableOpacity
                key={i}
                style={styles.navButton}
                onPress={() => {
                    const action = handleTapFunctions[data[i].handleTap];
                    action()
                }}
            >
                <Image
                    source={navOpt === data[i].navOpt ? data[i].bold_img : data[i].normal_img}
                    style={styles.navImg} />
            </TouchableOpacity>)
        }
        options.push(<TouchableOpacity
            style={styles.navButton}
            onPress={() => {
                handleTap("profile")
            }}
        >
            <Image source={{ uri: 'https://myfamtree.000webhostapp.com/kedar.jpg' }} style={[styles.navImg, styles.profileImg]} />
        </TouchableOpacity>)
        return options

    }
    return (
        <View style={styles.main}>
            {
                renderNav()
            }
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        height: navBottomHeight,
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
        backgroundColor:"red"
    },
    navButton: {
        height: navBottomHeight,
        width: sWidth * 0.1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"yellow"
    },
    navImg: {
        height: sHeight * 0.03,
        width: sHeight * 0.03,
    },
    profileImg: {
        borderRadius: sHeight * 0.2
    }
    
})