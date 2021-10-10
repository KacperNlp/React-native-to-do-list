import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
    width: '100%',
    height: '100%',
    paddingTop: 50,
    paddingLeft: 30,
    paddingBottom: 30,
    paddingRight: 30,
  },
});
