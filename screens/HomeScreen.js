import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ShowCard from '../components/ShowCard';

export default function HomeScreen({ tasks }) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Your Tasks</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {tasks.map((task, index) => (
                    <ShowCard
                        key={index}
                        title={task.title}
                        description={task.description}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    heading: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 16,
    },
});
