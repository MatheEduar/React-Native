import { View, Text, StyleSheet, Dimensions } from 'react-native'; 
import Colors from '../../constants/colors';

function NumberContainer({children}){
    return(
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
    )
}


export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.primaryBlack,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryWhiteDark,
    },
    numberText: {
        color: Colors.primaryBlack,
        fontSize:  deviceWidth < 380 ? 28 : 36,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
    },

    }
)