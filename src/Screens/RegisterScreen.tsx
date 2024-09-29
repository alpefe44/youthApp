//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, Pressable } from 'react-native';
import RememberMeCheckbox from '../Components/RememberBox';
import LoginButton from '../Components/LoginButton';
import { getUser, RegisterRequest } from '../api';
import Feather from '@expo/vector-icons/Feather';
import { useDispatch } from 'react-redux';
import { login } from '../Utils/UserSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('screen');

const RegisterScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch()


    const handleRegister = async () => {

        const data = await RegisterRequest({ email: email, password: password })
        const getUserData = await getUser();

        if (data) {
            try {
                dispatch(login({ name: getUserData.username, sensivities: getUserData.sensitivities }))
                navigation.navigate('Choice')

            } catch (error) {
                console.error("Failed to save email", error);
            }
        }
    }


    return (
        <View style={styles.container}>
            <View style={{ width: '90%' }}>
                <Text style={{ color: '#1B1B1B', fontSize: 16, fontWeight: '500', paddingVertical: 8, fontFamily: 'Poppins-Regular' }}>Email</Text>
                <TextInput
                    placeholder='Mail adresini giriniz'
                    style={styles.textInputStyle}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={{ marginVertical: 16, width: '90%' }}>
                <Text style={{ color: '#1B1B1B', fontSize: 16, fontWeight: 'regular', paddingVertical: 10, fontFamily: 'Poppins-Regular' }}>Şifre</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        onChangeText={(text) => setPassword(text)}
                        placeholder='Şifrenizi giriniz'
                        style={[styles.textInputStyle]}
                        value={password}
                        secureTextEntry={!isPasswordVisible}
                    />
                    <Pressable style={{ position: 'absolute', right: 20 }} onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Feather
                            name={isPasswordVisible ? 'eye-off' : 'eye'}
                            size={24}
                            color='grey'
                            style={{ marginLeft: 10 }}
                        />
                    </Pressable>
                </View>
            </View>

            <View style={{ marginVertical: 16, width: '90%' }}>
                <Text style={{ color: '#1B1B1B', fontSize: 16, fontWeight: 'regular', paddingVertical: 10, fontFamily: 'Poppins-Regular' }}>Şifreni Onayla</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        onChangeText={(text) => setConfirmPassword(text)}
                        placeholder='Şifrenizi Onaylayın'
                        style={[styles.textInputStyle]}
                        value={confirmPassword}
                        secureTextEntry={!isPasswordVisible2}
                    />
                    <Pressable style={{ position: 'absolute', right: 20 }} onPress={() => setIsPasswordVisible2(!isPasswordVisible2)}>
                        <Feather
                            name={isPasswordVisible2 ? 'eye-off' : 'eye'}
                            size={24}
                            color='grey'
                            style={{ marginLeft: 10 }}
                        />
                    </Pressable>
                </View>
            </View>
            <View style={{ marginTop: 40, width: '90%' }}>
                <LoginButton onPress={handleRegister} disabled={password.length > 0 && confirmPassword.length > 0 && password === confirmPassword ? false : true} isRegister={false} title='Kayıt Ol' />
            </View>

            <View style={{ marginTop: 28, width: '90%', flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#D9D9D9' }}></View>
                <Text style={{ marginHorizontal: 10, fontFamily: 'Poppins-Regular', fontSize: 16 }}>ya da</Text>
                <View style={{ flex: 1, height: 1, backgroundColor: '#D9D9D9' }}></View>
            </View>

            <View style={{ marginTop: 28, width: '90%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Text style={{ textAlign: 'center', color: '#838383', fontFamily: 'Poppins-Regular', fontSize: 16 }}>Zaten hesabın var mı? </Text>
                <Pressable onPress={() => navigation.navigate('SignIn')}><Text style={{ color: '#8B51FF', fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>Giriş Yap</Text></Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    textInputStyle: {
        width: '100%',
        height: 48,
        borderWidth: 1,
        backgroundColor: '#FFFFF',
        borderColor: '#E6E6E6',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 13,

    }
});

export default RegisterScreen;
