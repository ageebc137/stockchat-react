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
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage}/>
      <Tab.Screen name="Chat" component={ChatPage}/>
      <Tab.Screen name="Search" component={SearchPage}/>
      <Tab.Screen name="Account" component={AccountPage}/>
    </Tab.Navigator>
  </NavigationContainer>
    
  );
};


export default App;
