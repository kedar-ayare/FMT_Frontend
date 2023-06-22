import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'

import PostCard from './components/postCard';


let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;



export default function UserPosts({ allCommentTap }) {




    const posts = [
        {
            "userImg": "https://myfamtree.000webhostapp.com/appImages/kedar.jpg",
            "username": "Kedar Ayare",
            "postImg": "https://myfamtree.000webhostapp.com/appImages/IMG_20221106_084337.jpg",
            "caption": "Ayare Family goes for vacation.",
            "likes": 36,
            "liked": true,
            "comments": [
                {
                    "id": "1",
                    "username": "Vilas Ayare",
                    "userImg": "https://myfamtree.000webhostapp.com/appImages/vilas.jpg",
                    "comment": "Very Excited  Very Excited Very Excited Very Excited Very Excited Very Excited Very Excited Very Excited Very Excited Very Excited Very Excited Very Excited Very Excited",
                },
                {
                    "id": "1",
                    "username": "Ranjana Ayare",
                    "userImg": "https://myfamtree.000webhostapp.com/appImages/ranjana.jpg",
                    "comment": "Wohoo!!",
                },
                {
                    "id": "1",
                    "username": "Kavita Ayare",
                    "userImg": "https://myfamtree.000webhostapp.com/appImages/kavita.jpg",
                    "comment": "Very Nice",
                }
            ]
        },
        {
            "userImg": "https://myfamtree.000webhostapp.com/appImages/shubhash.jpg",
            "username": "Shubhash Ayare",
            "postImg": "https://myfamtree.000webhostapp.com/appImages/IMG_20221106_195806.jpg",
            "caption": "Kid meets his idols",
            "likes": 360,
            liked: false,
            "comments": [
            ]
        },
        {
            "userImg": "https://myfamtree.000webhostapp.com/appImages/siddi.jpg",
            "username": "Siddhi Ayare",
            "postImg": "",
            "caption": "I got 90% in my exams. So happy!!!",
            "likes": 420,
            "liked": true,
            "comments": [
                {
                    "id": "1",
                    "username": "Shrawani Ayare",
                    "userImg": "https://myfamtree.000webhostapp.com/appImages/shrawani.jpg",
                    "comment": "Congrulations",
                }
            ]
        },

    ]



    function renderPosts() {

        // If no posts - "posts" is empty
        if (posts.length === 0) {
            return <View style={styles.noPostMsg}>
                <Image style={styles.noPostImg} source={{ uri: "https://myfamtree.000webhostapp.com/appImages/postsIcon.png" }}></Image>
                <Text style={styles.noPostMsgText}>User has no posts</Text>
            </View>
        }
        else {
            let postList = []
            for (let i = 0; i < posts.length; i++) {
                postList.push(
                    <PostCard
                        key={i}
                        postData={posts[i]}
                        allCommentTap={allCommentTap}
                    />
                )
            }
            return postList
        }
    }

    return (
        <View>
            {
                renderPosts()
            }
        </View>
    )
}

const styles = StyleSheet.create({
    noPostMsg: {
        height: sHeight * 0.54,
        width: sWidth,
        justifyContent: "center",
        alignItems: "center"
    },
    noPostMsgText: {
        fontFamily: "RobotoSlab-Regular",
        fontSize: 18,
        color: "#9C9A9A"
    },
    noPostImg: {
        height: sHeight * 0.12,
        width: sHeight * 0.12,
        marginBottom: sHeight * 0.05
    }
})