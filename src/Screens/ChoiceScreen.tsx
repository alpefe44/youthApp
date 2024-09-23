//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import Ionicons from '@expo/vector-icons/Ionicons';
import ChoiceLabel from '../Components/ChoiceLabel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getMySensitivies, getSensitivies } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { addSensitivity, removeSensitivity } from '../Utils/UserSlice';

type ssObj = {
    _id: string,
    name: string
}

const ChoiceScreen = () => {


    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [products, setProducts] = useState([])

    const [allProducts, setAllProducts] = useState([])

    const { name, sensivities } = useSelector((state) => state.user)



    const getSensivitiesItems = async () => {
        const data = await getSensitivies();

        if (data) {
            setAllProducts(data)
        }
    }

    const getMySensivitiesItems = async () => {
        const data = await getMySensitivies();

        if (data) {
            setProducts(data)
        }
    }


    useEffect(() => {
        getMySensivitiesItems()
        getSensivitiesItems()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ gap: 35 }}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 24, color: '#000000', textAlign: 'center' }}>Tercihlerim</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#838383', textAlign: 'center' }}>Sana uygun ürün önerilerinde bulunabilmemiz için istemediğin ürün içeriklerini işaretle</Text>
            </View>

            <View style={[{ marginTop: 30 }, styles.pickerWrapper]}>
                <Ionicons name="search" size={24} color="gray" style={styles.icon} />
                <Picker
                    mode='dropdown'
                    style={styles.picker}
                    placeholder='İçerik Ara'
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    {/* <Picker.Item style={styles.pickerText} label="İçerik arayınız" value="" />
                    <Picker.Item style={styles.pickerText} label="Seçenek 1" value="option1" />
                    <Picker.Item style={styles.pickerText} label="Seçenek 2" value="option2" />
                    <Picker.Item style={styles.pickerText} label="Seçenek 3" value="option3" /> */}

                    {/* {
                        allProducts.map((item: ssObj) => {
                            return (
                                <Picker.Item key={item._id} style={styles.pickerText} label={item.name} value={item._id} />
                            )
                        })
                    } */}

                </Picker>
            </View>


            <View style={{ flex: 1 }}>
                <ChoiceLabel products={allProducts} setProducts={setProducts}></ChoiceLabel>
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
