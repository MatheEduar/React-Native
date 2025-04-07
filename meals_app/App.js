import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from "expo-status-bar";

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: '#115'},
                headerTintColor: "white",
                contentStyle: {backgroundColor: "#226"},
              }}>
          <Stack.Screen 
            name="MealsCategories" 
            component={CategoriesScreen}
            options={{
                title: 'All Categories',   
              }
            }  
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen}
            // options={({route, navigation}) => {
            //   const categoryID = route.params.categoryID
            //   return {title: categoryID}

            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
