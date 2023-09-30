import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { sHeight, sWidth } from '../../utilities/data';

export default function UserCard({ userId, name, img, userTap, removeSearched }) {

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={() => {
            userTap([userId, name, img])
        }}>

            <Image source={{ uri: img }}
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
        height: sHeight * 0.12,
        width: sWidth * 0.9,
        backgroundColor: "white",
        elevation: 2, // Set the elevation to create a shadow effect
        shadowOffset: { width: 0, height: 0 }, // Set the shadow offset to 0 to create an inner shadow
        shadowOpacity: 0.2, // Set the shadow opacity (adjust as desired)
        shadowRadius: 2,
        marginTop: sHeight * 0.02,
        marginBottom: sHeight * 0.02,
        shadowColor: "#666",
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: sWidth * 0.05
    },
    profileImg: {
        height: sHeight * 0.09,
        width: sHeight * 0.09,
        borderRadius: sHeight * 0.005,
        flexWrap: "wrap"
    },
    username: {
        color: "#084907",
        fontFamily: "RobotoSlab-Bold",
        fontSize: 18,
        width: sWidth * 0.8 - sHeight * 0.09 - sHeight * 0.1,
        paddingLeft: sWidth * 0.05,
    },
    cross: {
        height: sHeight * 0.02,
        width: sHeight * 0.02
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