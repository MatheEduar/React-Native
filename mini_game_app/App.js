import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={['#334', '#99a']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/Dices.png')}
        resizeMode="cover"
        imageStyle={styles.backgorundImage}
        style={styles.rootScreen}
      >
        <StartGameScreen />;
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
