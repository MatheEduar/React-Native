import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from './screens/CategoriesScreen';


import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen}/>
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
