import { View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { sHeight, sWidth } from '../../utilities/data';


export default function SearchBar({ query, setQuery, handleInput, handleBackPress }) {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchBox}>
                <TouchableOpacity style={styles.imgBox}
                    onPress={handleBackPress}
                >
                    <Image
                        source={(query === "") ? require("../../assets/search-grey.png")
                            : require("../../assets/arrow-grey.png")}
                        // source={require("../../assets/search-grey.png")} // Replace with your image URL
                        style={styles.image}
                    />

                </TouchableOpacity>
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
        height: sHeight * 0.035,
        width: sHeight * 0.035,
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