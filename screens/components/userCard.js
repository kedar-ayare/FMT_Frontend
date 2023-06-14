import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'

let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;


export default function UserCard({ name, img }) {
    return (
        <TouchableOpacity style={styles.cardContainer}>

            <Image source={{ uri: img }}
                style={styles.profileImg}
            />
            <Text style={styles.username}>{name}</Text>
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
        width: sWidth * 0.8 - sHeight * 0.09,
        paddingLeft: sWidth * 0.05,
    }
})