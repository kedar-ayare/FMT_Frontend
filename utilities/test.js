import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import SelectDropdown from 'react-native-select-dropdown'


export default function test() {

    async function removeToken() {
        await AsyncStorage.setItem("userId", "")
        const temp = await AsyncStorage.getItem("userId")
        console.log(".skfvn: ", temp)
    }


    async function searchDataSetter() {
        const temp = await AsyncStorage.getItem("searched")
        console.log(temp)
        const dataArray = [
            {
                "id": "6460f80082a63e8eef2ca825",
                "name": "Kedar Ayare",
                "img": "https://myfamtree.000webhostapp.com/kedar.jpg"
            },
            {
                "id": "6462534d04184a090fa0ebef",
                "name": "Shrawani Ayare",
                "img": "https://myfamtree.000webhostapp.com/shrawani.jpg"
            }
        ]
        const serializeddata = JSON.stringify(dataArray)
        console.log(serializeddata)
        await AsyncStorage.setItem("searched", serializeddata)

        const getdata = await AsyncStorage.getItem("searched")
        console.log(getdata)
        console.log(JSON.parse(getdata))
    }
    searchDataSetter()
    return (
        <View>
            <Text>test</Text>
        </View>
    )
}

const styles = StyleSheet.create({})