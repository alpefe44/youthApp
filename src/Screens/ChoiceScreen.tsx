//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import Ionicons from '@expo/vector-icons/Ionicons';
import ChoiceLabel from '../Components/ChoiceLabel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { addSensitivities, getMySensitivies, getSensitivies } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { addSensitivity, removeSensitivity } from '../Utils/UserSlice';
import LoginButton from '../Components/LoginButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ssObj = {
    _id: string,
    name: string
}

const ChoiceScreen = ({ navigation }) => {


    const [products, setProducts] = useState([])

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState<ssObj[]>([]);
    const [allProducts, setAllProducts] = useState<ssObj[]>([]);


    const { name, sensivities } = useSelector((state) => state.user)



    const getSensivitiesItems = async () => {
        const data = await getSensitivies();

        if (data) {
            setAllProducts(data)
            setFilteredProducts(data);
        }
    }

    const getMySensivitiesItems = async () => {
        const data = await getMySensitivies();

        if (data) {
            setProducts(data)
        }
    }


    const saveSensivities = async (sensitivities) => {
        const data = await addSensitivities(sensitivities)

        if (data) {
            console.log("data")
            navigation.replace('Home2')
        } else {
            navigation.replace('Home2')
        }
    }

    const handleSearch = (text: string) => {
        setSearchQuery(text);
        if (text === "") {
            setFilteredProducts(allProducts);
        } else {
            const filtered = allProducts.filter(product =>
                product.name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };


    useEffect(() => {
        getMySensivitiesItems()
        getSensivitiesItems()

        const dd = async () => {
            const ddd = await AsyncStorage.getItem('token')
            console.log(ddd)
        }

        dd()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ gap: 35 }}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 24, color: '#000000', textAlign: 'center' }}>Tercihlerim</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#838383', textAlign: 'center' }}>Sana uygun ürün önerilerinde bulunabilmemiz için istemediğin ürün içeriklerini işaretle</Text>
            </View>

            <View style={[{ marginTop: 30 }, styles.searchWrapper]}>
                <Ionicons name="search" size={24} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="İçerik Ara"
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>

            <View>
                <ChoiceLabel navig={navigation} products={filteredProducts} setProducts={setProducts}></ChoiceLabel>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 37 }}>
                    <LoginButton disabled={false} isRegister={false} title='Devam Et' onPress={() => saveSensivities(sensivities)}></LoginButton>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 16
    },
    pickerWrapper: {
        alignSelf: 'center',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: '#F5F5F5',
        paddingLeft: 24
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
    picker: {
        flex: 1,
        height: 44,
    },
    icon: {
        position: 'absolute',
        left: 10,
    },
    pickerText: {
        color: '#838383',
        fontFamily: 'Poppins-Regular',
        fontSize: 12
    }
});

//make this component available to the app
export default ChoiceScreen;
