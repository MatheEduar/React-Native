import { View, Image, Text, StyleSheet } from "react-native"

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

import Colors from "../constants/colors";

function GameOverScreen(){
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!!!</Title>
            <View style={styles.imageContainer}>
                <Image 
                    source={require("../assets/images/success.png")} 
                    style={styles.image}/>
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>X</Text> rounds to guess the number{' '} 
                <Text style={styles.highlight}>Y</Text>. </Text>
            <PrimaryButton>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.primaryWhiteDark,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        color: Colors.primaryBlackLight,
        textAlign: 'center',
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primaryBlackDark,
    }

});