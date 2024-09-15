import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

import { styles } from './Style';
import OnboardNextButton from './OnboardNextButton';
import { SkipText } from './SkipText';
import { useNavigation } from '@react-navigation/native';
import { StackParams } from '../../Navigation/Router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
    imageUrl: any,
    title: string,
    desc: string,
    isSkip: boolean,
}

const OnboardingPage = ({ imageUrl, title, desc, isSkip }: Props) => {

    const { navigate } = useNavigation<NativeStackNavigationProp<StackParams>>()

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <ImageBackground source={require('../../../assets/morarka.png')} style={styles.topBg}>
                <Image style={styles.phoneImage} source={imageUrl}></Image>
            </ImageBackground>

            <View style={styles.secondMainView}>
                <Text style={{ color: '#8B51FF', fontWeight: '600', fontSize: 32, lineHeight: 48, marginTop: 38 }}>{title}</Text>
                <Text style={{ color: '#A4A4A4', fontWeight: '600', fontSize: isSkip ? 24 : 32, lineHeight: 36, textAlign: 'center', marginTop: isSkip ? 0 : 20 }}>{desc}</Text>
            </View>

            <View style={{ marginTop: 55, height: 216 }}>
                <OnboardNextButton onPress={() => {
                    if (isSkip) {
                        navigate('OnBoard2');
                    } else {
                        navigate('Home');
                    }
                }}></OnboardNextButton>
                {
                    isSkip && <SkipText onPress={() => navigate('Home')}></SkipText>
                }
            </View>
        </View >
    );
};


export default OnboardingPage;
