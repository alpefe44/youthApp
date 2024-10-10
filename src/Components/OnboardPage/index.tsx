import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

import { styles } from './Style';
import OnboardNextButton from './OnboardNextButton';
import { SkipText } from './SkipText';
import { useNavigation } from '@react-navigation/native';
import { StackParams } from '../../Navigation/Router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Logo1 from '../../../assets/ilkip.svg'
import Logo2 from '../../../assets/ikinciip.svg'

const logos = {
    logo1: Logo1,
    logo2: Logo2,
};

type Props = {
    imageUrl: any,
    title: string,
    desc: string,
    isSkip: boolean,
}


export const images = {
    'iphone12pro.png': require('../../../assets/iphone12pro.png'),
    'iphone2.png': require('../../../assets/iphone2.png'),
  };
  

const OnboardingPage = ({ imageUrl, title, desc, isSkip }: Props) => {

    const { navigate } = useNavigation<NativeStackNavigationProp<StackParams>>()


    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
            <ImageBackground source={require('../../../assets/morarka.png')} style={styles.topBg}>
                <Image source={images[imageUrl]} style={styles.phoneImage}></Image>
            </ImageBackground>

            <View style={styles.secondMainView}>
                <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#8B51FF', fontWeight: '600', fontSize: 32, lineHeight: 48, marginTop: 38 }}>{title}</Text>
                <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#A4A4A4', fontWeight: '600', fontSize: 24, lineHeight: 36, textAlign: 'center', marginTop: isSkip ? 0 : 40 }}>{desc}</Text>
            </View>

            <View style={{ marginTop: 40, width: '80%', alignItems: 'center', marginHorizontal: 15 }}>
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
