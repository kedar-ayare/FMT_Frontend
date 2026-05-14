import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { sHeight, sWidth } from '../../utilities/data'

export default function ProfileScreenHeader({ userData }) {
    console.log("inside header")
    console.log(userData.posts)
    return (
        <View style={styles.main}>

            <View style={styles.subBox}>

                <View style={styles.imgBox}>
                    <Image source={{ 
                        uri: userData.profileURL 
                    }}
                        style={styles.profileImg}
                    />

                </View>

                <View style={styles.detailBox}>
                    <Text style={styles.value}>{userData.posts.length}</Text>
                    <Text style={styles.item}>Posts</Text>
                </View>

                <View style={styles.detailBox}>
                    <Text style={styles.value}>{userData.followerCount}</Text>
                    <Text style={styles.item}>Followers</Text>
                </View>

                <View style={styles.detailBox}>
                    <Text style={styles.value}>{userData.followingCount}</Text>
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
        justifyContent: "center",
        paddingHorizontal: sWidth * 0.04
    },
    subBox:{ 
        height: sHeight * 0.13, 
        display: "flex", 
        flexDirection: "row", 
        width: sWidth*0.92, 
        alignItems: "center", 
        // backgroundColor:"yellow" 
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
        paddingLeft: sWidth * 0.29 - sHeight * 0.13,
        marginTop: sHeight * 0.005,
        // backgroundColor: "yellow"
    },
    imgBox: {
        width: sWidth * 0.29,
        // backgroundColor: "black",
        alignItems: "center",
        height: "100%",
        display: "flex",
        justifyContent:"center",
        alignItems:"center"
    },
    detailBox: {
        width: sWidth * 0.21,
        // backgroundColor: "black",
        alignItems: "center"
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