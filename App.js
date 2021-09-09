
import React from 'react';
import { StyleSheet, View, LogBox } from 'react-native';
import Component from './components/Component';



LogBox.ignoreLogs(['Setting a timer for a long period of time'])
export default function App() {
  return (
    <View style={styles.container}>
      <Component />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
