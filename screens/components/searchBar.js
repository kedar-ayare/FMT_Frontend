import { View, Text, Dimensions, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'


let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

export default function SearchBar({ query, setQuery, handleInput }) {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchBox}>
                <View style={styles.imgBox}>
                    <Image
                        source={{ uri: 'https://myfamtree.000webhostapp.com/appImages/search%20box%20icon.png' }} // Replace with your image URL
                        style={styles.image}
                    />

                </View>
                <TextInput style={styles.searchField}
                    placeholder='Enter Username'
                    placeholderTextColor="#9C9A9A"
                    onEndEditing={handleInput}
                    onChangeText={(val) => {
                        setQuery(val)
                    }}
                    value={query}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        width: sWidth,
        height: sHeight * 0.12,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "yellow",
        shadowOffset: 2,
        shadowOpacity: 0.9
    },
    searchBox: {
        height: sHeight * 0.08,
        width: sWidth * 0.9,
        backgroundColor: "#F6F6F6",
        display: "flex",
        flexDirection: "row"
    },
    imgBox: {
        height: sHeight * 0.08,
        width: sHeight * 0.08,
        // backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: sHeight * 0.04,
        width: sHeight * 0.04,
    },
    searchField: {
        height: sHeight * 0.08,
        width: sWidth * 0.9 - sHeight * 0.08,
        // backgroundColor: "yellow",
        fontFamily: "RobotoSlab-Regular",
        fontSize: 18,
        color: "black",
        paddingLeft: sWidth * 0.04,
    }
})