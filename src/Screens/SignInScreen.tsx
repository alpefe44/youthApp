//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import RememberMeCheckbox from '../Components/RememberBox';
import LoginButton from '../Components/LoginButton';

// create a component
const SignInScreen = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={styles.container}>
            <View style={{ marginVertical: 15 }}>
                <Text style={{ color: '#1B1B1B', fontSize: 16, fontWeight: 'regular', paddingVertical: 10 }}>Email</Text>
                <TextInput onChangeText={(text) => setEmail(text)} placeholder='Mail adresini giriniz' style={styles.textInputStyle} value={email}></TextInput>
            </View>

            <View style={{ marginVertical: 15 }}>
                <Text style={{ color: '#1B1B1B', fontSize: 16, fontWeight: 'regular', paddingVertical: 10 }}>Password</Text>
                <TextInput onChangeText={(text) => setPassword(text)} placeholder='Şifrenizi giriniz' style={styles.textInputStyle} value={password}></TextInput>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingHorizontal: 20 }}>
                <RememberMeCheckbox></RememberMeCheckbox>
                <Text style={{ color: '#838383', fontWeight: 'regular', fontSize: 12 }}>Şifremi Unuttum</Text>
            </View>

            <View style={{ marginTop: 25, width: '80%' }}>
                <LoginButton disabled={false} isRegister={false} title='Giriş Yap'></LoginButton>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    textInputStyle: {
        width: 388,
        height: 48,
        borderWidth: 1,
        backgroundColor: '#FFFFF',
        borderColor: '#E6E6E6',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 13,
    }
});

//make this component available to the app
export default SignInScreen;
