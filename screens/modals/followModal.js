import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { React, useEffect, useState } from 'react';
import { BlurView } from '@react-native-community/blur';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getServerAddress, sHeight, sWidth, tokenKeyName } from '../../utilities/data';
import axios from 'axios';
import { decrypt, encrypt } from '../../utilities/encrypt';





export default function FollowModal({
    setFollowModal,
    isFollowed,
    setFollowed,
    userData,
    refetch,
    setBanner,
}) {


    async function follow() {

        var reqType = "request"
        if (userData.accountStat != "Private") {
            reqType = "follow"
        }

        const url = getServerAddress() + "/api/follow/" + reqType + "/" + userData._id

        const token = await AsyncStorage.getItem(tokenKeyName())
        const headers = {
            token: await encrypt(token)
        }

        axios.post(url, {}, { headers }).then((response) => {
            console.log(response.data)
            if (response.data.err == "OK") {
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    async function unfollow() {
        const url = getServerAddress() + "/api/follow/unFollow/" + userData._id
        console.log(url)
        const token = await AsyncStorage.getItem(tokenKeyName())
        const headers = {
            token: await encrypt(token)
        }
        await axios.post(url, {}, { headers }).then((response) => {
            console.log(response.data)
            if (response.data.msg == "Success") {

            }
        }).catch((err) => {
            console.log(err)
        })



    }
    return (
        <BlurView>
            <View style={{ height: sHeight, width: sWidth, alignItems: "center", justifyContent: "center" }}>
                <View style={styles.content}>
                    <Text style={styles.modalText}>Do you want to
                        {(isFollowed == "Follow") ? " follow " : " unfollow "} {"\n"}
                        <Text style={styles.username}>{userData.fname} {userData.lname}</Text>?
                    </Text>
                    <View style={styles.buttonBox}>
                        <TouchableOpacity
                            style={[styles.button, styles.confirm]}
                            onPress={async () => {
                                if (isFollowed != "Follow") {
                                    unfollow()
                                    refetch()
                                }
                                else {
                                    follow()
                                    refetch()
                                }
                                await setFollowModal(false)

                            }}
                        >
                            <Text
                                style={styles.buttonText}>
                                {(isFollowed == "Follow") ? " Follow " : " Unfollow "}
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


