import { View, Image, Text, StyleSheet, Dimensions } from "react-native"

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

import Colors from "../constants/colors";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame }){
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!!!</Title>
            <View style={styles.imageContainer}>
                <Image 
                    source={require("../assets/images/success.png")} 
                    style={styles.image}/>
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number{' '} 
                <Text style={styles.highlight}>{userNumber}</Text>. </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderRadius: deviceWidth < 380 ? 75 : 150,
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