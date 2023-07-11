import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { React, useEffect, useState } from 'react';
import { BlurView } from '@react-native-community/blur';

let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

export default function FollowModal({ setFollowModal }) {
    var followStatus = true
    var name = "Kedar Ayare"


    return (
        <BlurView>
            <View style={{ height: sHeight, width: sWidth, alignItems: "center", justifyContent: "center" }}>
                <View style={styles.content}>
                    <Text style={styles.modalText}>Do you want to
                        {(followStatus) ? " unfollow " : " follow "} {"\n"}
                        <Text style={styles.username}>{name}</Text>?
                    </Text>
                    <View style={styles.buttonBox}>
                        <TouchableOpacity
                            style={[styles.button, styles.confirm]}
                            onPress={() => {
                                setFollowModal(false)
                            }}
                        >
                            <Text
                                style={styles.buttonText}>
                                {(followStatus) ? " Unfollow " : " Follow "}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setFollowModal(false)
                            }}
                            style={[styles.button, styles.cancel]}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </BlurView>






    )
}

const styles = StyleSheet.create({
    blurBox: {
        height: sHeight,
        width: sWidth,
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        width: sWidth * 0.8,
        height: sHeight * 0.25,
        backgroundColor: "white",
        borderRadius: sWidth * 0.02
    },
    modalText: {
        height: sHeight * 0.15,
        color: "#084907",
        fontFamily: "RobotoSlab-Regular",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 18
    },
    username: {
        color: "#084907",
        fontFamily: "RobotoSlab-Bold"
    },
    buttonBox: {
        height: sHeight * 0.1,
        // backgroundColor: "yellow",

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: sWidth * 0.05
    },
    button: {
        width: sWidth * 0.33,
        height: sHeight * 0.06,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: sWidth * 0.01,
    },
    cancel: {
        backgroundColor: "#dc3545"
    },
    confirm: {
        backgroundColor: "#4fb6ec"
    },
    buttonText: {
        color: "white",
        fontFamily: "RobotoSlab-Bold"
    }
})


