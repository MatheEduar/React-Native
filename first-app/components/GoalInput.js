import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <Image 
                source={require('../assets/images/rat.png')}
                style={styles.image}
            />
            <TextInput 
             placeholder='Your Goal' 
              style={styles.textInput}
              onChangeText={goalInputHandler}
              value={enteredGoalText}
            ></TextInput>

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Add Goal" onPress={addGoalHandler} color={'#000'}/>
                </View>
                <View style={styles.button}>
                    <Button title="Cancel" onPress={props.onCancel} color={'#222'}/>
                </View>
            </View>

        </View>
        </Modal>
    );
}


export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#aaa',
    },
    textInput: {
        color: '#000',
        borderWidth: 1,
        borderColor: '#000',
        width: '100%',
        padding: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20 
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }

});