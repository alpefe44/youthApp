import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import RememberMeCheckbox from '../Components/RememberBox';
import LoginButton from '../Components/LoginButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginRequest } from '../api';

const SignInScreen = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [isChecked, setIsChecked] = useState(false)

    const handleLogin = async () => {

        const data = await LoginRequest({ email: email, password: password })

        if (data) {
            try {
                if (isChecked) {
                    await AsyncStorage.setItem("userEmail", email);
                } else {
                    console.log("Giriş Başarılı signinscreen")
                }
            } catch (error) {
                console.error("Failed to save email", error);
            }
        }
    };

    useEffect(() => {
        const getLocal = async () => {
            try {
                const em = await AsyncStorage.getItem("userEmail")

                if (em) {
                    setEmail(em)
                }

            } catch (error) {
                console.log(error)
            }
        }

        getLocal();

    }, [])

    return (
        <View style={styles.container}>
            <View style={{ marginVertical: 16, width: '90%' }}>
                <Text style={{ color: '#1B1B1B', fontSize: 16, fontWeight: 'regular', paddingVertical: 10 }}>Email</Text>
                <TextInput onChangeText={(text) => setEmail(text)} placeholder='Mail adresini giriniz' style={styles.textInputStyle} value={email}></TextInput>
            </View>

            <View style={{ width: '90%' }}>
                <Text style={{ color: '#1B1B1B', fontSize: 16, fontWeight: 'regular', paddingVertical: 10 }}>Password</Text>
                <TextInput onChangeText={(text) => setPassword(text)} placeholder='Şifrenizi giriniz' style={styles.textInputStyle} value={password}></TextInput>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%' }}>
                <RememberMeCheckbox isChecked={isChecked} setIsChecked={setIsChecked}></RememberMeCheckbox>
                <Text style={{ fontFamily: 'Poppins-Regular', color: '#838383', fontWeight: 'regular', fontSize: 12 }}>Şifremi Unuttum</Text>
            </View>

            <View style={{ marginTop: 40, width: '90%' }}>
                <LoginButton onPress={handleLogin} disabled={false} isRegister={false} title='Giriş Yap'></LoginButton>
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

export default SignInScreen;
