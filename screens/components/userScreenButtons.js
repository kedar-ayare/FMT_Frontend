import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Modal } from 'react-native'
import { React, useState } from 'react'


let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

import FollowModal from '../modals/followModal';
import ConnectModal from '../modals/connectModal';


export default function UserScreenButtons({ }) {
    const [isFollowed, setFollowed] = useState(false);
    const [isConnected, setConnected] = useState(false);

    const [followModal, setFollowModal] = useState(false);
    const [connectModal, setConnectModal] = useState(true);
    return (
        <View style={styles.main}>

            {/* Follow Button */}
            <TouchableOpacity
                onPress={() => {
                    setFollowModal(!followModal)
                    setFollowed(!isFollowed)
                }}
                style={(isFollowed) ? styles.buttonTrue : styles.buttonFalse}
            >
                <Text style={(isFollowed) ? styles.btnTextTrue : styles.btnTextFalse}>
                    {(isFollowed) ? "UnFollow" : "Follow"}
                </Text>
            </TouchableOpacity>

            {/* Connect Button */}
            <TouchableOpacity
                onPress={() => {
                    setConnected(!isConnected)
                }}
                style={(isConnected) ? styles.buttonTrue : styles.buttonFalse}
            >
                <Text style={(isConnected) ? styles.btnTextTrue : styles.btnTextFalse}>
                    {(isConnected) ? "Disconnect" : "Connect"}
                </Text>
            </TouchableOpacity>

            <Modal
                visible={followModal}
            >
                <FollowModal setFollowModal={setFollowModal} />
            </Modal>

            <Modal
                visible={connectModal}
            >
                <ConnectModal setConnectModal={setConnectModal} />
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