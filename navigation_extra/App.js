import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from "@expo/vector-icons"

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
          headerStyle: {backgroundColor: "#15f"},
          headerTintColor: "white",
          headerTitleAlign: "center",
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: "#15f",
          // drawerStyle: {backgroundColor: "#b3b3cf"}
      }}>
        <Drawer.Screen name="Welcome" component={WelcomeScreen}
          options={{
              drawerLabel: 'Welcome Screen',
              drawerIcon: ({color, size}) => 
                (<Ionicons name="home" color={color} size={size}/>),
          }}
        />
        <Drawer.Screen name="User" component={UserScreen} options={{
          drawerIcon: ({color, size}) => 
                (<Ionicons name="person" color={color} size={size}/>),}}/>
      </Drawer.Navigator>
    </NavigationContainer>  
  
  );
}

