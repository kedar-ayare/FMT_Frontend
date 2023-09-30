import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { sHeight, sWidth } from '../../utilities/data'

export default function RequestCard() {
    return (
        <View style={styles.main}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Image source={{ uri: "https://myfamtree.000webhostapp.com/appImages/vilas.jpg" }}
                    style={styles.profileImg}
                />
                <Text style={styles.username}>Vilas Ayare</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: sWidth * 0.9,
        backgroundColor: "red",
    },
    profileImg: {
        height: sHeight * 0.09,
        aspectRatio: 1,
        borderRadius: sHeight * 0.045,
    },
    username: {
        fontFamily: "RobotoSlab-Bold",
        color: "#084907",
        fontSize: 18,
    }
})