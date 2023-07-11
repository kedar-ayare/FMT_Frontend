import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { React, useState } from 'react'
import { BlurView } from '@react-native-community/blur'

import { Select, SelectItem } from '@ui-kitten/components';


let sHeight = Dimensions.get('window').height;
let sWidth = Dimensions.get('window').width;

export default function ConnectModal({ setConnectModal }) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    var connectStatus = true
    var name = "Kedar Ayare"
    return (
        <BlurView>
            <View style={{ height: sHeight, width: sWidth, alignItems: "center", justifyContent: "center", }}>
                <View style={styles.content}>
                    <Select
                        label={<Text>Hello</Text>}
                    >

                    </Select>
                </View>
            </View>
        </BlurView>
    )
}

const styles = StyleSheet.create({
    blurBox: {
        height: sHeight,
        width: sWidth,
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        width: sWidth * 0.8,
        height: sHeight * 0.25,
        backgroundColor: "white",
        borderRadius: sWidth * 0.02
    },
})
