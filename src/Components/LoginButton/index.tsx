import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
    title: string,
    onPress?: any,
    isRegister: boolean
    disabled: boolean
}

const LoginButton = ({ title, onPress, isRegister, disabled }: Props) => {
    return (
        <TouchableOpacity disabled={disabled} style={[styles.button, { backgroundColor: isRegister ? '#FFFFFF' : '#8B51FF', borderColor: '#8B51FF' }]} onPress={onPress}>
            <Text style={[styles.buttonText, { color: isRegister ? '#8B51FF' : '#FFFFFF' }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#8B51FF',
        width: '100%',
        height: 48,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        borderWidth: 1
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'medium',
    },
});

export default LoginButton;
