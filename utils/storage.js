import AsyncStorage from '@react-native-async-storage/async-storage';

const TASKS_KEY = 'tasks';

export const loadTasks = async () => {
    try {
        const stored = await AsyncStorage.getItem(TASKS_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Failed to load tasks:', error);
        return [];
    }
};

export const saveTasks = async (tasks) => {
    try {
        await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.error('Failed to save tasks:', error);
    }
};
