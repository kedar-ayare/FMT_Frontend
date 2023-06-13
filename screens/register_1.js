import { ImageBackground, StyleSheet, Text, View, Dimensions, Image, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'


let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;
export default function register_1() {


    return (
        <ImageBackground source={require("../assets/bgImg.jpg")} style={styles.bgImg}>
            <View style={styles.main}>
                <View style={styles.logoBox}>
                    <Image source={require("../assets/logo_darkgreen.png")} style={styles.logo} />
                </View>


                <View style={styles.inputFieldBox}>
                    <TextInput
                        style={styles.inputFields}
                        placeholder='First Name'
                        placeholderTextColor="#084907"
                    />
                    <TextInput
                        style={styles.inputFields}
                        placeholder='Last Name'
                        placeholderTextColor="#084907"
                    />
                    <TextInput
                        style={styles.inputFields}
                        placeholder='Birth Date'
                        placeholderTextColor="#084907"
                    />
                    <TextInput
                        style={styles.inputFields}
                        placeholder='Gender'
                        placeholderTextColor="#084907"
                    />
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bgImg: {
        flex: 1,
        resizeMode: 'cover', // Adjust the resizing mode as per your requirements
        justifyContent: 'flex-end',
        alignItems: "center"
    },
    main: {
        // backgroundColor: "red",
        width: sWidth * 0.9,
        height: sHeight * 0.9,
        display: "flex",
        paddingBottom: sHeight * 0.05,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around"
    },
    logoBox: {
        width: sWidth * 0.3,
        height: sWidth * 0.3,
        backgroundColor: "white",
        borderRadius: sWidth * 0.3
    },
    logo: {
        width: sWidth * 0.3,
        height: sWidth * 0.3,
    },
    inputFieldBox: {
        width: sWidth * 0.8,
        // backgroundColor: "red",
        height: sHeight * 0.50,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
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
        height: sHeight * 0.08,
        width: sWidth * 0.8,
        // backgroundColor: "yellow",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        height: sHeight * 0.08,
        width: sWidth * 0.37,
        backgroundColor: "#084907",
        color: "White",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "RobotoSlab-Bold",
        borderRadius: 5
    },
    buttonText: {
        fontFamily: "RobotoSlab-Bold",
        color: "white",
        fontSize: 16,
    }


})