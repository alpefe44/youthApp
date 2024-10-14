
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Eksi from '../../../assets/basketeksi.svg'
import Arti from '../../../assets/basketarti.svg'
import { useDispatch } from 'react-redux';

type Props = {
    item: any
}

const BasketItem = ({ item }: Props) => {


    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <View style={{ width: 80, height: 80, backgroundColor: '#C4C4C4' }}>
                <Image source={{ uri: item.image }} resizeMode='contain' style={{ flex: 1 }}></Image>
            </View>

            <View>
                <Text style={{ color: '#1B1B1B', fontFamily: 'Poppins-Medium', fontSize: 14 }}>{item.name}</Text>
                {/* <Text style={{ color: '#838383', fontFamily: 'Poppins-Regular', fontSize: 12 }}>{item?.unitPrice?.price} TL / {item?.unitPrice.unit}</Text> */}
                <Text style={{ color: '#FE3CB1', fontFamily: 'Poppins-Medium', fontSize: 16 }}>{item.price}</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, justifyContent: 'flex-end', alignSelf: 'flex-end', paddingBottom: 12 }}>
                <Eksi></Eksi>
                <Text>1</Text>
                <Arti></Arti>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        height: 104,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        padding: 12
    },
});

export default BasketItem;
