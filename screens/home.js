import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'

import Header from './components/header';
import UserPosts from './userPosts';

let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();

    function allCommentTap(comments) {
        navigation.navigate('AllComments', { comments });
    }


    return (
        <View style={styles.main}>
            <Header />
            <ScrollView>
                <UserPosts allCommentTap={allCommentTap} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: sHeight * 0.92,
        backgroundColor: "#f9f9f9",
        width: sWidth
    }
})