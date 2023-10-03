import { Dimensions, StyleSheet } from 'react-native'


var serverLink = "https://0368-45-118-104-132.ngrok-free.app"

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