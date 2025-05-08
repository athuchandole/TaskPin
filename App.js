import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import AddCard from './components/AddCard';
import CustomTabBar from './components/CustomTabBar';
import CustomStatusBar from './components/CustomStatusBar'; // Import here
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentTab, setCurrentTab] = useState('Home');

  useEffect(() => {
    const loadTasks = async () => {
      const stored = await AsyncStorage.getItem('tasks');
      setTasks(stored ? JSON.parse(stored) : []);
    };
    loadTasks();
  }, []);

  const addTask = async (task) => {
    const updated = [...tasks, task];
    setTasks(updated);
    await AsyncStorage.setItem('tasks', JSON.stringify(updated));
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer
        onStateChange={(state) => {
          const route = state.routes[state.index];
          setCurrentTab(route.name);
        }}
      >
        <CustomStatusBar routeName={currentTab} />
        <Tab.Navigator
          screenOptions={{ headerShown: false }}
          tabBar={(props) => (
            <CustomTabBar {...props} onAddPress={() => setIsAddVisible(true)} />
          )}
        >
          <Tab.Screen name="Home">
            {() => <HomeScreen tasks={tasks} />}
          </Tab.Screen>
          <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <AddCard
        visible={isAddVisible}
        onClose={() => setIsAddVisible(false)}
        onAdd={addTask}
      />
    </SafeAreaProvider>
  );
}
