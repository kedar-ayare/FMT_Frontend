import { View, Text, StyleSheet, Dimensions, ScrollView, } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import Header from './components/header'
import SearchBar from './components/searchBar'
import UserCard from './components/userCard'


import UserScreen from './userScreen'


let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

export default function Search() {

    const navigation = useNavigation();

    const [query, setQuery] = useState("");

    function userTap(name) {
        console.log("Tapped on user: ", name)
        navigation.navigate('UserDetail', { name });
    }


    function handleInput() {
        console.log("Final Value:", query)
    }


    function queryResult() {
        if (query === "" || query == null) {
            return <View style={styles.searchPrev}>
                <Text style={{ color: "#999", fontFamily: "RobotoSlab-Bold", fontSize: 16, marginTop: sHeight * 0.02, marginBottom: sHeight * 0.02 }}>Previously Searched Profiles</Text>
                <UserCard name="Kedar Ayare" img="https://myfamtree.000webhostapp.com/kedar.jpg" userTap={userTap} />
                <UserCard name="Shrawani Ayare" img="https://myfamtree.000webhostapp.com/shrawani.jpg" userTap={userTap} />
                <UserCard name="Vilas Ayare" img="https://myfamtree.000webhostapp.com/vilas.jpg" userTap={userTap} />
                <UserCard name="Siddhi Ayare" img="https://myfamtree.000webhostapp.com/siddi.jpg" userTap={userTap} />
                <UserCard name="Revati Ayare" img="https://myfamtree.000webhostapp.com/revati.jpg" userTap={userTap} />

            </View>
        } else {
            return <View style={styles.searchQueries}>
                <UserCard name="Kedar Ayare" img="https://myfamtree.000webhostapp.com/kedar.jpg" userTap={userTap} />
                <UserCard name="Shrawani Ayare" img="https://myfamtree.000webhostapp.com/shrawani.jpg" userTap={userTap} />
                <UserCard name="Vilas Ayare" img="https://myfamtree.000webhostapp.com/vilas.jpg" userTap={userTap} />
                <UserCard name="Siddhi Ayare" img="https://myfamtree.000webhostapp.com/siddi.jpg" userTap={userTap} />
                <UserCard name="Revati Ayare" img="https://myfamtree.000webhostapp.com/revati.jpg" userTap={userTap} />
                <UserCard name="Shrawani Ayare" img="https://myfamtree.000webhostapp.com/shrawani.jpg" userTap={userTap} />
                <UserCard name="Vilas Ayare" img="https://myfamtree.000webhostapp.com/vilas.jpg" userTap={userTap} />
                <UserCard name="Siddhi Ayare" img="https://myfamtree.000webhostapp.com/siddi.jpg" userTap={userTap} />
                <UserCard name="Revati Ayare" img="https://myfamtree.000webhostapp.com/revati.jpg" userTap={userTap} />

            </View>
        }
    }


    return (
        <View style={styles.main}>

            <Header />
            <SearchBar
                query={query}
                setQuery={setQuery}
                handleInput={handleInput}
            />
            <ScrollView>
                {
                    queryResult()
                }



            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        height: sHeight * 0.92,
        width: sWidth,
        backgroundColor: "white",
    },
    searchPrev: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    searchQueries: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    }
})