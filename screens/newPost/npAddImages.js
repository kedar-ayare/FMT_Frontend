import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useCallback, useContext } from 'react'
import { useState, useRef } from 'react';
import { getServerAddress } from '../../utilities/data';
import axios from 'axios';
import { sHeight, sWidth } from '../../utilities/data';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { ImageContext } from './imageProvider';


export default function NPAddImages({navigation}) {

    const  {images, setImages} = useContext(ImageContext)
    // const [images, setImages] = useState([]);
    

    const [currentPage, setCurrentPage] = useState(0);
    const [index, setIndex] = useState(0);


    const options = {
        title: 'Select Image',
        storageOptions: {
            skipBackup: true,
            path: 'mixed',
        },
        selectionLimit: 10,
    };
    

    const pickImage = () => {
        launchImageLibrary(options, (value) => {
            if (value.assets !== undefined) {
                var newImages = images.concat(value.assets)
                console.log(newImages)
                setImages(newImages)
            }
        })

    };


    function removeImg(index){
        let newArray = [...images]
        newArray.splice(index,1)
        setImages(newArray)
    }

    function renderImages() {
        var imageList = []
        imageList.push(
            <View
                key={1000}
                style={{height:sWidth, width:sWidth*0.1}}
            />
        )
        if (images !== undefined && images.length > 0) {
            for (let i = 0; i < images.length; i++) {

                imageList.push(
                    <View key={i} style={{width:sWidth*0.8, height:sWidth, justifyContent:"center", alignItems:"center"}}>
                        <View style={{width:sWidth*0.75, height:sWidth*0.75, justifyContent:"center", alignItems:"center"}}>
                            <Image style={{width:sWidth*0.7, height:sWidth*0.7}} source={{uri: images[i].uri}}/>
                        </View>
                        
                        <TouchableOpacity key={i} style={styles.crossBox}
                            onPress={()=>{
                                removeImg(i)
                            }}
                        >
                            <Text style={{color:"white"}}>X</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        }
        imageList.push(
            <View key={100} style={{width:sWidth*0.8, height:sWidth, justifyContent:"center", alignItems:"center"}}>
                <TouchableOpacity style={styles.imgSelector} onPress={()=>{
                    if(images.length < 10){
                        // console.log("Images: ", images)
                        pickImage()
                    }else{
                        console.log("Limit Reached")
                    }
                    
                }}>
                    <View style={styles.plusBox}>
                        <Image
                            source={require("../../assets/plus-bold.png")}
                            style={styles.plus} />
                    </View>
                    <Text style={{color:"#084907", paddingTop:sHeight*0.02}}>Tap to select Images</Text>
                </TouchableOpacity>
            </View>
            
        )
        imageList.push(
            <View
                key={1001}
                style={{height:sWidth, width:sWidth*0.1}}
            />
        )
        return imageList
    }

    

    function next(){
        console.log("Next")
        navigation.navigate('AddDetails')
    }
    const handleScroll1 = useCallback((event) => {
        const newPage = Math.round(event.nativeEvent.contentOffset.x / sWidth);
        
        if (newPage !== currentPage) {
            setCurrentPage(newPage);
        }
        if(newPage > currentPage){
            setIndex(index+1)
            console.log("Increase")
        }
        if(newPage < currentPage){
            setIndex(index-1)
            console.log("Decrease")
        }
    }, [currentPage, sWidth]);


    const scrollViewRef = useRef(null); 

    const handleScrollEnd = (event) => {
        
        const xOffset = event.nativeEvent.contentOffset.x;
        const newPage = Math.round(xOffset / (sWidth*0.8)); // Calculate the nearest page based on offset
        setCurrentPage(newPage);
        // Scroll to the exact position of the closest page to ensure correct snapping
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: newPage * sWidth*0.8, animated: true });
        }
    };

    const onLayout = () => {
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({ x: currentPage * sWidth*0.8, animated: false });
        }
    };
    return (  
            <ScrollView>
                <View style={styles.main}>
                    <ScrollView>
                        {/* Header with Post button */}
                        <View style={styles.header}>
                            {/* <Text style={styles.headerText}>New Post</Text> */}
                            <TouchableOpacity style={styles.postButton}
                                onPress={()=>{
                                    if(images.length > 0){
                                        next()
                                    }else{
                                        console.log("No Images Selected")
                                    }
                                }}
                            >
                                <Text style={styles.postButtonText}>Next</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <View style={{width:sWidth, backgroundColor:"red", height:sHeight*0.005}}></View>  */}
                        <View style={{width:sWidth, alignItems:"center"}}>
                            <View style={{height:sHeight*0.1}} />
                            <ScrollView
                                style={{width:sWidth, height:sWidth, borderRadius: 10}
                            
                            }
                                horizontal
                                pagingEnabled={false}  // Disable default pagination since we are handling it manually
                                ref={scrollViewRef}
                                onMomentumScrollEnd={handleScrollEnd}
                                showsHorizontalScrollIndicator={false}
                                snapToInterval={sWidth*0.8}  // Snap to custom page width
                                decelerationRate="fast"     // Optional: Fast deceleration for better snapping effect
                                onLayout={onLayout}

                            >
                                {
                                    renderImages()
                                }
                            </ScrollView>
                        </View>
                    </ScrollView>
                        
                </View>
            </ScrollView>
    )

}


function Slider({index}) {

    const scrollViewRef = useRef(null)
    // const windowWidth = Dimensions.get('window').width;

    const scrollToPage = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: index * sWidth*0.05, animated: true });
        }
    };

    scrollToPage()

    return (
        <>
            <View style={{justifyContent:"center", alignItems:"center", height:sHeight*0.02}}>
                <ScrollView 
                    horizontal={true}
                    pagingEnabled={false}
                    ref={scrollViewRef}
                    style={{width:sWidth*0.15, backgroundColor:"yellow"}}
                >
                    <View style={styles.emptyBox}></View>
                    <View style={[styles.sliderCircle, {backgroundColor:"red"}]}></View>
                    <View style={[styles.sliderCircle, {backgroundColor:"orange"}]}></View>
                    <View style={[styles.sliderCircle, {backgroundColor:"blue"}]}></View>
                    <View style={[styles.sliderCircle, styles.lastCircle]}></View>
                    <View style={styles.emptyBox}></View>
                </ScrollView>
                
            </View>
            {/* <TouchableOpacity
                style={{backgroundColor:"red"}}
                onPress={() => {
                    console.log("pressed")
                    setIndex(index+1)
                }}
            >
                <Text style={{color:"black"}}>Front</Text>
            </TouchableOpacity> */}
            
            {/* <TouchableOpacity
                style={{backgroundColor:"green"}}
                onPress={() => {
                    console.log("pressed")
                    setIndex(index-1)
                }}
            >
                <Text style={{color:"black"}}>Back</Text>
            </TouchableOpacity> */}
        </>
        
    )
}

const styles = StyleSheet.create({
    main: {
        width: sWidth,
        height: sHeight * 0.92,
        backgroundColor: "white",   
        // backgroundColor:"red"
    },
    header: {
        backgroundColor: "#fafafa",
        height: sHeight * 0.08,
        width: sWidth,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        shadowColor: '#000',
        shadowOffset: { width: 20, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 3
    },
    headerText: {
        color: "#084907",
        fontFamily: "RobotoSlab-Bold",
        paddingLeft: sWidth * 0.08,
        textAlign: "center",
        fontSize: 18,
    },
    postButton: {
        height: sHeight * 0.08,
        width: sWidth * 0.3,
        alignItems: "center",
        justifyContent: "center",
    },
    postButtonText: {
        color: "#084907",
        fontFamily: "RobotoSlab-Bold",
        fontSize: 18
    },
    imgSelector:{
        width: sWidth*0.8,
        height: sWidth*0.8,
        backgroundColor:"#e6ece6",
        justifyContent:"center",
        alignItems:"center",
    },
    plusBox:{
        height: sHeight*0.04,
        width: sHeight*0.04,
        backgroundColor:"white",
        borderRadius: sHeight,
        justifyContent:"center",
        alignItems:"center"
    },
    plus:{
        height: sHeight*0.025,
        width: sHeight*0.025,
    },
    crossBox:{
        position:"absolute", 
        height:sWidth*0.06, 
        width:sWidth*0.06, 
        backgroundColor: "green", 
        borderRadius:sHeight,
        top:sWidth*0.125, 
        right:sWidth*0.025, 
        justifyContent:"center", 
        alignItems:"center",
    },
    sliderCircle:{
        height: sWidth*0.02,
        width: sWidth*0.02,
        backgroundColor:"grey",
        borderRadius: sWidth*0.02,
        marginVertical: sWidth*0.02,
        marginHorizontal: sWidth*0.015, 
    },
    emptyBox:{
        width: sWidth*0.05
    }
})