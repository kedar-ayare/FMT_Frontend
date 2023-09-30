import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { sHeight, sWidth } from '../utilities/data';

import CommentCard from './components/commentCard';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';



export default function AllComments({ route }) {

    const { comments } = route.params;

    const navigation = useNavigation();

    // Runs when user closes the screen
    function crossTap() {
        navigation.dispatch(StackActions.pop());
    }

    // USed to dispaly all comments available
    function renderComments() {
        var commentList = []
        for (var i = 0; i < comments.length; i++) {
            commentList.push(<View style={styles.commentBox}>
                <CommentCard key={i} comment={comments[i]} />
            </View>)
        }
        return commentList
    }


    return (
        <View style={styles.main}>

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.crossBox}
                    onPress={() => {
                        crossTap()
                    }}
                >
                    <Image source={require("../assets/cross-white.png")} style={styles.cross} />
                </TouchableOpacity>

                <Text style={styles.headerText}>All Comments</Text>
            </View>

            {/* Content */}
            <ScrollView>
                <View key={1} style={styles.content}>
                    {
                        renderComments()
                    }
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: sHeight * 0.92,

    },
    header: {
        height: sHeight * 0.09,
        backgroundColor: "#084907",
        width: sWidth,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    crossBox: {
        height: sHeight * 0.09,
        width: sHeight * 0.09,
        alignItems: "center",
        justifyContent: "center"
    },
    cross: {
        height: sHeight * 0.025,
        width: sHeight * 0.025,
    },
    headerText: {
        fontSize: 22,
        fontFamily: "RobotoSlab-Regular",
        color: "#fff",
        paddingLeft: sWidth * 0.01
    },
})