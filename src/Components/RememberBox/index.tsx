import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function RememberMeCheckbox() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        setIsChecked(!isChecked); // Tıklandığında checkbox durumunu değiştir
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkboxContainer} onPress={handleCheck}>
                {isChecked && (
                    <Image
                        source={require('../../../assets/Checkbox.png')} // checkbox.png'yi ekliyoruz
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
        marginVertical: 10,
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
        fontWeight: 'regular'
    },
});
