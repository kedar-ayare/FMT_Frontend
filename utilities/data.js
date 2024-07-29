import { Dimensions, StyleSheet } from 'react-native'


var serverLink = "https://7283-203-194-99-170.ngrok-free.app"

var atlasUserPAssword = "Q4mOG6nNWWwyGsVd"
export function getServerAddress() {
    return serverLink
}

export function tokenKeyName() {
    return "userToken"
}

export let sHeight = Dimensions.get('window').height;
export let sWidth = Dimensions.get('window').width;

export const wrapperStyleSheet = StyleSheet.create({
    main: {
        width: sWidth,
        height: sHeight * 0.92,
    }
})