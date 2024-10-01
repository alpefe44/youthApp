import { CameraView, CameraType, useCameraPermissions, BarcodeScanningResult } from 'expo-camera';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { getProducts } from '../api';

export default function QrPage({ navigation }) {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [result, setResult] = useState<BarcodeScanningResult | null>(null);

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Regular' }}>We need your permission to show the camera.</Text>
                <Pressable style={{ backgroundColor: '#8B51FF', borderRadius: 12, width: 150, alignItems: 'center', justifyContent: 'center', padding: 12, marginTop: 6 }} onPress={requestPermission}>
                    <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Regular', color: 'white' }}>Grant Permission</Text>
                </Pressable>
            </View>
        );
    }

    async function handleBarcodeScanned(scanningResult: BarcodeScanningResult) {
        const barcode = scanningResult.data; // Barkod numarası
        console.log('Taranan barkod:', barcode);
        setResult(scanningResult);

        try {
            const products = await getProducts();

            if (products && products.length > 0) {
                const product = products.find(p => p.barcode === barcode);

                if (product) {
                    const productId = product._id;
                    navigation.navigate('DetailPage', { productId });
                } else {
                    console.error('Bu barkod numarası ile ürün bulunamadı');
                }
            } else {
                console.error('Ürün listesi boş veya ürünler getirilemedi');
            }

        } catch (error) {
            console.error('Ürünler getirilirken bir hata oluştu:', error);
        }
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#515153', 'transparent']}
                style={styles.background}
            />
            <View style={{ position: 'absolute', top: 130 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 24, fontFamily: 'Poppins-Medium', textAlign: 'center' }}>Lütfen aramak istediğiniz ürünün barkodunu okutunuz.</Text>
            </View>

            <Pressable onPress={() => navigation.goBack()} style={{ width: 32, height: 32, position: 'absolute', left: 18, top: 50 }}>
                <Image source={require('../../assets/Frame.png')}></Image>
            </Pressable>

            <View>
                <View style={{ width: 331, height: 147, alignSelf: 'center', justifyContent: 'center' }}>
                    <CameraView onBarcodeScanned={handleBarcodeScanned}
                        barcodeScannerSettings={{ barcodeTypes: ["aztec", "codabar", "code128", "code39", "code93", "datamatrix", "ean13", "ean8", "itf14", "pdf417", "qr", "upc_a", "upc_e"] }} style={styles.camera} facing={facing}>
                    </CameraView>
                    <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'space-between', width: '110%', alignSelf: 'center' }}>
                        <View style={{ gap: 15 }}>
                            <View>
                                <Image source={require('../../assets/line1.png')}></Image>
                                <Image source={require('../../assets/line2.png')}></Image>
                            </View>

                            <View>
                                <Image source={require('../../assets/line2.png')}></Image>
                                <Image source={require('../../assets/line1.png')}></Image>
                            </View>
                        </View>

                        <View style={{ transform: [{ rotate: '180deg' }], gap: 15 }}>
                            <View>
                                <Image source={require('../../assets/line1.png')}></Image>
                                <Image source={require('../../assets/line2.png')}></Image>
                            </View>

                            <View>
                                <Image source={require('../../assets/line2.png')}></Image>
                                <Image source={require('../../assets/line1.png')}></Image>
                            </View>
                        </View>
                    </View>
                </View>


            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});
