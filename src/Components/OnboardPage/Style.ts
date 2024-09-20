import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    topBg: {
        width: 428,
        height: 503,
        backgroundColor: '#8B51FF2E',
        shadowColor: '#000', // Gölgenin rengi
        shadowOffset: { width: 0, height: 2 }, // Gölgenin x ve y yönünde kayması
        shadowOpacity: 0.8, // Gölgenin opaklığı
        shadowRadius: 3, // Gölgenin yayılması
        elevation : 5
    },
    phoneImage: {
        top: 113,
        left: 60,
        gap: 0,
        opacity: 1
    },
    secondMainView: {
        justifyContent: 'center',
        alignItems: 'center',
        width : '90%'
    }
})