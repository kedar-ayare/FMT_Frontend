import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, Image, ActivityIndicator, StyleSheet, Dimensions, Button } from 'react-native';

const sWidth = Dimensions.get('screen').width;
const sHeight = Dimensions.get('screen').height;

const App = () => {
    const [factor, setFactor] = useState(0)

    var refScrollView = useRef(null);

    useEffect(() => {
        try {
            refScrollView.current.scrollTo({ x: (sWidth) * factor });
        } catch (e) {
            console.log("err")
        }

    }, [factor])
    const moveTo = async () => {
        setFactor(factor + 1)
        // console.log(refScrollView.current)

        // or just refScrollView.current.scrollTo({x: value1}); if you want to scroll horizontally
        // or just refScrollView.current.scrollTo({y: value2}); if you want to scroll vertically
    }

    console.log("Factor: ", factor)
    return (
        <>
            <Button onPress={moveTo} title="title" />
            <ScrollView
                contentContainerStyle={styles.scrollView}
                ref={refScrollView}
                horizontal={true}
                pagingEnabled={true}
            >
                <View style={styles.mybox}>
                    <Image style={styles.imgBox} source={{ uri: "https://myfamtree.000webhostapp.com/appImages/post1.jpg" }}></Image>
                    <Image style={styles.imgBox} source={{ uri: "https://myfamtree.000webhostapp.com/appImages/post4.jpg" }}></Image>
                    <Image style={styles.imgBox} source={{ uri: "https://myfamtree.000webhostapp.com/appImages/post5.jpg" }}></Image>
                    <Image style={styles.imgBox} source={{ uri: "https://myfamtree.000webhostapp.com/appImages/post4.jpg" }}></Image>

                </View>

            </ScrollView>

        </>

    );
};

const styles = StyleSheet.create({
    imgBox: {
        width: sWidth,
        aspectRatio: 1
    },
    mybox: {
        display: "flex",
        flexDirection: "row"
    },
    scrollView: {
        paddingTop: 50,
    },
    image: {
        width: Dimensions.get('window').width,
        height: 300,
        resizeMode: 'cover',
    },
    loader: {
        position: 'absolute',
        alignSelf: 'center',
    },
});

export default App;
