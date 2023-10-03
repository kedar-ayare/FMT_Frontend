import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { sHeight, sWidth } from '../../utilities/data'
import { useNavigation } from '@react-navigation/native'


export default function NavHeader() {
    const navigation = useNavigation()
    return (
        <View style={styles.main}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack()
                }}
            >
                <Image source={require("../../assets/cross-white.png")} style={styles.cross} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: sHeight * 0.05,
        justifyContent: "flex-end",
        backgroundColor: "#5C735D"
    },
    cross: {
        height: sHeight * 0.025,
        aspectRatio: 1,
        marginLeft: sWidth * 0.05
    }
})