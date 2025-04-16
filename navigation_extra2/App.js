import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { Ionicons } from "@expo/vector-icons"

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const BottomTap = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <BottomTap.Navigator screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: {backgroundColor: "#04c"},
        tabBarActiveBackgroundColor: "#ccf",
        tabBarActiveTintColor: "#04c"
      }}>
        <BottomTap.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({color, size}) => <Ionicons name="home" color={color} size={size}/>
          }}  
        />
        <BottomTap.Screen 
          name="User" 
          component={UserScreen}
          options={{
            tabBarIcon: ({color, size}) => <Ionicons name="person" color={color} size={size}/>
          }}  />
      </BottomTap.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
