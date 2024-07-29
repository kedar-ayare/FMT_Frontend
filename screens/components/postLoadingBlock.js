import { StyleSheet, Text, View, ActivityIndicator, Dimensions } from 'react-native'
import React from 'react'
import { sHeight, sWidth } from '../../utilities/data'


export default function PostLoadingBlock() {
    return (
        <View style={{ ...styles.main, backgroundColor: "white" }}>
            <ActivityIndicator size={50} color="#5C735D" />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: sWidth,
        aspectRatio: 1,
        backgroundColor: "#5C735D",
        justifyContent: "center",
        alignItems: "center"
    }
})