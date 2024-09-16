//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import RememberMeCheckbox from '../Components/RememberBox';
import LoginButton from '../Components/LoginButton';

// create a component
const RegisterScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <View style={styles.container}>
            <View style={{ marginVertical: 15 }}>
                <Text style={{ color: '#1B1B1B', fontSize: 16, fontWeight: 'regular', paddingVertical: 10 }}>Email</Text>
                <TextInput
                    placeholder='Mail adresini giriniz'
                    style={styles.textInputStyle}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={{ marginVertical: 15 }}>
                <Text style={{ color: '#1B1B1B', fontSize: 16, fontWeight: 'regular', paddingVertical: 10 }}>Password</Text>
                <TextInput
                    placeholder='Şifrenizi giriniz'
                    style={styles.textInputStyle}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            {/* Şifre Onayla Kısmı */}
            <View style={{ marginVertical: 15 }}>
                <Text style={{ color: '#1B1B1B', fontSize: 16, fontWeight: 'regular', paddingVertical: 10 }}>Confirm Password</Text>
                <TextInput
                    placeholder='Şifrenizi onaylayın'
                    style={styles.textInputStyle}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />
            </View>

            <View style={{ marginTop: 25 }}>
                <LoginButton onPress={() => console.log("ss")} disabled={password.length > 0 && confirmPassword.length > 0 && password === confirmPassword ? false : true} isRegister={false} title='Kayıt Ol' />
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

export default RegisterScreen;
