import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';

import Task from './Task';

const TasksList = ({tasks, handleChangeTaskCheckBox}) => {
    const renderTasks = tasks => (
        <View>
            <Task 
            task={tasks.item.task} 
            taskKey={tasks.item.key}
            isChecked={tasks.item.checked} 
            handleChangeTaskCheckBox={handleChangeTaskCheckBox}/>
        </View>
    )

    return (
        <View style={style.listContainer}>
            <FlatList
                data={tasks}
                renderItem={renderTasks}
            />
        </View>
    )
}

const style = StyleSheet.create({
    listContainer: {
        marginTop: 30,
        marginBottom: 30,
    }
})

export default TasksList;