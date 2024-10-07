import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LoginButton from '../Components/LoginButton';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/logo.png')}></Image>
            <View style={{ marginTop: 100, width: '90%' }}>
                <LoginButton disabled={false} isRegister={false} title='Giriş Yap' onPress={() => navigation.replace('SignIn')}></LoginButton>
                <LoginButton disabled={false} isRegister title='Kayıt Ol' onPress={() => navigation.replace('Register')}></LoginButton>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    image: {
        width: 170,
        height: 132
    }
});

export default LoginScreen;
