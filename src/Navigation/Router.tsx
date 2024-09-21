import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingPage from '../Components/OnboardPage';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignInScreen from '../Screens/SignInScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChoiceScreen from '../Screens/ChoiceScreen';

import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';


export type StackParams = {
  OnBoard1: undefined,
  OnBoard2: undefined,
  Home: undefined,
  Tab: undefined
}

export type LoginStackParams = {
  Login: undefined,
  Register: undefined,
  SignIn: undefined
}


const Stack = createNativeStackNavigator<StackParams>();
const StackLogin = createNativeStackNavigator<any>();

const Tab = createBottomTabNavigator<any>();

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
      <Stack.Screen name='Tab' component={TabMain}></Stack.Screen>
    </Stack.Navigator>
  );
}


function LoginStack() {
  return (
    <StackLogin.Navigator >
      <StackLogin.Screen options={{ headerShown: false }} name='Login' component={LoginScreen}></StackLogin.Screen>
      <StackLogin.Screen options={{
        headerLeft: () => {
          return <TouchableOpacity onPress={() => { } }>
            <Image
              source={require('../../assets/Frame.png')} // Kendi ikonunuz
              style={{ width: 24, height: 24, tintColor: '#8B51FF' }} // tintColor parametresi burada uygulanıyor
            />
          </TouchableOpacity>;
        }, headerBackTitleVisible: false, headerShadowVisible: false, headerShown: true, headerTitle: 'Giriş Yap', headerTitleAlign: 'center', headerTitleStyle: { color: '#000000', fontSize: 24, fontFamily: 'Poppins-Medium' }
      }} name='SignIn' component={SignInScreen}></StackLogin.Screen>
      <StackLogin.Screen options={{ headerBackTitleVisible: false, headerShadowVisible: false, headerShown: true, headerTitle: 'Kayıt Ol', headerTitleAlign: 'center', headerTitleStyle: { color: '#000000', fontSize: 24, fontFamily: 'Poppins-Medium' } }} name='Register' component={RegisterScreen}></StackLogin.Screen>
    </StackLogin.Navigator >
  )
}


function TabMain() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Choice' component={ChoiceScreen}></Tab.Screen>
    </Tab.Navigator>
  )
}


export default function Router() {
  return (
    <NavigationContainer>
      <OnBoardStack />
    </NavigationContainer>
  );
}