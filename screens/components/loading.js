import { StyleSheet, Text, View, ActivityIndicator, Dimensions } from 'react-native'
import React from 'react'

let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

export default function LoadingScreen() {
    return (
        <View style={styles.main}>
            <ActivityIndicator size={50} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: sHeight,
        width: sWidth,
        backgroundColor: "#5C735D",
        justifyContent: "center",
        alignItems: "center"
    }
})