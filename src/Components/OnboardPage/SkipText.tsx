//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';


type Props = {
    onPress: any
}

export const SkipText = ({ onPress }: Props) => {
    return (
        <Pressable onPress={onPress} style={{ alignSelf: 'center', marginVertical: 24 }}>
            <Text style={{ color: '#8B51FF', fontSize: 16 }}>Atla</Text>
        </Pressable>
    );
};
