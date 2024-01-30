import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { sHeight, sWidth } from '../utilities/data'
import { Modal } from '@ui-kitten/components'
import { BlurView } from '@react-native-community/blur'

export default function UserPosts() {

    const [blurPost, setBlurPost] = useState(false)
    const urls = [
        "https://myfamtree.000webhostapp.com/appImages/post1.jpg",
        "https://myfamtree.000webhostapp.com/appImages/post2.jpg",
        "https://myfamtree.000webhostapp.com/appImages/post3.jpg",
        "https://myfamtree.000webhostapp.com/appImages/post3.jpg",
        "https://myfamtree.000webhostapp.com/appImages/post2.jpg",
        "https://myfamtree.000webhostapp.com/appImages/post1.jpg"
    ]

    function renderGrid() {
        let rowCount = 0
        let result = []
        for (let i = 0; i < urls.length; i++) {
            rowCount += 1
            result.push(
                <PostBox url={urls[i]} key={i} blurPost={blurPost} setBlurPost={setBlurPost} />
            )
        }
        return result
    }


    return (
        <View >
            <View style={{ height: sHeight * 0.02, justifyContent: "center", alignItems: "center", backgroundColor: "#5C735D" }}>
            </View>
            <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                {
                    renderGrid()
                }
            </View>
            <Modal
                visible={blurPost}

            >
                <PostBlurBg></PostBlurBg>
            </Modal>
        </View>
    )
}



const PostBox = ({ url, blurPost, setBlurPost }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                console.log("press")
            }}
            onLongPress={() => {
                console.log("yamete kuda sai")
                setBlurPost(true)
            }}
            onPressOut={() => {
                console.log("ara ara")
                if (blurPost) {
                    setBlurPost(false)
                }
            }}
        >
            <Image style={{ width: sWidth / 3, height: sWidth / 3, aspectRatio: 1 }} source={{ uri: url }} />
        </TouchableOpacity>
    );
};

const PostBlurBg = () => {
    return <BlurView>
        <View style={{ height: sHeight, width: sWidth, alignItems: "center", justifyContent: "center" }}>
            <View style={styles.content}>
                <Text style={styles.modalText}>Do you want to
                    <Text style={styles.username}>kjsfbvnb</Text>?
                </Text>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        style={[styles.button, styles.confirm]}
                    >
                        <Text
                            style={styles.buttonText}>
                            sdvnnksdbn
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.cancel]}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </BlurView>
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
