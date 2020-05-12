import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import List2 from './src/components/List2';
import Global from './src/components/Global';
import Global2 from './src/components/Global2';
import Global3 from './src/components/Global3';

const App = () => {
  return (
    <View>
      <Text></Text>
      <Text></Text>
      <Text style={styles.container}>     Data Covid 19 Global dan Indonesia</Text>
      <Text style={styles.atas}>                                Global</Text>
      <View style={{flexDirection:'row'}}>
        <Global/>
        <Global2/>
        <Global3/>
      </View>
      <Text style={styles.blue}>                               Indonesia</Text>
      <List2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    alignItems: 'center',
    backgroundColor:'limegreen'
  },
  atas:{
    fontSize: 20,
    backgroundColor:'lime',
    alignItems: 'center',
  },
  blue:{
    fontSize: 20,
    backgroundColor:'lightgreen',
    alignItems: 'center',
  },
});

export default App;