import { ImageBackground, Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;
export default class logSign extends Component {
    render() {
        return (
            <ImageBackground source={require("../assets/bgImg.jpg")} style={styles.bgImg}>
                <View style={styles.main}>
                    <View style={styles.introTextBox}>
                        <Text style={styles.introText}>Discover your roots and connect with your family</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                console.log("Selected Log In Option")
                            }}
                        >
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                console.log("Selected Sign In Option")
                            }}
                        >
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    bgImg: {
        flex: 1,
        resizeMode: 'cover', // Adjust the resizing mode as per your requirements
        justifyContent: 'flex-end'
    },
    main: {
        height: sHeight * 0.8,
        width: sWidth,
        position: 'absolute',
        // backgroundColor: "blue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'space-around'
    },
    introTextBox: {
        width: sWidth * 0.8,
        height: sHeight * 0.4,
        // backgroundColor: "yellow"
    },
    buttonContainer: {
        // backgroundColor: "green",
        height: sHeight * 0.2,
        width: sWidth * 0.8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    introText: {
        color: "white",
        fontFamily: "RobotoSlab-Bold",
        fontSize: 35,
        textAlign: "center",
        lineHeight: 55,
    },
    button: {
        backgroundColor: "#084907",
        height: sHeight * 0.06,
        width: sWidth * 0.8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "RobotoSlab-Bold",
        color: "white"
    }
});