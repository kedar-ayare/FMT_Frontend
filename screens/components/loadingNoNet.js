import { StyleSheet, Text, View, ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

export default function LoadingNoNet({ logout }) {
    return (
        <View style={styles.main}>
            <ActivityIndicator size={50} color="white" style={{ marginBottom: sHeight * 0.05 }} />
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
    }
})