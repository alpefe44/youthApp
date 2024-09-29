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
  Home2: undefined,
  Choice: undefined
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
    </Stack.Navigator>
  );
}


function LoginStack({ navigation }) {
  return (
    <StackLogin.Navigator >
      <StackLogin.Screen options={{ headerShown: false }} name='Login' component={LoginScreen}></StackLogin.Screen>
      <StackLogin.Screen options={{
        headerLeft: () => {
          return <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
            <Image
              source={require('../../assets/Frame.png')}
              style={{ width: 24, height: 24, tintColor: '#8B51FF' }}
            />
          </TouchableOpacity>;
        }, headerBackTitleVisible: false, headerShadowVisible: false, headerShown: true, headerTitle: 'Giriş Yap', headerTitleAlign: 'center', headerTitleStyle: { color: '#000000', fontSize: 24, fontFamily: 'Poppins-Medium' }
      }} name='SignIn' component={SignInScreen}></StackLogin.Screen>
      <StackLogin.Screen options={{
        headerLeft: () => {
          return <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
            <Image
              source={require('../../assets/Frame.png')}
              style={{ width: 24, height: 24, tintColor: '#8B51FF' }}
            />
          </TouchableOpacity>;
        }, headerBackTitleVisible: false, headerShadowVisible: false, headerShown: true, headerTitle: 'Kayıt Ol', headerTitleAlign: 'center', headerTitleStyle: { color: '#000000', fontSize: 24, fontFamily: 'Poppins-Medium' }
      }} name='Register' component={RegisterScreen}></StackLogin.Screen>

      <Stack.Screen options={{ headerShown: false }} name='Choice' component={ChoiceScreen}></Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name='Home2' component={TabMain}></Stack.Screen>
    </StackLogin.Navigator >
  )
}


function TabMain() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{ headerShown: true, tabBarShowLabel: true, headerTitle: 'Ana Sayfa' , headerTitleAlign : 'center' , headerTitleStyle : {color : '#1B1B1B' , fontSize : 24 , fontFamily : 'Poppins-Medium'}}} name='Home' component={HomeScreen}></Tab.Screen>
      <Tab.Screen options={{ headerShown: false, tabBarShowLabel: true }} name='Choice' component={ChoiceScreen}></Tab.Screen>
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