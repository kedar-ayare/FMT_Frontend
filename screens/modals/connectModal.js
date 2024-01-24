import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { React, useState } from 'react'
import { BlurView } from '@react-native-community/blur'

import SelectDropdown from 'react-native-select-dropdown'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { tokenKeyName, getServerAddress } from '../../utilities/data';
import { encrypt } from '../../utilities/encrypt';
import axios from 'axios';


let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

export default function ConnectModal({ setConnectModal, isConnected, userData, refetch, }) {

    const [relation, setRelation] = useState(undefined)


    const relations = ["Father", "Mother", "Brother", "Sister", "Son", "Daughter"]

    async function connect() {
        if (relation == undefined) {
            console.log("Select a relation")
        } else {
            const token = await AsyncStorage.getItem(tokenKeyName())
            const url = getServerAddress() + "/api/connect/request/" + userData._id
            const headers = {
                token: await encrypt(token)
            }
            await axios.post(url, { relation: relation }, { headers }).then((response) => {
                console.log(response.data)

            }).catch((err) => {
                console.log("Err", err)
            })
        }
        setConnectModal(false)

    }

    async function unConnect() {

        const url = getServerAddress() + "/api/connect/unConnect/" + userData._id

        const headers = {
            token: await encrypt(await AsyncStorage.getItem(tokenKeyName()))
        }

        axios.post(url, {}, { headers }).then((response) => {
            console.log(response.data)

        }).catch((err) => {
            console.log(err)
        })
        setConnectModal(!ConnectModal)
    }
    return (
        <BlurView>
            <View style={{ height: sHeight, width: sWidth, alignItems: "center", justifyContent: "center", }}>
                <View style={styles.content}>

                    <Text style={styles.modalText}>
                        Are you sure you want to {(isConnected == "Connect") ? "connect" : "disconnect"} with
                        <Text style={styles.username}> {userData.fname + " " + userData.lname}</Text> as your
                    </Text>

                    {/* DropDown */}
                    <Text style={styles.dropBtnTxtComb}>
                        <SelectDropdown
                            data={relations}
                            buttonStyle={{
                                height: sHeight * 0.05,
                            }}
                            buttonTextStyle={{
                                fontFamily: "RobotoSlab-Regular",
                                color: "#084907"
                            }}
                            rowStyle={{
                                height: sHeight * 0.06,
                            }}
                            rowTextStyle={{
                                fontFamily: "RobotoSlab-Regular",
                                color: "#084907"
                            }}
                            onSelect={(selectedItem, index) => {
                                setRelation(selectedItem)
                                console.log(selectedItem, index)
                            }}
                            defaultButtonText='Select Relation'
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item
                            }}
                        /> ?
                    </Text>



                    {/* Buttons */}
                    <View style={styles.buttonBox}>
                        <TouchableOpacity
                            style={[styles.button, styles.confirm]}
                            onPress={async () => {
                                if (isConnected == "Connect") {
                                    connect()
                                    refetch()
                                } else if (isConnected == "Connected") {
                                    unConnect()
                                    refetch()
                                }
                            }}
                        >
                            <Text
                                style={styles.buttonText}>
                                {(isConnected != "Connect") ? " Disconnect " : " Connect "}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setConnectModal(false)
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
        // height: sHeight * 0.25,
        paddingHorizontal: sWidth * 0.02,
        paddingVertical: sHeight * 0.02,
        backgroundColor: "white",
        borderRadius: sWidth * 0.02
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
        width: sWidth * 0.31,
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
    },
    modalText: {
        color: "#084907",
        fontFamily: "RobotoSlab-Regular",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 18,
        lineHeight: 28,
    },
    dropBtnTxtComb: {
        textAlign: 'center',
        color: "#084907",
        fontSize: 18,
        fontFamily: "RobotoSlab-Regular",
    },
    username: {
        fontWeight: "bold"
    }
})
