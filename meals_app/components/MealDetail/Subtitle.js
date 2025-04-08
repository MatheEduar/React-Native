import { View, Text, StyleSheet } from "react-native";

function Subtitle({children}){
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fdfdff',
        textAlign: 'center',   
    },
    subtitleContainer: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginTop: 4,
        marginBottom: 10,
        marginHorizontal: 12,
    },
});
