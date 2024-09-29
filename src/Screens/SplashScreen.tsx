//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Logo from '../../assets/mainlogo.svg'

// create a component
const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('OnBoard1');
        }, 3000); //

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Logo width={239} height={186}></Logo>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
});

//make this component available to the app
export default SplashScreen;
