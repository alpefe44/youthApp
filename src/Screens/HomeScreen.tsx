import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import ProductItem from '../Components/ProductItem';
import { useSelector } from 'react-redux';
import { getProducts } from '../api';



const HomeScreen = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [products, setProducts] = useState([])

    const getProductData = async () => {
        const data = await getProducts();

        if (data) {
            setProducts(data)
        }
    }


    useEffect(() => {
        getProductData()
    }, [])

    return (
        <View style={styles.container}>
            <View style={[{ marginTop: 30 }, styles.searchWrapper]}>
                <Ionicons name="search" size={24} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="İçerik Ara"
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                />
                <FontAwesome6 name="barcode" size={24} color="gray" style={{ right: 10 }} />
            </View>

            <View style={{ marginTop: 16, marginBottom: 13 }}>
                <Image source={require('../../assets/indirim.png')} style={{ height: 164, width: '100%' }}></Image>
            </View>

            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, justifyContent: 'space-between' }}>
                    <Text style={{ color: '#1B1B1B', fontFamily: 'Poppins-Medium', fontSize: 16 }}>Popüler Ürünler</Text>
                    <Text style={{ color: '#8B51FF', fontFamily: 'Poppins-Regular', fontSize: 12 }}>Tümünü Gör</Text>
                </View>
            </View>

            <FlatList
                data={products}
                horizontal
                renderItem={({ item }) => <ProductItem item={item}></ProductItem>}
            ></FlatList>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    searchWrapper: {
        alignSelf: 'center',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: '#F5F5F5',
        paddingLeft: 24
    },
    searchInput: {
        flex: 1,
        height: 44,
        fontSize: 16,
        paddingLeft: 10,
        backgroundColor: 'transparent'
    },
    icon: {
        position: 'absolute',
        left: 10,
    },
});


export default HomeScreen;
