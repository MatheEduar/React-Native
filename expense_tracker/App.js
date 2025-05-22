import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ManageExpense from './screens/ManageExpense';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';

import { GlobalStyles } from './constants/styles';
import { Ionicons } from "@expo/vector-icons"

const Stack = createNativeStackNavigator();
const BottomTaps = createBottomTabNavigator();

function ExpensesOverview() {
 return (
  <BottomTaps.Navigator screenOptions={{
      headerStyle: { backgroundColor: GlobalStyles.colors.primary},
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary},
      tabBarActiveTintColor: GlobalStyles.colors.primaryLight,
      tabBarInactiveTintColor: GlobalStyles.colors.primaryDark
    }
  }>
    <BottomTaps.Screen 
      name={"RecentExpenses"} 
      component={RecentExpenses}
      options={{
        title: "Recent Expenses",
        tabBarLabel: 'Recent',
        tabBarIcon: ({color, size}) => (
          <Ionicons name={"hourglass"} size={size} color={color}/>
        )
      }}
    />
    <BottomTaps.Screen 
      name={"AllExpenses"} 
      component={AllExpenses}
      options={{
        title: "All Expenses",
        tabBarLabel: 'All',
        tabBarIcon: ({color, size}) => (
          <Ionicons name={"calendar"} size={size} color={color}/>
        )
      }}
    />
  </BottomTaps.Navigator>
 )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name={"ExpensesOverview"} 
            component={ExpensesOverview}
            options={{headerShown: false}}
          />
          <Stack.Screen name={"ManageExpense"} component={ManageExpense}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
    
  );
}


