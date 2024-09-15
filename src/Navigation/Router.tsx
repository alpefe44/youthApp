import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingPage from '../Components/OnboardPage';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';


export type StackParams = {
  OnBoard1: undefined,
  OnBoard2: undefined,
  Home: undefined
}


const Stack = createNativeStackNavigator<StackParams>();

function OnBoardStack() {
  return (
    <Stack.Navigator initialRouteName='OnBoard1' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoard1">
        {() => (
          <OnboardingPage
            imageUrl={require('../../assets/iphone12pro.png')}
            desc="Hassasiyetlerinin olduğu ürünleri filtreleyip, sana en uygun ürün önerilerinde bulunuyoruz."
            title="Senin İçin"
            isSkip={true}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="OnBoard2">
        {() => (
          <OnboardingPage
            imageUrl={require('../../assets/iphone2.png')}
            desc="Senin sağlığın bizim sağlığımız"
            title="Ne de olsa"
            isSkip={false}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}


export default function Router() {
  return (
    <NavigationContainer>
      <OnBoardStack />
    </NavigationContainer>
  );
}