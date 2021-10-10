import React, { useState } from 'react';
import { 
    View, 
    Button, 
    TextInput, 
    StyleSheet 
} from 'react-native';

const Header = ({ addNewTask }) => {
    const [currentInputValue, setCurrentInputValue] = useState('');

    const handleChangeInputValue = (value) => {
        setCurrentInputValue(value);
    }

    return (
        <View>
            <View style={style.buttonsContainer}>
                <Button title="Show tasks" color="#ed8a09" onPress={() => addNewTask(currentInputValue) } />
                <Button title="Add task" color="#53b53a" />
                <Button title="Remove task" color="#db3d45" />
            </View>
            <View style={style.inputStyles}>
                <TextInput 
                    placeholder="Your task.." 
                    value={currentInputValue} 
                    onChange={handleChangeInputValue}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },

    inputStyles: {
        marginTop: 20,
        paddingVertical: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#bdbdbd',
        borderWidth: 1,
    }
})

export default Header;