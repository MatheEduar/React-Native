import { useState } from 'react';
import {
    StyleSheet,
    Button, 
    TextInput,
    View
} from 'react-native';


function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText.nativeEvent.text)
    };

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Adicionar Objetivo' onChange={goalInputHandler} value={enteredGoalText}/>
            <Button title="ADD GOAL" onPress={addGoalHandler}/>
        </View>
    );


};


export default GoalInput;

const styles = StyleSheet.create({
    
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#ccc"  
  },

  textInput: {
    borderWidth: 1,
    color: "black",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },


});



