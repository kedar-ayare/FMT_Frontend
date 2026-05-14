import { StyleSheet, Text, View, TouchableOpacity, Image, Keyboard } from 'react-native'
import React, { useContext, useState } from 'react'
import { sHeight, sWidth, getServerAddress, tokenKeyName } from '../../utilities/data';
import { encrypt, decrypt } from '../../utilities/encrypt';
import { ImageContext } from './imageProvider';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function NPAddDetails() {

	const { images, setImages, caption, setCaption} = useContext(ImageContext)

	const [inputHeight, setInputHeight] = useState(50); // Initial height
	const [confirmBtn, setConfirmBtn] = useState(false)
	const minHeight = 100;

	async function post() {

        console.log("Posting...")
        const formdata = new FormData();
        images.forEach((image, index) => {
            formdata.append(
                `files`, {
                uri: image.uri,
                type: image.type,
                name: `image${index + 1}.jpg`,
            });
        });

        formdata.append('caption',caption)

        var url = getServerAddress() + "/api/posts/newPost/"

        console.log(formdata)
        const headers ={
            'Content-Type': 'multipart/form-data',
            token: encrypt(await AsyncStorage.getItem(tokenKeyName()))
        }
        console.log(headers)
        axios.post(url, formdata, {
            headers
        }).then(response => {
            console.log(response.data)   
        }).catch(error => {
            console.error(error)
        })
    }


	return (
		<View>
			<View style={styles.header}>
				<TouchableOpacity style={styles.postButton}
					onPress={()=>{
						console.log("Posting")
						post()
					}}
				>
					<Text style={styles.postButtonText}>Post</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.imageCaptionContainer}>
				<View style={styles.imageBox}>
					<Image 
						source={{uri: images[0].uri}}
						style={{width:sWidth*0.2, height:sWidth*0.2}}
					/>	
					<View
						style={{width:sWidth*0.2, height:sWidth*0.2, position:"absolute", top:sWidth*0.05, left:sWidth*0.05, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent:"center", alignItems:"center"}}
					>
						<Text style={{color:"white", fontWeight:"bold", fontSize:24}}>{images.length}</Text>
					</View>
				</View>
				<View style={styles.captionBox}>
					<TextInput
						style={[styles.caption,{height: Math.max(inputHeight, minHeight),}]}
						onFocus={()=>{
							setConfirmBtn(true)
						}}
						multiline={true}
						onContentSizeChange={(event) => {
							setInputHeight(event.nativeEvent.contentSize.height);
						}}
						onChangeText={setCaption}
						value={caption}
						placeholder="Type here..."
						textAlignVertical="top"
						placeholderTextColor="#084907"
					/>
					{
						(!confirmBtn)?
							<></>:
							<TouchableOpacity 
								style={styles.confirmBtnBox}
								onPress={()=>{
									Keyboard.dismiss()
									setConfirmBtn(false)
								}}
							>
								<Text style={styles.confirmBtnText}>Confirm</Text>
							</TouchableOpacity>
					}
					
				</View>
			</View>

			<TouchableOpacity style={styles.addTagsBtn}
				onPress={() => {
					console.log("Tags")
				}}
				
			>
				<Text style={styles.postButtonText}>Add Tags</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.tagPeopleBtn}
				onPress={() => {
					console.log("People")
				}}
				
			>
				<Text style={styles.postButtonText}>Tag Peope</Text>
			</TouchableOpacity>

			{/* Extra Div to cover Bottom area */}
			<View style={{
				width:sWidth,
				height:sHeight-Math.max(inputHeight, minHeight)-sHeight*(0.08+0.3+0.16 -0.08),
				backgroundColor:"#fafafa",
			}}>

			</View>
		</View>
	)


}

const styles = StyleSheet.create({
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
	imageBox:{
		width:sWidth,
		height: sWidth*0.3,
		justifyContent:"center",
		paddingLeft:sWidth*0.05,
	},
	addTagsBtn:{
		backgroundColor: "#fafafa",
        height: sHeight * 0.08,
        width: sWidth,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        shadowColor: '#000',
        shadowOffset: { width: 20, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 3,
		paddingLeft:sWidth*0.03
	},
	tagPeopleBtn:{
		backgroundColor: "#fafafa",
        height: sHeight * 0.08,
        width: sWidth,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        shadowColor: '#000',
        shadowOffset: { width: 20, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 3,
		paddingLeft:sWidth*0.03
	},
	caption:{
		width:sWidth,
		
		fontSize:16,
		padding:sWidth*0.03,
		color:"#084907",
		fontWeight:"600",
	},
	confirmBtnBox:{
		width:sWidth,
		backgroundColor:"#e1ebe4"
	},	
	confirmBtnText:{
		color:"#084907",
		fontWeight:"500",
		textAlign:"center",
		padding:sWidth*0.02,
	}
})