import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  View, 
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  
  const [goalList, setGoalList] = useState([]);

  function addGoalHandler(enteredGoalText) {
      setGoalList((currentCourseGoals) =>
        [...currentCourseGoals,
        {text: enteredGoalText, key: Math.random().toString()},
        ]);
  };


  return (
    <View style={styles.appContainer}>

      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={goalList} renderItem={itemData => {
          return <GoalItem text={itemData.item.text}/>
          }
        }
        alwaysBounceVertical={false}
        /> 
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#bae6fd',
  },


  goalsContainer: {
    flex: 5
  }
  
});
