//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import BasketItem from '../Components/BasketItem';

// create a component
const BasketPage = () => {

    const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart)

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 24, color: '#1B1B1B' , alignSelf : 'center' }}>Sepetim</Text>
            <FlatList data={items} renderItem={({ item }) => <BasketItem item={item}></BasketItem>}></FlatList>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingTop: 16,
    },
});

//make this component available to the app
export default BasketPage;
