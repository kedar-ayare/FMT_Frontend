import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { getServerAddress, sHeight, sWidth, tokenKeyName } from '../utilities/data'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { encrypt } from '../utilities/encrypt'
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import LoadingScreen from './loadingScreen'
import PostLoadingBlock from './components/postLoadingBlock'


const PostDetails = ({ route }) => {

    const navigation = useNavigation()
    var { postData, userData } = route.params;
    const [postDetails, setPostDetails] = useState();
    const [imageURLs, setImageURLs] = useState([]);
    const [imgIndex, setImgIndex] = useState(0);
    const [imgHeight, setImgHeight] = useState(0);
    const [isSwipeEnded, setIsSwipeEnded] = useState(false);

    useEffect(() => {
        fetchPostDetails()
    }, [])

    useEffect(() => {
        getImgHeight()
    }, [imgIndex, imageURLs])


    function getImgHeight() {
        if (imageURLs.length != 0) {
            try {
                Image.getSize(imageURLs[imgIndex], (width, height) => {
                    setImgHeight((sWidth * height) / width);
                })
            } catch (e) {
                console.log(e)
            }
        }
    }

    async function fetchPostDetails() {
        const url = getServerAddress() + "/api/posts/" + postData._id
        const token = await AsyncStorage.getItem(tokenKeyName())
        const headers = {
            token: await encrypt(token)
        }
        await axios.get(url, { headers }).then((response) => {
            if (response.data.post != postDetails) {
                setPostDetails(response.data.post)
            }
            setImageURLs(response.data.post.images)
        }).catch((err) => {
            console.log(err)
        })
    }

    function renderPostImages() {
        if (imageURLs.length != 0) {
            const postImgs = []
            for (var i = 0; i < imageURLs.length; i++) {
                postImgs.push(<Image key={i} style={{ width: sWidth, height: imgHeight }} source={{ uri: imageURLs[i] }}></Image>);
            }
            return postImgs
        }

        return <PostLoadingBlock />
    }
    const handleScroll = (event) => {
        if (!isSwipeEnded) {
            const xOffset = event.nativeEvent.contentOffset.x;
            const page = Math.round(xOffset / sWidth);
            setImgIndex(page)
            setIsSwipeEnded(true);
            setTimeout(() => setIsSwipeEnded(false), 500);
        }
    };



    function showAllComments() {
        const comments = postDetails.comments
        navigation.navigate("AllComments", { comments })
    }

    if (postDetails) {
        return (
            <ScrollView style={{ height: sHeight, width: sWidth, backgroundColor: "white" }}>

                {/* PAGE HEADER  */}
                <View style={styles.navHeader}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
                        <Image source={require("../assets/back-arrow.png")} style={{ height: sHeight * 0.035, aspectRatio: 1, marginLeft: sWidth * 0.02 }}></Image>
                    </TouchableOpacity>
                </View>


                {/* POST HEADER */}
                <View style={styles.header}>
                    <Image source={{ uri: userData.profileURL }} style={{ height: sHeight * 0.05, aspectRatio: 1, borderRadius: sHeight * 0.05, marginLeft: sWidth * 0.03 }}></Image>
                    <Text style={{ color: "#084907", fontFamily: "RobotoSlab-Bold", marginLeft: sWidth * 0.03, fontSize: 15 }}>{userData.fname} {userData.lname}</Text>
                </View>

                {/* POST IMAGE */}
                <View>
                    <ScrollView
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        onMomentumScrollEnd={handleScroll}
                    >
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            {
                                renderPostImages()
                            }
                        </View>

                    </ScrollView>
                    <View
                        style={{
                            position: 'absolute',
                            // left: 0,
                            right: 10,
                            top: 10,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            padding: 10,
                            borderRadius: 20,
                            width: 50,
                        }}
                    >
                        <Text style={{ textAlign: "center", fontSize: 10, fontWeight: "bold" }}>{imgIndex + 1}/{imageURLs.length}</Text>
                    </View>
                </View>


                {/* POST ACTIONS */}
                <PostActions liked={true} showAllComments={showAllComments} />

                {/* POST CAPTION */}
                <View style={styles.caption}>

                    <Text style={styles.captionText}>
                        <Text style={styles.captionUsername}>
                            {userData.fname} {userData.lname}:
                        </Text>
                        {"  "}{postData.caption}
                    </Text>
                </View>

            </ScrollView>
        )
    }
    else {
        return (<LoadingScreen backColor={"white"} loaderColor={"#5C735D"} />)
    }

}

const PostActions = ({ liked, navigation, showAllComments }) => {

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
                    source={like ? require("../assets/liked.png") : require("../assets/like.png")}
                    style={styles.actionIcon} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    console.log("Comment Box Open")
                    showAllComments()
                }}
                style={styles.actionBox}>
                <Image
                    source={require("../assets/comment.png")}
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

export default PostDetails

const styles = StyleSheet.create({
    header: {
        height: sHeight * 0.08,
        width: sWidth,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    navHeader: {
        height: sHeight * 0.06,
        // backgroundColor: "brown",
        display: "flex",
        justifyContent: "center"
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
    },
    actionIcon: {
        height: sHeight * 0.03,
        aspectRatio: 1
    },
    caption: {
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
})













