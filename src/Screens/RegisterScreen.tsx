//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import RememberMeCheckbox from '../Components/RememberBox';
import LoginButton from '../Components/LoginButton';
import { RegisterRequest } from '../api';

const { width } = Dimensions.get('screen');

const RegisterScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleRegister = async () => {

        const data = await RegisterRequest({ email: email, password: password })

        if (data) {
            console.log("Kayıt Başarılı")

        } else {
            console.error("kayıt başarısız");
        }
    }


    return (
        <View style={styles.container}>
            <View style={{ width: '90%' }}>
                <Text style={{ color: '#1B1B1B', fontSize: 16, fontWeight: '500', paddingVertical: 8 }}>Email</Text>
                <TextInput
                    placeholder='Mail adresini giriniz'
                    style={styles.textInputStyle}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={{ marginTop: 16, width: '90%' }}>
                <Text style={{ color: '#1B1B1B', fontSize: 16, fontWeight: '400', paddingVertical: 8 }}>Password</Text>
                <TextInput
                    placeholder='Şifrenizi giriniz'
                    style={styles.textInputStyle}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <View style={{ marginTop: 16, width: '90%' }}>
                <Text style={{ color: '#1B1B1B', fontSize: 16, fontWeight: '400', paddingVertical: 8 }}>Confirm Password</Text>
                <TextInput
                    placeholder='Şifrenizi onaylayın'
                    style={styles.textInputStyle}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />
            </View>

            <View style={{ marginTop: 40, width: '90%' }}>
                <LoginButton onPress={handleRegister} disabled={password.length > 0 && confirmPassword.length > 0 && password === confirmPassword ? false : true} isRegister={false} title='Kayıt Ol' />
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
