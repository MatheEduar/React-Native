import { Pressable, View, Text, StyleSheet, Button } from "react-native";

function PrimaryButton(props){

    function pressHandler(){
        console.log(props.children)
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
            style={({pressed}) => 
                pressed 
                ? [styles.buttonInnerContainer, styles.pressed] 
                : styles.buttonInnerContainer} 
            onPress={pressHandler} 
            android_ripple={{color: '#556'}}>
                <Text style={styles.buttonText}>{props.children}</Text>
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
        backgroundColor: '#99a',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    pressed:{
        opacity: 0.75,

    }
})