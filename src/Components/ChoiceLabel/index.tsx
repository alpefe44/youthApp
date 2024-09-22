//import liraries
import Checkbox from 'expo-checkbox';
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


type Props = {
    products: Array<any>,
    setProducts: any
}

const ChoiceLabel = ({ products, setProducts }: Props) => {

    const toggleSelect = (id) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === id ? { ...product, select: !product.select } : product
            )
        );
    };

    useEffect(() => {
        console.log(products)
    }, [products])
    return (
        <View style={{ flex: 1, padding: 16 }}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 8  , marginTop : 27 }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16 , color : '#000000' }}>{item.name}</Text>
                        {/* Checkbox */}
                        <Checkbox
                            color={'#8B51FF'}
                            value={item.select}
                            onValueChange={() => toggleSelect(item.id)}
                        />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default ChoiceLabel;
