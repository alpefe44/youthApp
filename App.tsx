import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import OnboardingPage from './src/Components/OnboardPage';
import Router from './src/Navigation/Router';

import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './src/Utils/store';
import QrPage from './src/Screens/QrPage';
import DetailPage from './src/Screens/DetailPage';
let customFonts = {
  'Poppins-Black': require('./assets/Poppins-Black.ttf'),
  'Poppins-Light': require('./assets/Poppins-Light.ttf'),
  'Poppins-Medium': require('./assets/Poppins-Medium.ttf'),
  'Poppins-Regular': require('./assets/Poppins-Regular.ttf'),
  'Poppins-SemiBold': require('./assets/Poppins-SemiBold.ttf')
};

export default function App() {

  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <ActivityIndicator></ActivityIndicator>
  }
  return (
    <Provider store={store}>
      <Router></Router >
    </Provider>
  )
}
