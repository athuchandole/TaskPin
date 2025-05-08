import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    Platform,
    StatusBar,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function CustomTabBar({ state, navigation, onAddPress }) {
    const insets = useSafeAreaInsets();
    const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;

    return (
        <View
            style={[
                styles.container,
                {
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingTop: statusBarHeight,
                },
            ]}
        >
            <View style={styles.tabBar}>
                {/* Home */}
                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => navigation.navigate('Home')}
                >
                    <MaterialCommunityIcons name="home" size={24} color="white" />
                    <Text style={styles.label}>Home</Text>
                </TouchableOpacity>

                {/* Transaction */}
                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => navigation.navigate('Transaction')}
                >
                    <MaterialCommunityIcons name="currency-inr" size={24} color="white" />
                    <Text style={styles.label}>Transaction</Text>
                </TouchableOpacity>

                {/* Spacer for Add Button */}
                <View style={styles.spacer} />

                {/* Notification */}
                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => navigation.navigate('Notification')}
                >
                    <MaterialCommunityIcons name="bell" size={24} color="white" />
                    <Text style={styles.label}>Notification</Text>
                </TouchableOpacity>

                {/* Setting */}
                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <MaterialCommunityIcons name="cog" size={24} color="white" />
                    <Text style={styles.label}>Setting</Text>
                </TouchableOpacity>
            </View>

            {/* Center Add Button */}
            <TouchableOpacity onPress={onAddPress} style={styles.addButton}>
                <Ionicons name="add" size={36} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    tabBar: {
        flexDirection: 'row',
        backgroundColor: '#6200EE',
        height: 70,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: '100%',
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 12,
        color: 'white',
        marginTop: 2,
    },
    spacer: {
        width: 70, // Leave space for Add button
    },
    addButton: {
        position: 'absolute',
        top: -30,
        backgroundColor: '#A450F7',
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
});
