import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);

  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if (userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if (gameIsOver && userNumber){
    screen = <GameOverScreen 
              userNumber={userNumber} 
              roundsNumber={guessRounds} 
              onStartNewGame={startNewGameHandler}
            />
  }

  return (
    <LinearGradient colors={[Colors.primaryBlackLight, Colors.primaryWhite]} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/Dices.png')}
        resizeMode="cover"
        imageStyle={styles.backgorundImage}
        style={styles.rootScreen}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen} 
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>

  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgorundImage: {
    opacity: 0.15
  }
});
