import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

export default function ProfileScreenHeader() {
    return (
        <View style={styles.main}>

            <View style={{ height: sHeight * 0.13, display: "flex", flexDirection: "row", width: sWidth, alignItems: "flex-end" }}>

                <View style={styles.imgBox}>
                    <Image source={{ uri: 'https://myfamtree.000webhostapp.com/appImages/kedar.jpg' }}
                        style={styles.profileImg}
                    />

                </View>

                <View style={styles.detailBox}>
                    <Text style={styles.value}>4</Text>
                    <Text style={styles.item}>Posts</Text>
                </View>

                <View style={styles.detailBox}>
                    <Text style={styles.value}>4</Text>
                    <Text style={styles.item}>Posts</Text>
                </View>

                <View style={styles.detailBox}>
                    <Text style={styles.value}>4</Text>
                    <Text style={styles.item}>Posts</Text>
                </View>
            </View>
            <Text style={styles.username}>Kedar Ayare</Text>


        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#5C735D",
        width: sWidth,
        height: sHeight * 0.22,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    profileImg: {
        height: sHeight * 0.11,
        width: sHeight * 0.11,
        borderRadius: sHeight * 0.15,

    },
    username: {
        fontFamily: "RobotoSlab-Bold",
        fontSize: 18,
        color: "white",
        paddingLeft: sWidth * 0.31 - sHeight * 0.13,
        marginTop: sHeight * 0.005
        // backgroundColor: "yellow"
    },
    imgBox: {
        width: sWidth * 0.31,
        // backgroundColor: "black",
        alignItems: "center",
    },
    detailBox: {
        width: sWidth * 0.23,
        // backgroundColor: "black",
        alignItems: "center",
    },
    value: {
        fontFamily: "RobotoSlab-Bold",
        fontSize: 25,
        color: "white"
    },
    item: {
        fontFamily: "RobotoSlab-Regular",
        fontSize: 16,
        color: "#D6D2D2",
        marginTop: sHeight * 0.005
    }
})