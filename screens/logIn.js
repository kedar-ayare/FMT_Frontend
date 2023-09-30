import { ImageBackground, StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import { React, useState } from 'react'
import { encrypt, decrypt } from '../utilities/encrypt';
import CheckBox from '@react-native-community/checkbox';
import { StackActions, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { getServerAddress } from '../utilities/data';

let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

export default function LogIn({ route }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false)
	const navigation = useNavigation();

	// console.log(route.params)
	const setUserId = route.params["setUserId"]


	async function login() {
		const url = getServerAddress() + "/api/users/login/"
		try {
			const result = await axios.post(url,
				{ "email": encrypt(username), "password": encrypt(password) }
			)
			console.log("Result")
			console.log(result.data.token)

			if (result.data.err === undefined) {
				console.log("LogIn Successful")
				setUserId(decrypt(result.data.token), decrypt(result.data.userID))
			}
			else {
				console.log("Handle Error Here Based on error code")
			}

		} catch (err) {
			console.log(err)
		}


	}

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior="padding"
		// keyboardVerticalOffset={100} // Adjust this value as needed
		>
			<ImageBackground source={require("../assets/bgImg.jpg")} style={styles.bgImg}>
				<ScrollView>
					<View style={styles.main}>

						{/* Logo */}
						<View style={styles.logoBox}>
							<Image source={require("../assets/logo_darkgreen.png")} style={styles.logo} />
						</View>

						{/* Input Fields Box */}
						<View style={styles.inputFieldBox}>

							{/* Username/Email Input */}
							<TextInput
								style={styles.inputFields}
								placeholder='Enter Email Id'
								placeholderTextColor="#084907"
								onChangeText={(value) => setUsername(value)}
							/>

							{/* Password Input */}
							<TextInput
								secureTextEntry={!showPassword}
								style={styles.inputFields}
								placeholder='Enter Password'
								placeholderTextColor="#084907"
								onChangeText={(value) => setPassword(value)}

							/>

							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<CheckBox
									disabled={false}
									value={showPassword}
									onValueChange={(value) => {
										console.log(value)
										console.log(value)
										setShowPassword(value)
									}}
								/>

								<Text style={{ fontFamily: "RobotoSlab-Bold" }}>Show Password</Text>
							</View>


						</View>

						{/* Button Box */}
						<View style={styles.buttonBox}>

							{/* Login Button */}
							<TouchableOpacity

								style={styles.logInBtn}
								onPress={() => {
									console.log(username)
									console.log(password)
									login()
								}}
							>
								<Text style={styles.buttonText}>Log In</Text>
							</TouchableOpacity>

							{/* Back Button */}
							<TouchableOpacity
								onPress={() => {
									navigation.dispatch(StackActions.pop())
								}}
							>
								<Text style={styles.buttonText}>Go Back</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>

			</ImageBackground >
		</KeyboardAvoidingView>

	)
}

const styles = StyleSheet.create({
	bgImg: {
		flex: 1,
		resizeMode: 'cover', // Adjust the resizing mode as per your requirements
		justifyContent: 'flex-end',
	},
	main: {
		height: sHeight,
		// backgroundColor: "yellow",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
		paddingTop: sHeight * 0.1
	},
	logoBox: {
		width: sWidth * 0.45,
		height: sWidth * 0.45,
		backgroundColor: "white",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: sWidth * 0.5
	},
	logo: {
		width: sWidth * 0.45,
		height: sWidth * 0.45,
	},
	inputFieldBox: {
		width: sWidth * 0.8,
		// backgroundColor: "red",
		height: sHeight * 0.30,
		paddingTop: sHeight * 0.05,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around"
	},
	inputFields: {
		backgroundColor: "white",
		borderWidth: 2,
		borderColor: "#084907",
		borderRadius: 5,
		color: "black",
		fontFamily: "RobotoSlab-Regular",
		fontSize: 16,
		textAlign: "center"
	},
	buttonBox: {
		// backgroundColor: "blue",
		width: sWidth * 0.8,
		height: sHeight * 0.12,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
	},
	logInBtn: {
		backgroundColor: "#084907",
		height: sHeight * 0.06,
		width: sWidth * 0.8,
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	buttonText: {
		fontSize: 16,
		fontFamily: "RobotoSlab-Bold",
		color: "white"
	}
})





