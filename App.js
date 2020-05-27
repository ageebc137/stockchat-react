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

const Tab = createMaterialBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <ScrollView>
        <View>
          <Text>Hello</Text>
        </View>
      </ScrollView>
    {/* <Tab.Navigator>
      <Tab.Screen name="Home" />
      <Tab.Screen name="Chat" />
      <Tab.Screen name="Search" />
      <Tab.Screen name="Settings" />
    </Tab.Navigator> */}
    </View>
  );
};


export default App;
