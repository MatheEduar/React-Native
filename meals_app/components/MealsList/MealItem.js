import { View, Pressable, Text, Image, StyleSheet } from "react-native"

import { useNavigation } from "@react-navigation/native";

import MealDetail from "../MealDetails";

function MealItem({id, title, imageUrl, duration, complexity, affordability}){
    const navigation = useNavigation();

    function pressHandler(){
        navigation.navigate("MealDetail", {
            mealId: id,
        });
    }


    return (
        <View style={styles.mealItem}>
            <Pressable
                onPress={pressHandler}
                android_ripple={{color: '#ccf'}}
                style={({pressed}) => pressed ? styles.buttonPressed : null}
            >
                <View>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetail 
                    duration={duration} 
                    complexity={complexity} 
                    affordability={affordability}
                />

            </Pressable>
        </View>
    );
}



export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#337',
        elevation: 4,
    },
    buttonPressed: {
        opacity: 0.9
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#fff",
        fontSize: 18,
        margin: 8,
    },
    

});