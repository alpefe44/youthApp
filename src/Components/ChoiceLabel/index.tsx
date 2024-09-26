//import liraries
import Checkbox from 'expo-checkbox';
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addSensitivity, removeSensitivity } from '../../Utils/UserSlice';


type Props = {
    products: Array<any>,
    setProducts: any,
    navig: any
}

const ChoiceLabel = ({ products, setProducts, navig }: Props) => {

    // const toggleSelect = (id) => {
    //     setProducts(prevProducts =>
    //         prevProducts.map(product =>
    //             product._id === id ? { ...product, select: true } : product
    //         )
    //     );
    // };

    // useEffect(() => {
    //     console.log(products)
    // }, [products])

    const { sensivities } = useSelector((state) => state.user)

    const dispatch = useDispatch()

    const handleCheckboxToggle = (id: string) => {
        if (sensivities.includes(id)) {
            dispatch(removeSensitivity(id));
        } else {
            dispatch(addSensitivity(id));
        }
    };

    return (
        <View style={{ padding: 16 }}>
            <FlatList
                data={products}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {

                    const isChecked = sensivities.includes(item._id);

                    return (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 8, marginTop: 27 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#000000' }}>{item.name}</Text>
                            <Checkbox
                                color={'#8B51FF'}
                                value={isChecked}
                                onValueChange={() => handleCheckboxToggle(item._id)}
                            />
                        </View>
                    )
                }}
            />
        </View>
    );
};


export default ChoiceLabel;
