import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title({children}){
    return(
        <View style={styles.containerTitle}>
            <Text style={styles.title}>{children}</Text>
        </View>
        );
}

export default Title;

const styles = StyleSheet.create({
    containerTitle: {
        backgroundColor: Colors.primaryBlackLight,
        borderColor: Colors.primaryWhite,
        borderWidth: 2,
        borderRadius: 8,
        
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.primaryWhite,
        textAlign: 'center',
        padding: 10,
        
    }
})