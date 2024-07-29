import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { sHeight, sWidth } from '../utilities/data'
import { Modal } from '@ui-kitten/components'
import { BlurView } from '@react-native-community/blur'
import { useNavigation } from '@react-navigation/native';


export default function UserPosts({ userData }) {

    const [imgLink, setImgLink] = useState("")
    // const urls = [
    //     "https://myfamtree.000webhostapp.com/appImages/post1.jpg",
    //     "https://myfamtree.000webhostapp.com/appImages/post2.jpg",
    //     "https://myfamtree.000webhostapp.com/appImages/post3.jpg",
    //     "https://myfamtree.000webhostapp.com/appImages/post3.jpg",
    //     "https://myfamtree.000webhostapp.com/appImages/post2.jpg",
    //     "https://myfamtree.000webhostapp.com/appImages/post1.jpg"
    // ]

    function renderGrid() {
        let result = []
        for (let i = 0; i < userData.posts.length; i++) {
            result.push(
                <PostBox
                    postData={userData.posts[i]}
                    key={i}
                    setImgLink={setImgLink}
                    userData={userData}
                />
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
        </View>
    )
}

const PostBox = ({ postData, setImgLink, userData }) => {

    const navigation = useNavigation();
    const [blurPost, setBlurPost] = useState(false)

    return (
        <TouchableOpacity
            onPress={() => {
                console.log("Post Tapped")
                navigation.navigate("PostDetails", { postData, userData })
            }}

            onLongPress={async () => {
                console.log("Post Long Pressed")
                setBlurPost(true)
            }}
            onPressOut={() => {
                if (blurPost) {
                    setBlurPost(false)
                }
            }}
        >
            <Image style={{ width: sWidth / 3, height: sWidth / 3, aspectRatio: 1 }} source={{ uri: postData.images[0] }} />

            <Modal
                visible={blurPost}
            >
                <PostBlurBg
                    userData={userData}
                    imgLink={postData.images[0]}
                />
            </Modal>

        </TouchableOpacity>
    );
};

const PostBlurBg = ({ userData, imgLink }) => {
    console.log(imgLink)
    return (
        <BlurView>
            <View style={{ height: sHeight, width: sWidth, alignItems: "center", justifyContent: "center" }}>
                <View style={BlurBoxStyles.content}>
                    <View style={BlurBoxStyles.postHeader}>
                        <Image source={{ uri: userData.profileURL }} style={BlurBoxStyles.profImg}></Image>
                        <Text style={BlurBoxStyles.username}>{userData.fname} {userData.lname}</Text>
                    </View>
                    <Image source={{ uri: imgLink }} style={BlurBoxStyles.mainImg}></Image>
                </View>
            </View>
        </BlurView>
    )
};

const BlurBoxStyles = StyleSheet.create({
    content: {
        width: sWidth * 0.8,
        borderRadius: sWidth * 0.02
    },
    postHeader: {
        width: sWidth * 0.8,
        height: sHeight * 0.08,
        borderTopLeftRadius: sWidth * 0.02,
        borderTopRightRadius: sWidth * 0.02,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white"
    },
    profImg: {
        height: sHeight * 0.04,
        aspectRatio: 1,
        borderRadius: sHeight * 0.05,
        marginLeft: sWidth * 0.03
    },
    username: {
        color: "#084907",
        fontFamily: "RobotoSlab-Bold",
        marginLeft: sWidth * 0.03
    },
    mainImg: {
        width: sWidth * 0.8,
        aspectRatio: 1,
        borderBottomLeftRadius: sWidth * 0.02,
        borderBottomRightRadius: sWidth * 0.02
    }

})
