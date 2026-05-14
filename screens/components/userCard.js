import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { sHeight, sWidth } from '../../utilities/data';

export default function UserCard({ userId, name, img, userTap, removeSearched }) {

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={() => {
            userTap([userId, name, img])
        }}>

            <Image source={{ uri: "https://lh3.googleusercontent.com/a/ACg8ocKexsW17RjxAlI0wozCK-Uwhdal8EpF0w0RWYC40avbSSfQxP3o=s360-c-no"}}
                style={styles.profileImg}
            />
            <Text style={styles.username}>{name}</Text>
            <TouchableOpacity
                style={styles.crossBox}
                onPress={() => {
                    removeSearched(userId)
                }}
            >
                <Image style={styles.cross}
                    source={require("../../assets/cross.png")}
                />
            </TouchableOpacity>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: sHeight * 0.10,
        width: sWidth * 0.9,
        backgroundColor: "white",
        // elevation: 2, // Set the elevation to create a shadow effect
        // shadowOffset: { width: 0, height: 0 }, // Set the shadow offset to 0 to create an inner shadow
        // shadowOpacity: 0.2, // Set the shadow opacity (adjust as desired)
        // shadowRadius: 2,
        marginTop: sHeight * 0.01,
        marginBottom: sHeight * 0.01,
        shadowColor: "#666",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: sWidth * 0.05,
        // backgroundColor:"red"
    },
    profileImg: {
        height: sHeight * 0.055,
        width: sHeight * 0.055,
        borderRadius: sHeight * 0.07,
        flexWrap: "wrap"
    },
    username: {
        color: "#084907",
        fontFamily: "RobotoSlab-Bold",
        fontSize: 16,
        width: sWidth * 0.8 - sHeight * 0.09 - sHeight * 0.1,
        paddingLeft: sWidth * 0.025,
    },
    cross: {
        height: sHeight * 0.01,
        width: sHeight * 0.01
    },
    crossBox: {
        height: sHeight * 0.1,
        width: sHeight * 0.08,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        // backgroundColor: "blue"
    }
})