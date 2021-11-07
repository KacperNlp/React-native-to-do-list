import React from 'react';
import { View, Text, CheckBox, StyleSheet } from 'react-native';
import { useState } from 'react/cjs/react.development';

const Task = ({task, taskKey, isChecked, number, handleChangeTaskCheckBox }) => {
    const [isSelected, setIsSelected] = useState(isChecked);

    return (
        <View style={style.taskContainer}>
            <Text>{number}. { task }</Text>
            <CheckBox
                value={isSelected}
                onValueChange={() => {
                    setIsSelected(!isChecked);
                    handleChangeTaskCheckBox(taskKey);
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    taskContainer: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    }
})


export default Task;