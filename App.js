import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Header from './components/Header';

export default function App() {
  const [tasksList, setTasksList] = useState([]);

  const setNewTask = (task) => {
    if(!task.length)
      return null;

    const randomKeyForTask = Math.random() + '';
    const objectWithTaskForArray = {
      task: task,
      key: randomKeyForTask
    };

    setTasksList([...tasksList, objectWithTaskForArray]);
  }

  return (
    <View style={styles.container}>
      <Header 
        addNewTask={setNewTask}
      />
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
