import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import { React, useEffect, useState } from 'react'
import { getServerAddress, sHeight, sWidth, tokenKeyName } from '../../utilities/data';


import FollowModal from '../modals/followModal';
import ConnectModal from '../modals/connectModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { encrypt } from '../../utilities/encrypt';

import axios from 'axios';


export default function UserScreenButtons({
    isFollowed,
    isConnected,
    setConnected,
    userData,
    refetch,
    setLoading
}) {
    const [followModal, setFollowModal] = useState(false);
    const [connectModal, setConnectModal] = useState(false);


    async function getRequestId(type) {
        const userId = await AsyncStorage.getItem("userId");
        console.log(userId)
        const kind = type + "Reqs"
        for (let i = 0; i < userData[kind].length; i++) {
            if (userData[kind][i].senderId == userId) {
                return userData[kind][i]._id
            }
        }
        return null
    }

    async function unRequest(kind) {
        setLoading(true)
        const url = getServerAddress() + "/api/" + kind + "/decline/" + await getRequestId(kind)
        console.log(url)

        const headers = {
            token: await encrypt(await AsyncStorage.getItem(tokenKeyName()))
        }

        axios.post(url, {}, { headers }).then((response) => {
            console.log(response.data)
            if (response.data.err == "OK") {
                refetch()
            }
        }).catch((err) => {
            console.log(err)
        })

    }

    return (
        <View style={styles.main}>

            {/* Follow Button */}
            <TouchableOpacity
                onPress={() => {
                    if (isFollowed == "Requested") {
                        unRequest("follow")
                    } else {
                        setFollowModal(!followModal)
                    }
                    // setFollowModal(!followModal)
                }}

                // style={(isFollowed) ? styles.buttonTrue : styles.buttonFalse}
                style={
                    (isFollowed == "Follow") ? styles.buttonFalse : styles.buttonTrue
                }
            >
                <Text style={(isFollowed == "Follow") ? styles.btnTextFalse : styles.btnTextTrue}>
                    {isFollowed}
                </Text>
            </TouchableOpacity>

            {/* Connect Button */}
            <TouchableOpacity
                onPress={() => {
                    if (isConnected == "Requested") {
                        unRequest("connect")
                    } else {
                        setConnectModal(!connectModal)
                    }
                    // setConnectModal(!connectModal)

                }}
                style={(isConnected == "Connect") ? styles.buttonFalse : styles.buttonTrue}
            >
                <Text style={(isConnected == "Connect") ? styles.btnTextFalse : styles.btnTextTrue}>
                    {isConnected}
                </Text>
            </TouchableOpacity>

            <Modal
                visible={followModal}
            >
                <FollowModal
                    setFollowModal={setFollowModal}
                    isFollowed={isFollowed}
                    userData={userData}
                    refetch={refetch}
                    getRequestId={getRequestId}
                    setLoading={setLoading}
                />
            </Modal>

            <Modal
                visible={connectModal}
            >
                <ConnectModal
                    setConnectModal={setConnectModal}
                    isConnected={isConnected}
                    userData={userData}
                    refetch={refetch}
                    getRequestId={getRequestId}
                    setLoading={setLoading}
                />
            </Modal>


        </View>
    )
}



const styles = StyleSheet.create({
    main: {
        width: sWidth,
        backgroundColor: "#5C735D",
        display: "flex",
        flexDirection: "row",
        paddingVertical: sHeight * 0.02,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: sWidth * 0.04
    },
    buttonTrue: {
        width: sWidth * 0.44,
        height: sHeight * 0.05,
        // backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        borderColor: "white",
        borderWidth: 2,
    },
    buttonFalse: {
        width: sWidth * 0.44,
        height: sHeight * 0.05,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",

    },
    btnTextFalse: {
        color: "#084907",
        fontFamily: "RobotoSlab-Bold",
        fontSize: 16
    },
    btnTextTrue: {
        color: "white",
        fontFamily: "RobotoSlab-Bold",
        fontSize: 16
    }
})