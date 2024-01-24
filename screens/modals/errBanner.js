// Banner.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const ErrBanner = ({ message, type, onClose }) => {
    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
        }).start();

        // Automatically hide the banner after 3 seconds (adjust as needed)
        const timer = setTimeout(() => {
            onClose && onClose();
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [fadeAnim, onClose]);

    return (
        <Animated.View
            style={[
                styles.banner,
                { backgroundColor: type === 'error' ? 'red' : 'green', opacity: fadeAnim },
            ]}
        >
            <Text style={styles.bannerText}>{message}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    banner: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerText: {
        color: 'white',
    },
});

export default ErrBanner;
