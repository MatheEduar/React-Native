import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton"

function generateRandomBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max - min )) + min;

    if (rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}


let minBoundary = 1;
let maxBoundary = 100;


function GameScreen({userNumber, onGameOver}){
    const initialGuess = generateRandomBetween(
        1, 
        2, 
        userNumber
    );
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    

    useEffect(() => {
        if (currentGuess === userNumber){
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])



    function nextGuessHandler(direction) { // direction => 'lower', 'greater'
        if (
            (direction === 'lower' && currentGuess < userNumber) || 
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [
                {text: 'Sorry...', style: 'cancel'}
            ]);
            return;
        }


        if (direction === 'lower'){
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }


    return (
        <View style={styles.screen}>
            <Title>Oponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
            </View>
            <View>
                {/* LOG ROUNDS */}
            </View>

        </View>
        
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 100,
        padding: 24,
    }
});