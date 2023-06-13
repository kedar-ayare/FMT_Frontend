import { ImageBackground, StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;
export default class logIn extends Component {
    render() {
        return (
            <ImageBackground source={require("../assets/bgImg.jpg")} style={styles.bgImg}>
                <View style={styles.main}>
                    <View style={styles.logoBox}>
                        <Image source={require("../assets/logo_darkgreen.png")} style={styles.logo} />
                    </View>

                    <View style={styles.inputFieldBox}>
                        <TextInput
                            style={styles.inputFields}
                            placeholder='Enter Email Id'
                            placeholderTextColor="#084907"
                        />
                        <TextInput
                            style={styles.inputFields}
                            placeholder='Enter Password'
                            placeholderTextColor="#084907"
                        />
                    </View>

                    <View style={styles.buttonBox}>
                        <TouchableOpacity
                            style={styles.logInBtn}
                            onPress={() => {
                                console.log("Tapped on Log In")
                            }}
                        >
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                console.log("Decided to Go Back")
                            }}
                        >
                            <Text style={styles.buttonText}>Go Back</Text>
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
        height: sHeight * 0.9,
        // backgroundColor: "yellow",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around"
    },
    logoBox: {
        width: sWidth * 0.45,
        height: sWidth * 0.45,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: sWidth * 0.5
    },
    logo: {
        width: sWidth * 0.45,
        height: sWidth * 0.45,
    },
    inputFieldBox: {
        width: sWidth * 0.8,
        // backgroundColor: "red",
        height: sHeight * 0.30,
        paddingTop: sHeight * 0.05,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    inputFields: {
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#084907",
        borderRadius: 5,
        color: "black",
        fontFamily: "RobotoSlab-Regular",
        fontSize: 16,
        textAlign: "center"
    },
    buttonBox: {
        // backgroundColor: "blue",
        width: sWidth * 0.8,
        height: sHeight * 0.12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logInBtn: {
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
})