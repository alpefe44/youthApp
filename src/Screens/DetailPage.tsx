import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { getProductById } from '../api';
import { Double } from 'react-native/Libraries/Types/CodegenTypes';

import Eksi from '../../assets/eksi.svg'
import Arti from '../../assets/arti.svg'

type Product = {
    name: string,
    description: string,
    stock: number,
    price: Double,
    image: string,
    sensitivities: string[]
    barcode: string,
    categories: string[],
    brand: string,
    unitPrice: {
        unit: "Kg"
        price: number
    }

}


const DetailPage = ({ route }) => {

    const { productId } = route.params;
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchProductDetails = async () => {
        const data = await getProductById(productId)

        if (data) {
            setProduct(data)
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchProductDetails();
    }, [productId]);

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 53, marginBottom: 30 }}>
                <Image source={{ uri: product?.image }} resizeMode='contain' style={{ backgroundColor: '#F5F5F5', width: 270, height: 266, alignSelf: 'center' }}></Image>
            </View>

            <View style={{ backgroundColor: '#FFFFFF', borderRadius: 40, flex: 1 }}>
                <View style={{ marginTop: 36, marginLeft: 21 }}>
                    <Text style={{ color: '#8B51FF', fontFamily: 'Poppins-Medium', fontSize: 20 }}>{product?.brand}</Text>
                    <Text style={{ color: '#1B1B1B', fontFamily: 'Poppins-Medium', fontSize: 24 }}>{product?.name}</Text>
                    <Text style={{ color: '#8B51FF', fontFamily: 'Poppins-Medium', fontSize: 20 }}>{product?.unitPrice?.price} TL / {product?.unitPrice.unit}</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', color: '#838383', textAlign: 'center' }}>{product?.description}</Text>
                </View>
            </View>

            <View style={{ height: 106, backgroundColor: '#FFFFFF', marginTop: 3, borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <View>
                        <Text style={{ color: '#838383', fontSize: 12, fontFamily: 'Poppins-Medium' }}>Adet</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                            <Eksi width={32} height={42}></Eksi>
                            <Text style={{ color: '#000000', fontSize: 20, fontFamily: 'Poppins-Medium' }}>1</Text>
                            <Arti></Arti>
                        </View>
                    </View>
                    <Pressable style={{ height: 48, width: 233, backgroundColor: '#8B51FF', borderRadius: 12, paddingVertical: 4, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-Medium' }}>Sepete Ekle</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
});

export default DetailPage;
