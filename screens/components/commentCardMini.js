import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { sHeight, sWidth } from '../../utilities/data';

export default function CommentCard({ comment }) {




    return (
        <View style={styles.main}>
            <View style={styles.content}>
                <Image source={{ uri: comment.userImg }} style={styles.userImg} />
                <Text style={styles.captionText}>
                    <Text style={styles.username}>{comment.username}: </Text>
                    {comment.comment}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: sWidth,
        // backgroundColor: "blue",
        flexDirection: "row",
        justifyContent: "center"
    },
    content: {
        width: sWidth,
        // backgroundColor: "yellow",
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: sHeight * 0.015,
        paddingHorizontal: sHeight * 0.01,

    },
    userImg: {
        height: sHeight * 0.03,
        aspectRatio: 1,
        borderRadius: sHeight * 0.03
    },
    captionText: {
        color: "black",
        fontFamily: "RobotoSlab-Regular",
        paddingLeft: sWidth * 0.025
    },
    username: {
        fontFamily: "RobotoSlab-Bold"
    }
})