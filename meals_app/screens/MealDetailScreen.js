import { View, Text, Image, StyleSheet, ScrollView} from "react-native";
import { useContext, useLayoutEffect } from "react";

import MealDetail from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

import { MEALS } from "../data/dummy-data"
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({route, navigation}){
    const favoriteMealsCtx = useContext(FavoritesContext);

    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);


    function changeFavoriteStatusHandler(){
        if (mealIsFavorite) {
            favoriteMealsCtx.removeFavorite(mealId);
        } else {
            favoriteMealsCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                        icon={mealIsFavorite ? 'star' : 'star-outline'}
                        onPress={changeFavoriteStatusHandler}
                        color='white'
                        />
            }
        })
    }, [navigation, changeFavoriteStatusHandler]);


    

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