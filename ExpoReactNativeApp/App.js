import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './core-components/TextComponent';
import PresentationalComponent from './core-components/styling/PresentationalComponent';
import FlexboxComp from './core-components/Flexbox';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Expo React Native App WD05 WD06</Text>
      <Cat />
      <PresentationalComponent myState="this is my state!" />
      <FlexboxComp />
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
});