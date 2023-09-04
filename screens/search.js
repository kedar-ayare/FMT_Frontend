import { View, Text, StyleSheet, Dimensions, ScrollView, List, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import Header from './components/header'
import SearchBar from './components/searchBar'
import UserCard from './components/userCard'


import UserScreen from './userScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { getServerAddress } from '../utilities/data';
import { encrypt } from '../utilities/encrypt';


let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

export default function Search() {

    const [query, setQuery] = useState("");
    const [searhResult, setSearchResult] = useState([]);
    const [prevSearched, setPrevSearched] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        getSearched()
    }, [])

    const navigation = useNavigation();

    function handleBackPress() {
        setQuery("")
        setSearchResult([])
        setLoader(false)
    }

    async function getSearched() {
        console.log("Getting Searched from Async")
        const stringData = await AsyncStorage.getItem("searched")
        if (stringData !== null) {
            setPrevSearched(JSON.parse(stringData))
        }
    }

    async function userTap(userDets) {
        console.log("Tapped on user: ", userDets)
        // const _searchedUsers = await AsyncStorage.getItem("searched")
        // const _parsed = JSON.parse(_searchedUsers)
        const tappedUser = {
            "id": userDets[0],
            "name": userDets[1],
            "img": userDets[2]
        }
        const decider = prevSearched.some(obj => obj.id === tappedUser.id)
        if (!decider) {
            prevSearched.push(tappedUser)
            setPrevSearched(prevSearched)
            console.log(prevSearched)
            AsyncStorage.setItem("searched", JSON.stringify(prevSearched))

        }
        navigation.navigate('UserDetail', { userDets });
        // console.log(_parsed)
        // AsyncStorage.setItem("searched",JSON.stringify(_parsed))
        // navigation.navigate('UserDetail', { name });
    }

    async function handleInput() {
        console.log("Final Value:", query)
        setLoader(true)
        const endpoint = getServerAddress() + "/api/search/" + query
        const headers = {
            token: encrypt(await AsyncStorage.getItem("userId"))
        }
        try {
            const users = await axios.get(endpoint, { headers })
            setSearchResult(users.data)
            setLoader(false)
        } catch (err) {
            searhResult([])
        }

    }

    function prevSearchedDisplay() {
        console.log("Displaying Previously Searched")
        var userCards = []
        if (prevSearched !== "" && prevSearched.length > 0) {
            for (var i = 0; i < prevSearched.length; i += 1) {
                userCards.push(
                    <UserCard
                        userId={prevSearched[i]["id"]}
                        name={prevSearched[i]["name"]}
                        img={prevSearched[i]["img"]}
                        userTap={userTap}
                        removeSearched={removeSearched}
                    />

                )
            }
        }
        return <ScrollView>
            <View style={styles.searchPrev}>
                <Text style={{ color: "#999", fontFamily: "RobotoSlab-Bold", fontSize: 16, marginTop: sHeight * 0.02, marginBottom: sHeight * 0.02 }}>Previously Searched Profiles</Text>
                {
                    userCards.map((card, index) => {
                        return <React.Fragment key={index}>{card}</React.Fragment>
                    })
                }
            </View>
        </ScrollView>
    }

    function newSearchDisplay() {
        if (searhResult.length === 0) {
            return <Text style={{ color: "black" }}></Text>
        }
        else {
            const userCards = []
            for (var i = 0; i < searhResult.length; i += 1) {
                // console.log(searhResult[i]["_id"])
                userCards.push(
                    <UserCard name={searhResult[i]["fname"] + " " + searhResult[i]["lname"]}
                        img={searhResult[i]["profileURL"]}
                        userTap={userTap}
                        userId={searhResult[i]["_id"]}
                    />
                )
            }
            return <ScrollView>
                <View style={styles.searchQueries}>
                    {
                        userCards.map((card, index) => {
                            return <React.Fragment key={index}>{card}</React.Fragment>
                        })
                    }
                </View>
            </ScrollView>

        }


    }
    function queryResult() {
        if (loader) {
            return <ActivityIndicator size={50} color="black" />
        }
        if (query === "") {
            return prevSearchedDisplay()

            // return <View style={styles.searchPrev}>
            //     <Text style={{ color: "#999", fontFamily: "RobotoSlab-Bold", fontSize: 16, marginTop: sHeight * 0.02, marginBottom: sHeight * 0.02 }}>Previously Searched Profiles</Text>
            //     {/* {userCards.map((component, index) => (
            //         <React.Fragment key={index}>{component}</React.Fragment>
            //     ))} */}
            // </View>
            // console.log("something 2")
            // return <View style={styles.searchPrev}>
            //     <Text style={{ color: "#999", fontFamily: "RobotoSlab-Bold", fontSize: 16, marginTop: sHeight * 0.02, marginBottom: sHeight * 0.02 }}>Previously Searched Profiles</Text>
            //     <UserCard name="Kedar Ayare" img="https://myfamtree.000webhostapp.com/kedar.jpg" userTap={userTap} />
            //     <UserCard name="Shrawani Ayare" img="https://myfamtree.000webhostapp.com/shrawani.jpg" userTap={userTap} />
            //     <UserCard name="Vilas Ayare" img="https://myfamtree.000webhostapp.com/vilas.jpg" userTap={userTap} />
            //     <UserCard name="Siddhi Ayare" img="https://myfamtree.000webhostapp.com/siddi.jpg" userTap={userTap} />
            //     <UserCard name="Revati Ayare" img="https://myfamtree.000webhostapp.com/revati.jpg" userTap={userTap} />

            // </View>
        } else {
            return newSearchDisplay()
            // console.log("Something 1")
            // return <View style={styles.searchQueries}>
            //     <UserCard name="Kedar Ayare" img="https://myfamtree.000webhostapp.com/kedar.jpg" userTap={userTap} />
            //     <UserCard name="Shrawani Ayare" img="https://myfamtree.000webhostapp.com/shrawani.jpg" userTap={userTap} />
            //     <UserCard name="Vilas Ayare" img="https://myfamtree.000webhostapp.com/vilas.jpg" userTap={userTap} />
            //     <UserCard name="Siddhi Ayare" img="https://myfamtree.000webhostapp.com/siddi.jpg" userTap={userTap} />
            //     <UserCard name="Revati Ayare" img="https://myfamtree.000webhostapp.com/revati.jpg" userTap={userTap} />
            //     <UserCard name="Shrawani Ayare" img="https://myfamtree.000webhostapp.com/shrawani.jpg" userTap={userTap} />
            //     <UserCard name="Vilas Ayare" img="https://myfamtree.000webhostapp.com/vilas.jpg" userTap={userTap} />
            //     <UserCard name="Siddhi Ayare" img="https://myfamtree.000webhostapp.com/siddi.jpg" userTap={userTap} />
            //     <UserCard name="Revati Ayare" img="https://myfamtree.000webhostapp.com/revati.jpg" userTap={userTap} />

            // </View>
        }
    }


    function removeSearched(userId) {
        const newArr = prevSearched.filter(obj => obj.id !== userId)
        setPrevSearched(newArr)
    }

    return (
        <View style={styles.main}>

            <Header />
            <SearchBar
                query={query}
                setQuery={setQuery}
                handleInput={handleInput}
                handleBackPress={handleBackPress}
            />
            {
                queryResult()
            }
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