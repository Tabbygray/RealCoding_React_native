import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CityList from './CityList';

import { SafeAreaView } from 'react-native-safe-area-context';

export default class App extends React.Component {
  

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CityList/>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'orange',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});