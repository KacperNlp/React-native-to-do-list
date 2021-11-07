import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Header from './components/Header';
import TasksList from './components/TasksList';

export default function App() {
  const [tasksList, setTasksList] = useState([]);

  const setNewTask = (task) => {
    if(!task.length)
      return null;

    const number = tasksList.length + 1;
    const randomKeyForTask = Math.random() + '';
    const objectWithTaskForArray = {
      task: task,
      key: randomKeyForTask,
      checked: false,
      number: number
    };

    setTasksList([...tasksList, objectWithTaskForArray]);
  }

  const changeCheckedTasks = (id) => {
    const newTaskList = tasksList.map(task => {
      if(task.key != id)
        return task;
      
      const changedTask = {
        key: task.key,
        task: task.task,
        checked: !task.checked
      };
      return changedTask;
    })

    setTasksList(newTaskList)
  }

  return (
    <View style={styles.container}>
      <Header 
        addNewTask={setNewTask}
      />
      <TasksList
        tasks={tasksList}
        handleChangeTaskCheckBox={changeCheckedTasks}
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
