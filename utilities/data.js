import { Dimensions, StyleSheet } from 'react-native'


var serverLink = "https://effd-59-152-120-172.ngrok-free.app"

var atlasUserPAssword = "Q4mOG6nNWWwyGsVd"
export function getServerAddress() {
    return serverLink
}

export function tokenKeyName() {
    return "userToken"
}

export let sHeight = Dimensions.get('window').height;
export let sWidth = Dimensions.get('window').width;
export let navBottomHeight = sHeight*0.06;
export let wrapperScreenHeights = sHeight*0.94;

export const wrapperStyleSheet = StyleSheet.create({
    main: {
        width: sWidth,
        height: sHeight * 0.94,
    }
})