import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { sHeight, sWidth } from '../../utilities/data';


export default function ProfileScreenButtons({ logout }) {



    return (
        <View style={styles.main}>
            <View style={styles.content}>
                <View style={{ height: sHeight * 0.045, width: sWidth * 0.95, display: "flex", flexDirection: "row", justifyContent: "space-between", }}>


                    <TouchableOpacity
                        style={{ height: sHeight * 0.045, width: sWidth * 0.465, backgroundColor: "white", justifyContent: "center", alignItems: "center", borderRadius: sHeight * 0.004 }}
                        onPress={() => {
                            logout()
                        }}
                    >
                        <Text style={styles.buttonText}>Edit Profile</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ height: sHeight * 0.045, width: sWidth * 0.465, backgroundColor: "white", justifyContent: "center", alignItems: "center", borderRadius: sHeight * 0.004 }}>
                        <Text style={styles.buttonText}>Legacy Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: sHeight * 0.045, width: sWidth * 0.95 }}>
                    <TouchableOpacity style={{ height: sHeight * 0.045, width: sWidth * 0.95, backgroundColor: "white", justifyContent: "center", alignItems: "center", borderRadius: sHeight * 0.004 }}>
                        <Text style={styles.buttonText}>View Family Tree</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#5C735D",
        height: sHeight * 0.14,
        width: sWidth,
        alignItems: "center",
        // backgroundColor: "blue",
        justifyContent: "center"
    },
    content: {
        width: sWidth * 0.95,
        height: sHeight * 0.1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // backgroundColor: "black"

    },
    buttonText: {
        fontFamily: "RobotoSlab-Bold",
        color: "#084907",
    }
})