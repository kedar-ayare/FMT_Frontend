import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { sHeight, sWidth } from '../../utilities/data'

export default function ProfileScreenHeader({ userData }) {
    return (
        <View style={styles.main}>

            <View style={{ height: sHeight * 0.13, display: "flex", flexDirection: "row", width: sWidth, alignItems: "flex-end" }}>

                <View style={styles.imgBox}>
                    <Image source={{ uri: userData.profileURL }}
                        style={styles.profileImg}
                    />

                </View>

                <View style={styles.detailBox}>
                    <Text style={styles.value}>{userData.posts.length}</Text>
                    <Text style={styles.item}>Posts</Text>
                </View>

                <View style={styles.detailBox}>
                    <Text style={styles.value}>{userData.followers.length}</Text>
                    <Text style={styles.item}>Followers</Text>
                </View>

                <View style={styles.detailBox}>
                    <Text style={styles.value}>{userData.following.length}</Text>
                    <Text style={styles.item}>Following</Text>
                </View>
            </View>
            <Text style={styles.username}>{userData.fname} {userData.lname}</Text>


        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#5C735D",
        width: sWidth,
        height: sHeight * 0.22,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    profileImg: {
        height: sHeight * 0.11,
        width: sHeight * 0.11,
        borderRadius: sHeight * 0.15,

    },
    username: {
        fontFamily: "RobotoSlab-Bold",
        fontSize: 18,
        color: "white",
        paddingLeft: sWidth * 0.31 - sHeight * 0.13,
        marginTop: sHeight * 0.005
        // backgroundColor: "yellow"
    },
    imgBox: {
        width: sWidth * 0.31,
        // backgroundColor: "black",
        alignItems: "center",
    },
    detailBox: {
        width: sWidth * 0.23,
        // backgroundColor: "black",
        alignItems: "center",
    },
    value: {
        fontFamily: "RobotoSlab-Bold",
        fontSize: 25,
        color: "white"
    },
    item: {
        fontFamily: "RobotoSlab-Regular",
        fontSize: 16,
        color: "#D6D2D2",
        marginTop: sHeight * 0.005
    }
})