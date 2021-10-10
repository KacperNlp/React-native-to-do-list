import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

const TasksList = ({tasks}) => {
    const renderTasks = tasks => <Text>{tasks.item.task}</Text>

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