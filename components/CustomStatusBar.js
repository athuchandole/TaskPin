import React from 'react';
import { View, Text, Platform, StatusBar, StyleSheet } from 'react-native';

const CustomStatusBar = ({ routeName }) => {
    const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;

    return (
        <View style={[styles.container, { paddingTop }]}>
            <Text style={styles.title}>{routeName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#6200EE',
        alignItems: 'center',
        justifyContent: 'center',
        height: 56, // adjust as needed
        zIndex: 10,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default CustomStatusBar;
