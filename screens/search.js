import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'

import Header from './components/header'
import SearchBar from './components/searchBar'
import UserCard from './components/userCard'

let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

export default function Search() {

    const [query, setQuery] = useState("");


    function handleInput() {
        console.log("Final Value:", query)
    }


    function queryResult() {
        if (query === "" || query == null) {
            return <View style={styles.searchPrev}>
                <Text style={{ color: "#999", fontFamily: "RobotoSlab-Bold", fontSize: 16, marginTop: sHeight * 0.02, marginBottom: sHeight * 0.02 }}>Previously Searched Profiles</Text>
                <UserCard name="Kedar Ayare" img="https://myfamtree.000webhostapp.com/appImages/kedar.jpg" />
                <UserCard name="Shrawani Ayare" img="https://myfamtree.000webhostapp.com/appImages/shrawani.jpg" />
                <UserCard name="Vilas Ayare" img="https://myfamtree.000webhostapp.com/appImages/vilas.jpg" />
                <UserCard name="Siddhi Ayare" img="https://myfamtree.000webhostapp.com/appImages/siddi.jpg" />
                <UserCard name="Revati Ayare" img="https://myfamtree.000webhostapp.com/appImages/revati.jpg" />

            </View>
        } else {
            return <View style={styles.searchQueries}>
                <UserCard name="Kedar Ayare" img="https://myfamtree.000webhostapp.com/appImages/kedar.jpg" />
                <UserCard name="Shrawani Ayare" img="https://myfamtree.000webhostapp.com/appImages/shrawani.jpg" />
                <UserCard name="Vilas Ayare" img="https://myfamtree.000webhostapp.com/appImages/vilas.jpg" />
                <UserCard name="Siddhi Ayare" img="https://myfamtree.000webhostapp.com/appImages/siddi.jpg" />
                <UserCard name="Revati Ayare" img="https://myfamtree.000webhostapp.com/appImages/revati.jpg" />
                <UserCard name="Shrawani Ayare" img="https://myfamtree.000webhostapp.com/appImages/shrawani.jpg" />
                <UserCard name="Vilas Ayare" img="https://myfamtree.000webhostapp.com/appImages/vilas.jpg" />
                <UserCard name="Siddhi Ayare" img="https://myfamtree.000webhostapp.com/appImages/siddi.jpg" />
                <UserCard name="Revati Ayare" img="https://myfamtree.000webhostapp.com/appImages/revati.jpg" />

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
        height: sHeight * 0.9,
        width: sWidth * 0.9,
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