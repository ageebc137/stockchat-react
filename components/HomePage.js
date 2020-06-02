import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { VictoryBar } from 'victory-native';

function HomePage() {
    return (
        <ScrollView>
            <View>
              <Text>Stocks</Text>
              <VictoryBar/>
            </View>
            <View>
                <Text>Trending Stocks</Text>
            </View>

        </ScrollView>
    );
}

export default HomePage;