import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons"

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return (
    <Drawer.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#115'},
      headerTintColor: "white",
      sceneStyle: {backgroundColor: "#226"},
      drawerActiveTintColor: "white",
      drawerInactiveTintColor: "black",
      drawerActiveBackgroundColor: "#226",
      drawerStyle: {backgroundColor: "#b2b3cf"}
    }}>
      <Drawer.Screen 
        name="Categories" 
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({color, size}) => <Ionicons name="list" color={color} size={size}/>
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen}
        options={{
          title: "Favoritos",
          drawerIcon: ({color, size}) => <Ionicons name="star" color={color} size={size}/>
        }}/>
    </Drawer.Navigator>
  );
};


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
                  headerTitleAlign: 'center',
                  headerStyle: {backgroundColor: '#115'},
                  headerTintColor: "white",
                  contentStyle: {backgroundColor: "#226"},
                }}>
            <Stack.Screen 
              name="MealsCategories" 
              component={DrawerNavigator}
              options={{
                  title: 'All Categories',   
                  headerShown: false,
                }
              }  
            />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
            <Stack.Screen 
              name="MealDetail"
              component={MealDetailScreen}

            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
