//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getProductById } from '../api';

// create a component
const DetailPage = ({ route }) => {

    const { productId } = route.params;
    const [product, setProduct] = useState(null);
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
            <Text>MyComponent</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default DetailPage;
