import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import Colors from "../constants/colors";

import PrimaryButton from "../components/ui/PrimaryButton";

function StartGameScreen({onPickNumber}){
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
                Alert.alert(
                    `Invalid Number: ${chosenNumber}`, 
                    'Number has to be a number between 1 and 99',
                    [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
                );
            return;
        }

        onPickNumber(chosenNumber);

    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>         
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen; 

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primaryBlackLight,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        width: 50,
        height: 50,
        fontSize: 28,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        color: '#fff',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },

});