import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ShowCard({ title, description }) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            {description ? <Text style={styles.description}>{description}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        marginBottom: 12,
        elevation: 2,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
    },
    description: {
        marginTop: 6,
        color: '#444',
        fontSize: 14,
    },
});
