import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getServerAddress, sHeight, sWidth, tokenKeyName } from '../../utilities/data';
import axios from 'axios';
import { CurrentRenderContext } from '@react-navigation/native';
import { encrypt } from '../../utilities/encrypt';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CommentCard({ comment }) {
    console.log(comment.replies.length)
    const [showReplies, setShowReplies] = useState(true)
    const [repliesArray, setRepliesArray] = useState([])
    const [replyPointer, setReplyPointer] = useState(-1)
    const [loading, setLoading] = useState(false)
    useEffect(() => {

        setReplies()
    }, [replyPointer])

    function replyWindow(){
        console.log("Info: ", replyPointer)
        if(replyPointer == -1){
            setReplyPointer(0)
        }else if(replyPointer < comment.replies.length){
            console.log("this")
            setReplyPointer(replyPointer+2)
        }else{
            console.log("this now")
        }
    }

    async function setReplies(){
        
        const endPointer = Math.min(replyPointer + 2, comment.replies.length)

        console.log("End Pointer", endPointer)
        if(replyPointer >=0 && endPointer != repliesArray.length){
            setLoading(true)


            /*
                Calculation for the endpointer
                Takes min of the length of replies and (currentPointer + window) to avoid out of index error
            */ 
            
            const replyIds = comment.replies.slice(replyPointer, endPointer)
            

            const url = getServerAddress() + "/api/comments/replies/"
            const headers = {
                token: encrypt(await AsyncStorage.getItem(tokenKeyName()))
            }
            var replies = undefined
            try{
                replies = await axios.post(url, replyIds,{
                    headers:headers
                })
            }catch(err){
                console.error(err)
            }


            var newReplyArray = [...repliesArray]
            if(replies != undefined){
                for(let i = 0; i < replies.data.length; i+=1){
                    newReplyArray.push(<ReplyCard key={i+replyPointer} comment={replies.data[i]}/>)
                }
                setRepliesArray(newReplyArray)
                
            }
            setLoading(false)
            newReplyArray = []
            return []
        }
        console.log(endPointer == comment.replies.length)
        if(endPointer == comment.replies.length){
            setShowReplies(false)
        }
    }
    
    function renderReplies(){
        return repliesArray
    }

    return (
        <View style={styles.main}>
            <View style={styles.content}>
                <TouchableOpacity><Image source={{ uri: comment.userId.profileURL }} style={styles.userImg} /></TouchableOpacity>
                <View>
                    <Text style={styles.username}>{comment.userId.fname} {comment.userId.lname}: </Text>
                    <Text style={styles.comment}>{comment.content}</Text>
                </View>

            </View>
            <View>
                {
                    renderReplies()
                }
            </View>
            <>
                {loading && <ActivityIndicator style={styles.replyLoadingBox} size={25} color={"#084907"} />}
            </>
                

            
            <TouchableOpacity style={{ width: sWidth * 0.75 }}
                onPress={() => {
                    if(showReplies){
                        replyWindow()
                    }else{
                        // setShowReplies(true)
                        setRepliesArray([])
                    }
                    
                }}
            >
                <Text style={{ color: "#999", fontSize: 12, fontFamily: "RobotoSlab-Regular" }}>
                    {
                        (comment.replies.length > 0)? 
                            (!showReplies) ? "Hide Replies" 
                            : `Show ${comment.replies.length - ((replyPointer<0)? 0:Math.min(replyPointer + 2, comment.replies.length))} Replies`
                            : "No Replies"
                    }
                </Text>
            </TouchableOpacity>
            <View style={styles.replies}>
            </View>
            {/* <ReplyCard comment={comment} /> */}
        </View>
    )
}


function ReplyCard({ comment }) {
    return (
        <View style={styles.replymain}>
            <View style={styles.replycontent}>
                <Image source={{ uri: comment.userId.profileURL }} style={styles.userImg} />
                <View>
                    <Text style={styles.username}>{comment.userId.fname + " " + comment.userId.lname}: </Text>
                    <Text style={styles.comment}>{comment.content}</Text>
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
        // borderBottomWidth: 1,
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
    replyLoadingBox: {
        // backgroundColor: "yellow",
        width: sWidth *0.9,
        padding: sHeight*0.01,
    }
})  