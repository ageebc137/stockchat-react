import React from 'react';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from '../components/HomePage';
import AccountPage from '../components/AccountPage';
import SearchPage from '../components/SearchPage';
import ChatPage from '../components/ChatPage';

const Tab = createMaterialBottomTabNavigator();

function NavigatorTab() {
    return (
        <Tab.Navigator
            activeColor="white"
            style={{ backgroundColor: '#08457e' }}
        >
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    tabBarColor: '#00cc7a',
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => (
                    <Ionicons name="ios-home" color={color} size={28}/>
                    )
                }}
            />
            <Tab.Screen
                name="chat"
                component={ChatPage}
                options={{
                tabBarColor: '#00cc7a',
                tabBarLabel: 'Chat',
                tabBarIcon: ({color}) => (
                    <Ionicons name="ios-chatboxes" color={color} size={28} />
                )
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={SearchPage}
                options={{
                    tabBarColor: '#00cc7a',
                    tabBarLabel: 'Search',
                    tabBarIcon: ({color}) => (
                    <Ionicons name="ios-search" color={color} size={28} />
                    )
                }}
            />
            <Tab.Screen 
                name="Account" 
                component={AccountPage}
                options={{
                    tabBarColor: '#00cc7a',
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({color}) => (
                    <Ionicons name="ios-settings" color={color} size={28} />
                    )
                }}
            />
      </Tab.Navigator>
    )
}

export default NavigatorTab;