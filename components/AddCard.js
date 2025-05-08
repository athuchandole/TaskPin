import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Modal,
    StyleSheet
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function AddCard({ visible, onClose, onAdd }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(null);
    const [isPinned, setIsPinned] = useState(false);

    const handleAddTask = () => {
        if (title && description) {
            onAdd({ title, description, priority, isPinned });
            setTitle('');
            setDescription('');
            setPriority(null);
            setIsPinned(false);
            onClose();
        }
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.card}>
                    <Text style={styles.heading}>Add Note</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Title"
                        value={title}
                        onChangeText={setTitle}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Description"
                        value={description}
                        onChangeText={setDescription}
                        multiline
                    />

                    <View style={styles.priorityContainer}>
                        <TouchableOpacity
                            style={[
                                styles.priorityButton,
                                { backgroundColor: '#EF4444' },
                                priority === 'High' && styles.selected
                            ]}
                            onPress={() => setPriority('High')}
                        />
                        <Text style={styles.priorityLabel}>High</Text>

                        <TouchableOpacity
                            style={[
                                styles.priorityButton,
                                { backgroundColor: '#14B8A6' },
                                priority === 'Medium' && styles.selected
                            ]}
                            onPress={() => setPriority('Medium')}
                        />
                        <Text style={styles.priorityLabel}>Medium</Text>

                        <TouchableOpacity
                            style={[
                                styles.priorityButton,
                                { backgroundColor: '#3B82F6' },
                                priority === 'Low' && styles.selected
                            ]}
                            onPress={() => setPriority('Low')}
                        />
                        <Text style={styles.priorityLabel}>Low</Text>

                        <TouchableOpacity
                            onPress={() => setIsPinned(!isPinned)}
                            style={styles.pinIcon}
                        >
                            <FontAwesome
                                name="thumb-tack"
                                size={24}
                                color={isPinned ? 'black' : '#bbb'}
                            />
                            <Text style={styles.priorityLabel}>Pinned</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                            <Text style={styles.closeText}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
                            <Text style={styles.addText}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    card: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#94A3B8',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15
    },
    priorityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom: 20
    },
    priorityButton: {
        width: 24,
        height: 24,
        borderRadius: 4,
        marginHorizontal: 4
    },
    selected: {
        borderWidth: 2,
        borderColor: '#000'
    },
    priorityLabel: {
        marginRight: 12,
        fontSize: 14,
        color: '#64748B'
    },
    pinIcon: {
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 'auto'
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    closeButton: {
        backgroundColor: '#F1F5F9',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12
    },
    addButton: {
        backgroundColor: '#3B82F6',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 12
    },
    closeText: {
        color: '#000',
        fontWeight: '600'
    },
    addText: {
        color: '#fff',
        fontWeight: '600'
    }
});
