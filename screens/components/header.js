import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

export default function Header() {
    return (
        <View style={styles.headerBox}>
            <Text style={styles.headerText}>My Family Tree</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        height: sHeight * 0.1,
        width: sWidth,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    headerText: {
        color: "#084907",
        fontFamily: "RobotoSlab-Bold",
        fontSize: 25,
    }

})