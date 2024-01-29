import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import Header from './components/header';
import UserFeed from './userFeed';

import { sHeight, sWidth } from '../utilities/data';

export default function Home() {

    const navigation = useNavigation();

    // Function that opens the All Comments Screen whenever
    // user taps on the "all comments" option of the post
    function allCommentTap(comments) {
        navigation.navigate('AllComments', { comments });
    }


    return (
        <View style={styles.main}>
            <Header />
            <ScrollView>
                <UserFeed allCommentTap={allCommentTap} />
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