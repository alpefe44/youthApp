//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

type Props = {
    onPress: any
}

const OnboardNextButton = ({ onPress }: Props) => {
    return (
        <Pressable onPress={onPress} style={{ width: 388, height: 48, backgroundColor: '#8B51FF', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16, lineHeight: 24 }}>Devam Et</Text>
        </Pressable>
    );
};


export default OnboardNextButton;
