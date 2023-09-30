import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { sHeight, sWidth } from '../../utilities/data';

export default function Header() {
    return (
        <View style={styles.headerBox}>
            <Text style={styles.headerText}>My Family Tree</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        height: sHeight * 0.08,
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