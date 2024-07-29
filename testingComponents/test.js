import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, { Easing } from 'react-native-reanimated';

const SlideDownCloseableComponent = ({ onClose, children }) => {
    const translateY = useRef(new Animated.Value(0)).current;

    const onGestureEvent = Animated.event(
        [{ nativeEvent: { translationY: translateY } }],
        { useNativeDriver: false }
    );

    const onHandlerStateChange = ({ nativeEvent }) => {
        if (nativeEvent.state === State.END) {
            // Check if the component has been dragged down enough to close
            if (nativeEvent.translationY > 100) {
                Animated.timing(translateY, {
                    toValue: 500, // Adjust this value based on your component height
                    duration: 300,
                    easing: Easing.ease,
                    useNativeDriver: false,
                }).start(() => {
                    // Call onClose when the animation is complete
                    onClose();
                });
            } else {
                // If not dragged down enough, reset the translation
                Animated.spring(translateY, {
                    toValue: 0,
                    useNativeDriver: false,
                }).start();
            }
        }
    };

    return (
        <View style={styles.container}>
            <PanGestureHandler
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onHandlerStateChange}
            >
                <Animated.View
                    style={[
                        styles.card,
                        {
                            transform: [{ translateY: translateY }],
                        },
                    ]}
                >
                    <TouchableOpacity onPress={() => onClose()} style={styles.closeButton}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                    {children}
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    card: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 16,
        minHeight: 200, // Adjust this value based on your component height
    },
    closeButton: {
        alignItems: 'center',
        padding: 10,
    },
});

export default SlideDownCloseableComponent;
