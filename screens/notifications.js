import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'




let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;
export default function Notifications() {

    const notifications = [
        {
            "type": "comment",
            "content": "Very Nice",
            "username": "Kedar Ayare",
            "postImg": "https://myfamtree.000webhostapp.com/appImages/IMG_20221106_084337.jpg",
            "postId": "post1",
            userImg: "https://myfamtree.000webhostapp.com/appImages/kedar.jpg",
        },
        {
            "type": "comment",
            "content": "Very Good",
            "username": "Siddhi Ayare",
            "postImg": "https://myfamtree.000webhostapp.com/appImages/IMG_20221106_195806.jpg",
            "postId": "post2",
            userImg: "https://myfamtree.000webhostapp.com/appImages/siddi.jpg",
        },
        {
            "type": "comment",
            "content": "Wow",
            "username": "Vilas Ayare",
            "postImg": "https://myfamtree.000webhostapp.com/appImages/IMG_20221106_195806.jpg",
            "postId": "post2",
            userImg: "https://myfamtree.000webhostapp.com/appImages/vilas.jpg",
        },
        {
            "type": "like",
            "username": "Kedar Ayare",
            "postImg": "https://myfamtree.000webhostapp.com/appImages/IMG_20221106_084337.jpg",
            "postId": "post1",
            userImg: "https://myfamtree.000webhostapp.com/appImages/kedar.jpg",
        },
        {
            "type": "like",
            "username": "Siddhi Ayare",
            "postImg": "https://myfamtree.000webhostapp.com/appImages/IMG_20221106_084337.jpg",
            "postId": "post1",
            userImg: "https://myfamtree.000webhostapp.com/appImages/siddi.jpg",
        },
        {
            "type": "like",
            "username": "Revati Ayare",
            "postImg": "https://myfamtree.000webhostapp.com/appImages/IMG_20221106_195806.jpg",
            "postId": "post2",
            userImg: "https://myfamtree.000webhostapp.com/appImages/revati.jpg",
        },
        {
            "type": "like",
            "username": "Ranjana Ayare",
            "postImg": "https://myfamtree.000webhostapp.com/appImages/IMG_20221106_195806.jpg",
            "postId": "post2",
            userImg: "https://myfamtree.000webhostapp.com/appImages/ranjana.jpg",
        },
        {
            "type": "like",
            "username": "Kavita Ayare",
            "postImg": "https://myfamtree.000webhostapp.com/appImages/IMG_20221106_195806.jpg",
            "postId": "post2",
            userImg: "https://myfamtree.000webhostapp.com/appImages/kavita.jpg",
        },
    ]

    function renderNotifications() {
        var notiList = []

        for (var i = 0; i < notifications.length; i++) {
            if (notifications[i].type === "comment") {
                notiList.push(<CommentCard key={i} data={notifications[i]} />)
            } else {
                notiList.push(<LikeCard key={i} data={notifications[i]} />)
            }
        }
        return notiList
    }

    return (
        <ScrollView>
            <View style={styles.main}>
                <View style={styles.connectionRequests}>
                    <Image source={require("../assets/connection.png")} style={styles.requestImg} />
                    <Text style={{ fontFamily: "RobotoSlab-Bold", color: "black", fontSize: 16 }}>View all connection requests</Text>
                    <Image source={require("../assets/right-arrow.png")} style={styles.arrowImg} />
                </View>

                <View style={styles.divider} />

                <View style={styles.connectionRequests}>
                    <Image source={require("../assets/add-user.png")} style={styles.requestImg} />
                    <Text style={{ fontFamily: "RobotoSlab-Bold", color: "black", fontSize: 16 }}>View all follow requests</Text>
                    <Image source={require("../assets/right-arrow.png")} style={styles.arrowImg} />
                </View>

                <View style={styles.divider} />

                {
                    renderNotifications()
                }
            </View>
        </ScrollView>

    )
}




const CommentCard = ({ data }) => {
    return (
        <View style={styles.cardMain}>
            <Image source={{ uri: data.userImg }} style={styles.userImg} />
            <Text style={styles.commentText}>
                <Text style={{ fontWeight: "bold" }}>{data.username} </Text>
                commented on your post: "{data.content}"
            </Text>
            <Image source={{ uri: data.postImg }} style={styles.postImg} />
        </View>
    );
};
const LikeCard = ({ data }) => {
    return (
        <View style={styles.cardMain}>
            <Image source={{ uri: data.userImg }} style={styles.userImg} />
            <Text style={styles.likeText} ><Text style={{ fontWeight: "bold" }}>{data.username}</Text> liked your post</Text>
            <Image source={{ uri: data.postImg }} style={styles.postImg} />
        </View>
    );
};


const styles = StyleSheet.create({
    main: {
        // backgroundColor: "blue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    connectionRequests: {
        // backgroundColor: "grey",
        width: sWidth * 0.9,
        height: sHeight * 0.12,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    requestImg: {
        height: sHeight * 0.06,
        width: sHeight * 0.06,
    },
    arrowImg: {
        height: sHeight * 0.04,
        width: sHeight * 0.04,
    },
    divider: {
        width: sWidth * 0.9,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    cardMain: {

        // backgroundColor: "blue",
        width: sWidth * 0.9,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: sHeight * 0.018
    },
    userImg: {
        height: sHeight * 0.06,
        aspectRatio: 1,
        borderRadius: sHeight * 0.03,
    },
    postImg: {
        height: sHeight * 0.06,
        aspectRatio: 1,
    },
    likeText: {
        width: sWidth * 0.9 - 2 * (sHeight * 0.06),
        paddingHorizontal: sWidth * 0.05,
        color: "black",
        fontFamily: "RobotoSlab-Regular"
    },
    commentText: {
        width: sWidth * 0.9 - 2 * (sHeight * 0.06),
        paddingHorizontal: sWidth * 0.05,
        color: "black",
        fontFamily: "RobotoSlab-Regular"
    }
})