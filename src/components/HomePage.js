import React, {useState} from 'react';
import VARIABLES from '../env/variables';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { VictoryChart, VictoryLine } from 'victory-native';

const finnhubWS = 'wss://ws.finnhub.io';

function HomePage() {
  const [price, setPrice] = useState(0);
  const [topStocks, setTopStocks] = useState([]);
  const socket = new WebSocket(`${finnhubWS}?token=${VARIABLES.API_KEY}`);
   
  socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'V'}));
   
  });

  socket.addEventListener('message', function (event) {
    var data = JSON.parse(event.data)
    if (data.data) {
      var dataprice = data.data[0]["p"];
      if (dataprice !== price) setPrice(dataprice);
      console.log('Message from server ', data.data );
    }
   
    
   
});

    return (
        <ScrollView>
            <View>
              <Text>Stocks</Text>
              <Text>${price}</Text>
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
                <Text>V</Text>
                <Text>Price</Text>
            </View> 

        </ScrollView>
    );
}

export default HomePage;