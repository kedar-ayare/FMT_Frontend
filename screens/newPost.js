import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;


export default function NewPost() {
    console.log("Inside new post")

    const [images, setImages] = useState([]);

    const pickImage = () => {

        // launchCamera(options, (value) => {
        //     console.log(value.assets)
        // })
        launchImageLibrary(options, (value) => {
            console.log(value.assets)
            setImages(value.assets)
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
    };
    const options = {
        title: 'Select Image',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };

    function renderImages() {
        var imageList = []
        if (images != undefined && images.length > 0) {
            for (var i = 0; i < images.length; i++) {
                imageList.push(
                    <Image key={i}
                        source={{ uri: images[i].uri }}
                        style={{ width: sWidth, aspectRatio: 1 }}
                    />
                )
            }
        }
        return imageList

    }


    return (
        <View>
            <Button title="Pick Image" onPress={pickImage} />
            <TouchableOpacity>
                <Text style={{ color: "black" }}>lfdjbkdfjbkdjfbnkdjfn</Text>
            </TouchableOpacity>
            <ScrollView>
                {
                    renderImages()
                }
            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({})