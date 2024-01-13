import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import { React, useEffect, useState } from 'react'
import { sHeight, sWidth, tokenKeyName } from '../../utilities/data';


import FollowModal from '../modals/followModal';
import ConnectModal from '../modals/connectModal';
import ErrBanner from '../modals/errBanner';


export default function UserScreenButtons({
    isFollowed,
    isConnected,
    setConnected,
    userData,
    refetch,
    requestId
}) {
    const [followModal, setFollowModal] = useState(false);
    const [connectModal, setConnectModal] = useState(false);
    const [banner, setBanner] = useState(null);

    return (
        <View style={styles.main}>

            {/* Follow Button */}
            <TouchableOpacity
                onPress={() => {
                    setFollowModal(!followModal)
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
                    // setConnected(!isConnected)
                    setConnectModal(!connectModal)
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
                    requestId={requestId}
                    setBanner={setBanner}
                />
            </Modal>

            <Modal
                visible={connectModal}
            >
                <ConnectModal
                    setConnectModal={setConnectModal}
                    isConnected={isConnected}
                    userData={userData}
                />
            </Modal>

            {banner && <ErrBanner message={banner.message} type={banner.type} />}
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