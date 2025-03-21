import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors"

function Card({children}){
    return <View style={styles.card}>{children}</View>

}

export default Card;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 24,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primaryBlackLight,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },


});