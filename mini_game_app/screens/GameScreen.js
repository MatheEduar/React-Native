import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons'

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

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
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    const { width, height } = useWindowDimensions();
    
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);


    useEffect(() => {
        if (currentGuess === userNumber){
            onGameOver(guessRounds.length);
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
        const newRndNumber = generateRandomBetween(
            minBoundary, 
            maxBoundary, 
            currentGuess
        );
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevGuessRounds) => 
            [newRndNumber, ...prevGuessRounds]
        )
    }

    const guessRoundsListLength = guessRounds.length;
    
    let content = <>
        <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add-outline" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
    </>

    if (width > 500) {
        content = <>
            <View>
                <View style={styles.buttonsContainerWide}>
                    <View>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>                    
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add-outline" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </View>
        </>
    }


    const marginTopDistance = height > 380 ? 15 : 100;

    return (
        <View style={[styles.screen, {marginTop: marginTopDistance,}]}>
            <Title>Oponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                {/* {guessRounds.map((guessRounds) => <Text  key={guessRounds}>{guessRounds}</Text>)} */}
                <FlatList 
                    data={guessRounds} 
                    renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>}
                    keyExtractor={(item) => item}    
                />
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
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    instructionText: {
        marginBottom: 12,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    },
});