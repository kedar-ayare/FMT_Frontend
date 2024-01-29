import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { sHeight, sWidth } from '../utilities/data'

export default function UserPosts() {

    const urls = [

    ]



    return (
        <View >
            <View style={{ height: sHeight * 0.02, justifyContent: "center", alignItems: "center", backgroundColor: "#5C735D" }}>
            </View>
            <View style={{ width: sWidth, display: "flex", flexDirection: "row" }}>
                <Image style={{ width: sWidth / 3, height: sWidth / 3, aspectRatio: 1 }} source={require("../assets/postImgs/post1.jpg")}></Image>
                <Image style={{ width: sWidth / 3, height: sWidth / 3, aspectRatio: 1 }} source={require("../assets/postImgs/post2.jpg")}></Image>
                <Image style={{ width: sWidth / 3, height: sWidth / 3, aspectRatio: 1 }} source={require("../assets/postImgs/post3.jpg")}></Image>
            </View>
            <View style={{ width: sWidth, display: "flex", flexDirection: "row" }}>
                <Image style={{ width: sWidth / 3, height: sWidth / 3, aspectRatio: 1 }} source={require("../assets/postImgs/post2.jpg")}></Image>
                <Image style={{ width: sWidth / 3, height: sWidth / 3, aspectRatio: 1 }} source={require("../assets/postImgs/post3.jpg")}></Image>
                <Image style={{ width: sWidth / 3, height: sWidth / 3, aspectRatio: 1 }} source={require("../assets/postImgs/post1.jpg")}></Image>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({})