import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'


let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;
export default function CommentCard({ comment }) {




    return (
        <View style={styles.main}>
            <View style={styles.content}>
                <Image source={{ uri: comment.userImg }} style={styles.userImg} />
                <View>
                    <Text style={styles.username}>{comment.username}: </Text>
                    <Text style={styles.comment}>{comment.comment}</Text>
                </View>

            </View>
            <View style={{ width: sWidth }}>
                <Text style={{ textAlign: "center", color: "#999", fontSize: 12, fontFamily: "RobotoSlab-Regular" }}>Replies</Text>
            </View>
            <ReplyCard comment={comment} />
        </View>
    )
}


function ReplyCard({ comment }) {
    return (
        <View style={styles.replymain}>
            <View style={styles.replycontent}>
                <Image source={{ uri: comment.userImg }} style={styles.userImg} />
                <View>
                    <Text style={styles.username}>{comment.username}: </Text>
                    <Text style={styles.comment}>{comment.comment}</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: sWidth,
        // backgroundColor: "blue",
        flexDirection: "column",
        justifyContent: "center",
        borderBottomColor: "#e3e3e3",
        borderBottomWidth: 1,
        alignItems: "flex-end"
    },
    content: {
        width: sWidth,
        // backgroundColor: "yellow",
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: sHeight * 0.02,
        paddingHorizontal: sHeight * 0.03,

    },
    userImg: {
        height: sHeight * 0.05,
        aspectRatio: 1,
        borderRadius: sHeight * 0.03
    },
    comment: {
        color: "black",
        fontFamily: "RobotoSlab-Regular",
        paddingLeft: sWidth * 0.025,
        paddingRight: sWidth * 0.05,
        fontSize: 14,
    },
    username: {
        fontFamily: "RobotoSlab-Bold",
        color: "black",
        paddingLeft: sWidth * 0.025,
        paddingRight: sWidth * 0.05,
    },
    replymain: {
        width: sWidth * 0.9,
        // backgroundColor: "blue",
        justifyContent: "center",
    },
    replycontent: {
        width: sWidth * 0.9,
        // backgroundColor: "yellow",
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: sHeight * 0.02,
        paddingHorizontal: sHeight * 0.03,
    },

})