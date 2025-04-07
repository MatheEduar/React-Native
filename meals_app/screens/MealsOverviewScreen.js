import { useLayoutEffect } from "react"
import { StyleSheet, View, Text, FlatList } from "react-native"
// import { useRoute } from "@react-navigation/native"

import { MEALS, CATEGORIES } from '../data/dummy-data'

import MealItem from "../components/MealItem"


function MealsOverviewScreen({ route, navigation }){
    const categoryID = route.params.categoryID

    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryID) >= 0;
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryID).title;

        navigation.setOptions({
            title: categoryTitle
        });

    }, [categoryID, navigation]);


    



    function renderMealItem(itemData){
        const item = itemData.item;

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration, 
            complexity: item.complexity,
            affordability: item.affordability,
        }

        return (<MealItem {...mealItemProps}/>);
    }


    return (
    <View style={styles.container}>
        <FlatList 
            data={displayMeals} 
            keyExtractor={(item) => item.id} 
            renderItem={renderMealItem}
        />
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