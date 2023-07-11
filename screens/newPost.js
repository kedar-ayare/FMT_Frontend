import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;



export default function NewPost() {

    const [images, setImages] = useState([]);
    const [caption, setCaption] = useState("");

    const pickImage = () => {
        launchImageLibrary(options, (value) => {
            if (value.assets !== undefined) {
                var newImages = images.concat(value.assets)
                setImages(newImages)
            }
        })

    };
    const options = {
        title: 'Select Image',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
        selectionLimit: 10,
    };

    function renderImages() {
        var imageList = []
        if (images !== undefined && images.length > 0) {
            for (var i = 0; i < images.length; i++) {
                imageList.push(
                    <ImageWithCross deSelectImage={deSelectImage} keyValue={i} key={i} imgURL={images[i].uri} />
                )
            }
        }
        return imageList
    }

    function deSelectImage(index) {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);

        setImages(updatedImages);
    }


    return (

        <View style={styles.main}>
            <View style={styles.header}>
                {/* <Text style={styles.headerText}>New Post</Text> */}
                <TouchableOpacity style={styles.postButton}
                    onPress={() => {
                        console.log("Caption: ", caption)
                    }}
                >
                    <Text style={styles.postButtonText}>Post</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.content}>
                <TextInput
                    style={styles.inputField}
                    multiline
                    value={caption}
                    onChangeText={setCaption}
                    textAlignVertical="top"
                    placeholder='Enter Caption/Text for your post'
                    placeholderTextColor="#666"
                />
                <View style={styles.imageSection}>
                    <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start", }}>
                        <ImageWithCross1 pickImage={pickImage} />
                        {
                            renderImages()
                        }
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}


const ImageWithCross = ({ imgURL, deSelectImage, keyValue }) => {

    return (
        <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.crossIconContainer} onPress={() => {
                deSelectImage(keyValue)
            }}>
                {/* Replace the 'X' icon with your desired cross icon image */}
                <Text style={styles.crossIcon}>X</Text>
            </TouchableOpacity>

            <Image
                source={{ uri: imgURL }} // Replace with your image source
                style={styles.image}
            />
        </View>
    );
};

const ImageWithCross1 = ({ pickImage }) => {
    return (
        <TouchableOpacity
            onPress={pickImage}
            style={styles.imageContainer1}>

            <Image
                source={require("../assets/newpost-icon.png")} // Replace with your image source
                style={styles.image1}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    main: {
        width: sWidth,
        height: sHeight * 0.92,
        // backgroundColor: "blue"
    },
    header: {
        backgroundColor: "white",
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
        // backgroundColor: "red"
    },
    postButtonText: {
        color: "#084907",
        fontFamily: "RobotoSlab-Bold",
        fontSize: 18
    },

    content: {
        width: sWidth
    },
    inputField: {
        backgroundColor: "#eee",
        color: "black",
        minHeight: sHeight * 0.05 * 3,
        lineHeight: sHeight * 0.04,
        fontSize: 18,
        fontFamily: "RobotoSlab-Regular",
        paddingVertical: sHeight * 0.02,
        paddingHorizontal: sWidth * 0.04,
    },

    imageSection: {
        // backgroundColor: "red"
    },

    imageContainer: {
        position: 'relative',
        width: sWidth * 0.4,
        aspectRatio: 1,
        marginVertical: sWidth * 0.05,
        marginHorizontal: sWidth * 0.05,

    },
    crossIconContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(8, 73, 7, 0.5)',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    crossIcon: {
        color: '#fff',
        fontSize: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },


    imageContainer1: {
        position: 'relative',
        width: sWidth * 0.4,
        height: sWidth * 0.4,
        marginVertical: sWidth * 0.05,
        marginHorizontal: sWidth * 0.05,
        alignItems: "center",
        justifyContent: "center",
        // borderColor: "#ccc",
        // borderWidth: 1,
        // borderRadius: 20,
        // backgroundColor: "brown"
    },
    image1: {
        width: '60%',
        height: '60%',
        resizeMode: 'cover',
    },

})












 // ImagePicker.showImagePicker(options, (response) => {
        //     if (response.didCancel) {
        //         console.log('User cancelled image picker');
        //     } else if (response.error) {
        //         console.log('Image picker error:', response.error);
        //     } else if (response.customButton) {
        //         console.log('User tapped custom button:', response.customButton);
        //     } else {
        //         // The selected image is available in response.uri
        //         const selectedImage = response.uri;
        //         // Process the selected image as needed
        //     }
        // });


















// <View>
        //     <Button title="Pick Image" onPress={pickImage} />
        //     <TouchableOpacity>
        //         <Text style={{ color: "black" }}>lfdjbkdfjbkdjfbnkdjfn</Text>
        //     </TouchableOpacity>
        //     <ScrollView>
        //         {
        //             renderImages()
        //         }
        //     </ScrollView>


        // </View>