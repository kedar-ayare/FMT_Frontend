import { Dimensions } from 'react-native'


var serverLink = "https://1dde-103-183-55-190.ngrok-free.app"

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