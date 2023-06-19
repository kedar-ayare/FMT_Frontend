import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';

// Adjust this value as per your requirement

let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

const MAX_IMAGE_HEIGHT = sHeight * 0.3;

export default function PostCard({ postData }) {


    function postRender() {
        if (postData["postImg"] !== "") {
            return <>
                <ConditionalImage source={postData["postImg"]} />
                <PostActions liked={postData["liked"]} />
                <View style={styles.caption}>

                    <Text style={styles.captionText}>
                        <Text style={styles.captionUsername}>
                            {postData["username"]}:
                        </Text>
                        {"  "}{postData["caption"]}
                    </Text>
                </View>
            </>

        } else {
            return <>
                <TextPost postText={postData["caption"]} />
                <PostActions liked={postData["liked"]} />
            </>
        }
    }

    return (
        <View style={styles.main}>
            <PostHeader
                username={postData["username"]}
                profileImg={postData["userImg"]}
            />
            {
                postRender()
            }


        </View>
    )
}



const ConditionalImage = ({ source }) => {
    return (
        <View>
            <Image
                source={{ uri: source }}
                style={{
                    height: MAX_IMAGE_HEIGHT,
                    width: sWidth,
                    aspectRatio: sWidth / MAX_IMAGE_HEIGHT,
                }}
            />
        </View>
    );
};

const PostHeader = ({ profileImg, username }) => {
    return (
        <View style={styles.postHeaderBox}>
            <Image style={styles.userProfile} source={{ uri: profileImg }} />
            <Text style={styles.username}>{username}</Text>
        </View>
    );
};


const TextPost = ({ postText }) => {
    return (
        <View style={styles.textPostBox}>
            <Text style={styles.textPostText}>{postText}</Text>
        </View>
    );
};

const PostActions = ({ liked }) => {

    const [like, setLiked] = useState(liked);
    return (
        <View style={styles.actions}>
            <TouchableOpacity
                style={styles.actionBox}
                onPress={() => {
                    setLiked(!like)
                }}
            >
                <Image
                    source={like ? require("../../assets/liked.png") : require("../../assets/like.png")}
                    style={styles.actionIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBox}>
                <Image
                    source={require("../../assets/comment.png")}
                    style={styles.actionIcon} />
            </TouchableOpacity>
            <Text style={{ color: "black", fontSize: sHeight * 0.02, fontFamily: "RobotoSlab-Regular", paddingLeft: sWidth * 0.04 }}>
                Liked by
                <Text style={{ fontFamily: "RobotoSlab-Bold" }}> Kedar Ayare</Text> and
                <Text style={{ fontFamily: "RobotoSlab-Bold" }}> 23 others</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        marginTop: sHeight * 0.02,
        marginBottom: sHeight * 0.02,
    },
    postImg: {
        width: sWidth,
        aspectRatio: 1
    },
    postHeaderBox: {
        width: sWidth,
        height: sHeight * 0.06,
        // backgroundColor: "blue",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: sWidth * 0.02,
    },
    userProfile: {
        height: sHeight * 0.04,
        width: sHeight * 0.04,
        borderRadius: sHeight * 0.04
    },
    username: {
        color: "#084907",
        fontFamily: "RobotoSlab-Bold",
        fontSize: 15,
        marginLeft: sHeight * 0.02
    },
    caption: {
        // backgroundColor: "blue",
        // paddingVertical: sHeight * 0.0,
        paddingHorizontal: sHeight * 0.01,
        flexDirection: "row",
    },
    captionUsername: {
        color: "black",
        fontFamily: "RobotoSlab-Bold",
    },
    captionText: {
        color: "black",
        fontFamily: "RobotoSlab-Regular",
    },

    textPostBox: {
        width: sWidth,
        paddingHorizontal: sHeight * 0.02,
        paddingVertical: sHeight * 0.04,
    },
    textPostText: {
        color: "#084907",
        fontFamily: "RobotoSlab-Regular",
        fontSize: 22
    },

    actions: {
        height: sHeight * 0.06,
        width: sWidth,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: sWidth * 0.01
    },
    actionBox: {
        height: sHeight * 0.05,
        width: sHeight * 0.05,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "yellow",
        // borderColor: "black",
        // borderWidth: 1
    },
    actionIcon: {
        height: sHeight * 0.035,
        aspectRatio: 1
    }


})