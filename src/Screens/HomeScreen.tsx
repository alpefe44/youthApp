import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, ActivityIndicator, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import ProductItem from '../Components/ProductItem';
import { getProducts } from '../api'; // Assuming this is for initial data fetch
import Banner from '../../assets/indirim.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProductData = async (query = "") => {
        setLoading(true);
        let endpoint = query
            ? `https://squid-app-2-pvqvd.ondigitalocean.app/products/search?q=${query}`
            : "https://squid-app-2-pvqvd.ondigitalocean.app/products/list"; // Fetch all products if no query

        try {
            const getToken = await AsyncStorage.getItem('token')
            const response = await fetch(endpoint,
                {
                    headers: {
                        'Authorization': `Bearer ${getToken}`
                    }
                }
            );
            const data = await response.json();

            if (data) {
                setProducts(data);
                setLoading(false)
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    useEffect(() => {
        getProductData(searchQuery);
    }, [searchQuery]);

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
                <Pressable onPress={() => navigation.navigate('QrPage')}>
                    <FontAwesome6 name="barcode" size={24} color="gray" style={{ right: 10 }} />
                </Pressable>
            </View>

            <View style={{ marginTop: 16, marginBottom: 13 }}>
                <Banner style={{ alignSelf: 'center' }} />
            </View>

            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, justifyContent: 'space-between' }}>
                    <Text style={{ color: '#1B1B1B', fontFamily: 'Poppins-Medium', fontSize: 16 }}>Popüler Ürünler</Text>
                    <Text style={{ color: '#8B51FF', fontFamily: 'Poppins-Regular', fontSize: 12 }}>Tümünü Gör</Text>
                </View>
            </View>

            {loading ? (
                <ActivityIndicator size={'large'}></ActivityIndicator>
            ) : (
                <FlatList
                    data={products}
                    horizontal
                    keyExtractor={(item) => item._id.toString()}
                    renderItem={({ item }) => <ProductItem navigation={navigation} item={item} />}
                />
            )}
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
