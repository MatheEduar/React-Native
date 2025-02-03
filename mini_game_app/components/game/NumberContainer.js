import { View, Text, StyleSheet } from 'react-native'; 
import Colors from '../../constants/colors';

function NumberContainer({children}){
    return(
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
    )
}


export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.primaryBlack,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryWhiteDark,
    },
    numberText: {
        color: Colors.primaryBlack,
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    }
)