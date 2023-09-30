import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import { sHeight, sWidth } from '../utilities/data'

export default function LoadingNoNet({ logout }) {
    return (
        <View style={styles.main}>
            <ActivityIndicator size={50} color="white" style={styles.loader} />
            <Text>No Internet or Server is down</Text>
            <TouchableOpacity
                onPress={() => {
                    logout()
                }}
            ></TouchableOpacity>

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
    },
    loader: {
        marginBottom: sHeight * 0.05,
    }
})