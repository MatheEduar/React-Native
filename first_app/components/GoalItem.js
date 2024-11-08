import { StyleSheet, View, Text } from 'react-native';

function GoalItem(props) {
    return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText}>{props.text}</Text> 
    </View>
    );
    
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#0284c7",
  },

  goalItemText: {
    color: 'white'
  }


});