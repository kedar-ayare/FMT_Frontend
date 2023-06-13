import AsyncStorage from '@react-native-async-storage/async-storage';

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const asyncStorage = () => {

    const storeData = async (value) => {
        try {
            const temp = await AsyncStorage.setItem('uName', value)
            console.log(temp)
        } catch (e) {
            console.log(e)
        }
    }
    // storeData("Popty")
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('uName')
            console.log(value)
        } catch (e) {
            console.log(e)
        }
    }
    getData()

    return (
        <View>
            <Text>asyncStorage</Text>
        </View>
    )
}

export default asyncStorage

const styles = StyleSheet.create({})