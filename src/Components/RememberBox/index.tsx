import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

type Props = {
    isChecked: boolean,
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function RememberMeCheckbox({ isChecked, setIsChecked }: Props) {

    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkboxContainer} onPress={handleCheck}>
                {isChecked && (
                    <Image
                        source={require('../../../assets/Checkbox.png')}
                        style={styles.checkboxImage}
                    />
                )}
            </TouchableOpacity>
            <Text style={styles.label}>Beni Hatırla</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    checkboxContainer: {
        width: 16,
        height: 16,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxImage: {
        width: 20,
        height: 20,
    },
    label: {
        marginLeft: 8,
        fontSize: 12,
        color: '#1B1B1B',
        fontFamily: 'Poppins-Regular',
        fontWeight : 'regular'
    },
});
