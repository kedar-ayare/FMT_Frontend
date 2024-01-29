import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { sHeight, sWidth } from '../utilities/data';

import PostCard from './components/postCard';



export default function UserFeed({ allCommentTap }) {


    // Static Post Data
    const posts = [
        {
            "userImg": "https://myfamtree.000webhostapp.com/kedar.jpg",
            "username": "Kedar Ayare",
            "postImg": "https://images.unsplash.com/photo-1531604250646-2f0e818c4f06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTM4MjA0fHxlbnwwfHx8fHw%3D&w=1000&q=80",
            "caption": "Ayare Family goes for vacation.",
            "likes": 36,
            "liked": true,
            "comments": [
                {
                    "id": "1",
                    "username": "Vilas Ayare",
                    "userImg": "https://myfamtree.000webhostapp.com/vilas.jpg",
                    "comment": "Very Excited  Very Excited Very Excited Very Excited Very Excited Very Excited Very Excited Very Excited Very Excited Very Excited Very Excited Very Excited Very Excited",
                },
                {
                    "id": "1",
                    "username": "Ranjana Ayare",
                    "userImg": "https://myfamtree.000webhostapp.com/ranjana.jpg",
                    "comment": "Wohoo!!",
                },
                {
                    "id": "1",
                    "username": "Kavita Ayare",
                    "userImg": "https://myfamtree.000webhostapp.com/kavita.jpg",
                    "comment": "Very Nice",
                }
            ]
        },
        {
            "userImg": "https://myfamtree.000webhostapp.com/shubhash.jpg",
            "username": "Shubhash Ayare",
            "postImg": "https://i.pinimg.com/originals/83/44/b6/8344b6cbd2e56b1cf5fdcb42ca68aa5d.jpg",
            "caption": "Kid meets his idols",
            "likes": 360,
            "liked": false,
            "comments": [
            ]
        },
        {
            "userImg": "https://myfamtree.000webhostapp.com/siddi.jpg",
            "username": "Siddhi Ayare",
            "postImg": "",
            "caption": "I got 90% in my exams. So happy!!!",
            "likes": 420,
            "liked": true,
            "comments": [
                {
                    "id": "1",
                    "username": "Shrawani Ayare",
                    "userImg": "https://myfamtree.000webhostapp.com/shrawani.jpg",
                    "comment": "Congrulations",
                }
            ]
        },

    ]


    // Funcion that renders posts based on the "posts" variable

    function renderPosts() {

        // If no posts - "posts" is empty
        if (posts.length === 0) {
            return <View style={styles.noPostMsg}>
                <Image style={styles.noPostImg} source={{ uri: "https://myfamtree.000webhostapp.com/postsIcon.png" }}></Image>
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