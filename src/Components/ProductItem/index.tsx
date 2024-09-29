//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { getSensitivies } from '../../api';

type Props = {
    item: any
}

const ProductItem = ({ item }: Props) => {


    const [sens, setSens] = useState([])

    const { sensivities } = useSelector((state) => state.user)



    const getSens = async () => {
        const data = await getSensitivies();

        if (data && item.sensitivities) {
            const matchingSensitivities = item.sensitivities.filter((sensitivity: string) =>
                sensivities.includes(sensitivity)
            );
            const fsens = data.filter((d: any) => {
                return matchingSensitivities.includes(d._id);
            });

            setSens(fsens);
            console.log(fsens, "fsens");
        }
    };



    useEffect(() => {
        getSens()
    }, [sensivities])

    return (
        <Pressable style={styles.container}>
            <View style={{ backgroundColor: '#DC1010', padding: 3, borderRadius: 8, position: 'absolute', top: 12, right: 10, alignItems: 'center' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 10, fontFamily: 'Poppins-Regular' }}>{
                    sens.length > 1 ? `${sens[0]?.name} + ${sens.length}` : sens[0]?.name
                }</Text>
            </View>
            <Image source={{ uri: item.image }} style={{ width: 109, height: 119, marginTop: 25 }}></Image>
            <View>
                <Text style={{ color: '#181725', fontFamily: 'Poppins-Medium', fontSize: 10 }}>{item.name}</Text>
                <Text style={{
                    color: '#FE3CB1', fontFamily: 'Poppins-Medium', fontSize: 14,
                    textShadowOffset: { width: 2, height: 4 },
                    textShadowColor: '#666666',
                    textShadowRadius: 12,
                    elevation: 1,
                }}>{item.price} TL</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        height: 223,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        marginHorizontal: 16,
        padding: 8
    },
});

export default ProductItem;
