/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();


function HomePage() {
    return(
      <View>
          <Text>Home Page</Text>
      </View>
    )
}

function ChatPage () {
    return (
      <View>
        <Text>Chat Page</Text>
      </View>
    )
}

function SearchPage () {
  return (
    <View>
      <Text>Search Page</Text>
    </View>
  )
}

function AccountPage () {
  return (
    <View>
      <Text>Account Page</Text>
    </View>
  )
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
       
        activeColor="#e91e63"
        style={{ backgroundColor: 'green' }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomePage}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={28}/>
            )
          }}
      />
        <Tab.Screen
            name="chat"
            component={ChatPage}
            options={{
              tabBarLabel: 'chat',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="chat" color={color} size={28} />
              )
            }}
      />
        <Tab.Screen 
          name="Search" 
          component={SearchPage}
          options={{
            tabBarLabel: 'search',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="search-web" color={color} size={28} />
            )
          }}
        />
        <Tab.Screen 
          name="Account" 
          component={AccountPage}
          options={{
            tabBarLabel: 'account',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" color={color} size={28} />
            )
          }}
        />
      </Tab.Navigator>
  </NavigationContainer>
    
  );
};


export default App;
