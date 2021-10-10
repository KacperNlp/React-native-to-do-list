import React from 'react';
import { 
    View, 
    Button, 
    TextInput, 
    StyleSheet 
} from 'react-native';

const Header = (props) => {
    return (
        <View>
            <View style={style.buttonsContainer}>
                <Button title="Show tasks" color="#ed8a09" />
                <Button title="Add task" color="#53b53a" />
                <Button title="Remove task" color="#db3d45" />
            </View>
            <View style={style.inputStyles}>
                <TextInput placeholder="Your task.." />
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