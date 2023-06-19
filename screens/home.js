import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'

import Header from './components/header';
import UserPosts from './userPosts';

let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

export default function Home() {
    console.log("In Home")
    return (
        <View style={styles.main}>
            <Header />
            <ScrollView>
                <UserPosts />
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