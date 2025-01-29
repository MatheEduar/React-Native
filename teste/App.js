import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  const [enteredNumber, setEnteredNumber] = useState('');

  function inputTextHandler(enteredText){
    setEnteredNumber(enteredText);
  }



  return (
    <View style={styles.container}>
      <Text>Olá</Text>
      <TextInput style={styles.inputText} onChangeText={inputTextHandler}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#000',
  }
});
