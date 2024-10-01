import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Adicionar Objetivo'/>
        <Button title="ADD GOAL"/>
      </View>    
      <View>
        <Text>Lista de Objetivos</Text>  
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textInput: {
    borderWidth: 1,
    color: "#ccc",
    width: "80%",
    marginRight: 5,
    padding: 10,
  }
  
});
