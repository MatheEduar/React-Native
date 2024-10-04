import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  function goalInputHandler(enteredText) {
      console.log(enteredText.nativeEvent.text)
  };

  function addGoalHandler() {

  };


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Adicionar Objetivo' onChange={goalInputHandler}/>
        <Button title="ADD GOAL" onPress={addGoalHandler}/>
      </View>    
      <View style={styles.goalsContainer}>
        <Text>Lista de Objetivos.</Text>  
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#ccc"  
  },

  textInput: {
    borderWidth: 1,
    color: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },

  goalsContainer: {
    flex: 5
  }
  
});
