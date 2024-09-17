import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingPage from '../Components/OnboardPage';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignInScreen from '../Screens/SignInScreen';
import RegisterScreen from '../Screens/RegisterScreen';


export type StackParams = {
  OnBoard1: undefined,
  OnBoard2: undefined,
  Home: undefined
}

export type LoginStackParams = {
  Login: undefined,
  Register: undefined,
  SignIn: undefined
}


const Stack = createNativeStackNavigator<StackParams>();
const StackLogin = createNativeStackNavigator<any>();

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
      <Stack.Screen name='Home' component={LoginStack}></Stack.Screen>
    </Stack.Navigator>
  );
}


function LoginStack() {
  return (
    <StackLogin.Navigator >
      <StackLogin.Screen options={{ headerShown: false }} name='Login' component={LoginScreen}></StackLogin.Screen>
      <StackLogin.Screen options={{ headerShown: true, headerTitle: 'Giriş Yap', headerTitleAlign: 'center', headerTitleStyle: { color: '#000000', fontWeight: 'medium', fontSize: 24 } }} name='SignIn' component={SignInScreen}></StackLogin.Screen>
      <StackLogin.Screen options={{ headerShown: true, headerTitle: 'Kayıt Ol', headerTitleAlign: 'center', headerTitleStyle: { color: '#000000', fontWeight: 'medium', fontSize: 24 } }} name='Register' component={RegisterScreen}></StackLogin.Screen>
    </StackLogin.Navigator >
  )
}


export default function Router() {
  return (
    <NavigationContainer>
      <OnBoardStack />
    </NavigationContainer>
  );
}