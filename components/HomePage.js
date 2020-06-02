import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { VictoryChart, VictoryLine } from 'victory-native';

function HomePage() {
    return (
        <ScrollView>
            <View>
              <Text>Stocks</Text>
              <VictoryChart>
                <VictoryLine 
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                  }}
                />
              </VictoryChart>
            </View>
            <View>
                <Text>Trending Stocks</Text>
            </View>

        </ScrollView>
    );
}

export default HomePage;