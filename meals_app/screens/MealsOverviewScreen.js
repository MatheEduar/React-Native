import { useLayoutEffect } from "react"

import { MEALS, CATEGORIES } from '../data/dummy-data'

import MealsList from "../components/MealsList/MealsList"


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


    return <MealsList items={displayMeals}/>
   
}

export default MealsOverviewScreen;

