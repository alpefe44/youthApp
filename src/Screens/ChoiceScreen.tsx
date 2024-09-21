//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const ChoiceScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{  gap : 35 }}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 24, color: '#000000', textAlign: 'center' }}>Tercihlerim</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#838383', textAlign: 'center' }}>Sana uygun ürün önerilerinde bulunabilmemiz için istemediğin ürün içeriklerini işaretle</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'

    },
});

//make this component available to the app
export default ChoiceScreen;
