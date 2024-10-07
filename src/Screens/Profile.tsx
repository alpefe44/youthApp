import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { logout } from '../Utils/UserSlice';
import { deleteAccount } from '../api';

const ProfileScreen = ({ navigation }) => {

    const { name } = useSelector((state) => state.user)
    console.log(name)
    const dispatch = useDispatch();

    const userLogOut = () => {
        if (name) {
            dispatch(logout())
            navigation.replace('Login')
        }
    }

    const deleteAcc = async () => {
        const response = await deleteAccount()

        if (response) {
            navigation.replace('Login')
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 24, color: '#000000', textAlign: 'center' }}>Hesabım</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 / 2 }}>
                <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium', marginBottom: 24, color: '#1B1B1B' }}>{name}</Text>
                <View style={{ backgroundColor: '#FFFFFF', width: '90%', alignSelf: 'center', borderRadius: 12, padding: 12, alignItems: 'flex-start', gap: 15 }}>
                    <Text style={{ color: '#8B51FF', fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>Genel</Text>
                    <Pressable style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }} onPress={() => deleteAcc()}>
                        <AntDesign name="deleteuser" size={20} color="#DC1010" />
                        <Text style={{ color: '#DC1010', fontFamily: 'Poppins-Medium', fontSize: 14 }}>Hesabı Sil</Text>
                    </Pressable>
                    <Pressable style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }} onPress={() => userLogOut()}>
                        <Feather name="log-out" size={20} color="#DC1010" />
                        <Text style={{ color: '#DC1010', fontFamily: 'Poppins-Medium', fontSize: 14 }}>Çıkış Yap</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 12,
        backgroundColor: '#F5F5F5'
    },
});

export default ProfileScreen;
