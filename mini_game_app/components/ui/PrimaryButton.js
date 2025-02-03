import { Pressable, View, Text, StyleSheet, Button } from "react-native";
import Colors from "../../constants/colors";


function PrimaryButton({children, onPress}){

    function pressHandler(){
        console.log(children)
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
            style={({pressed}) => 
                pressed 
                ? [styles.buttonInnerContainer, styles.pressed] 
                : styles.buttonInnerContainer} 
            onPress={onPress} 
            android_ripple={{color: Colors.primaryBlack}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 38,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primaryBlackDark,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    pressed:{
        opacity: 0.75,

    }
})