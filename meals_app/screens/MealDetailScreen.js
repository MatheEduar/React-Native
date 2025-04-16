import { View, Text, Image, StyleSheet, ScrollView} from "react-native";
import { useLayoutEffect } from "react";

import MealDetail from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

import { MEALS } from "../data/dummy-data"

function MealDetailScreen({route, navigation}){

    function headerPressButtonHandler(){
        console.log("Pressed!");
    }

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                        onPress={headerPressButtonHandler}
                        color='white'
                        icon="star"
                        />
            }
        })
    }, [navigation, headerPressButtonHandler]);


    const mealId = route.params.mealId

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <ScrollView style={styles.mealDetail}>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetail 
                    duration={selectedMeal.duration} 
                    complexity={selectedMeal.complexity} 
                    affordability={selectedMeal.affordability}
            />

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>

                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
            
        </ScrollView>


    );
}


export default MealDetailScreen;

const styles = StyleSheet.create({
    mealDetail: {
        marginBottom: 16,
        
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fdfdff',
        textAlign: 'center',
        margin: 8,
    },
    listOuterContainer:{
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
        
    },

})