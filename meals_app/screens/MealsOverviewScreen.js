import { StyleSheet, View, Text } from "react-native"
import { MEALS } from '../data/dummy-data'


function MealsOverviewScreen({ route }){
    const categoryID = route.params.categoryID

    return (
    <View style={styles.container}>
        <Text>Meals Overview - { categoryID }</Text>
    </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 16,
    }
});