import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import AddCard from './components/AddCard';
import CustomTabBar from './components/CustomTabBar';
import CustomStatusBar from './components/CustomStatusBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { loadTasks, saveTasks } from './utils/storage'; // ✅ Import

const Tab = createBottomTabNavigator();

export default function App() {
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentTab, setCurrentTab] = useState('Home');

  useEffect(() => {
    const fetchTasks = async () => {
      const loadedTasks = await loadTasks(); // ✅ Use utility
      setTasks(loadedTasks);
    };
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const updated = [...tasks, task];
    setTasks(updated);
    await saveTasks(updated); // ✅ Use utility
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
