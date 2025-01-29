import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";

function GameScreen(){
    return <Text>Olá</Text>;
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 100,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.primaryWhite,
        textAlign: 'center',
        
    },
    
})
