import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


type LoginVRegisterProps = {
    email: string,
    password: string
}

export const LoginRequest = async ({ email, password }: LoginVRegisterProps) => {
    try {
        const response = await axios.post('https://squid-app-2-pvqvd.ondigitalocean.app/auth/login', { username: email, password: password })

        if (response) {
            console.log("Giriş Başarılı")
            await AsyncStorage.setItem('token', response.data.token)
            return response.data
        }


    } catch (error) {
        console.log(error)
    }
}


export const RegisterRequest = async ({ email, password }: LoginVRegisterProps) => {
    try {
        const response = await axios.post('https://squid-app-2-pvqvd.ondigitalocean.app/auth/register', { username: email, password: password })

        if (response) {
            console.log("Kayıt Başarılı")
            return response.data
        }


    } catch (error) {
        console.log(error)
    }
}


export const getSensitivies = async () => {
    try {
        const response = await axios.get('https://squid-app-2-pvqvd.ondigitalocean.app/users/sensitivities')

        if (response) {
            console.log(response.data, "Döndü")
            return response.data
        }
    } catch (error) {
        console.log(error)
    }
}

export const getMySensitivies = async () => {
    try {
        const getToken = await AsyncStorage.getItem('token')
        const response = await axios.get('https://squid-app-2-pvqvd.ondigitalocean.app/users/my-sensitivities', {
            headers: {
                'Authorization': `Bearer ${getToken}`
            }
        })

        if (response) {
            console.log(response.data, "Döndü")
            console.log(getToken)
            return response.data
        }
    } catch (error) {
        console.log(error)
    }
}




export const getUser = async () => {
    try {
        const getToken = await AsyncStorage.getItem('token')
        const response = await axios.get('https://squid-app-2-pvqvd.ondigitalocean.app/users/me', {
            headers: {
                'Authorization': `Bearer ${getToken}`
            }
        })

        if (response) {
            console.log(response.data, "Döndü")
            return response.data
        }
    } catch (error) {
        console.log(error)
    }
}


export const addSensitivities = async (sensitivitiesArray) => {
    try {
        const getToken = await AsyncStorage.getItem('token');
        const response = await axios.post(
            "https://squid-app-2-pvqvd.ondigitalocean.app/users/sensitivities/add",
            {
                sensitivities: sensitivitiesArray  
            },
            {
                headers: {
                    Authorization: `Bearer ${getToken}`  
                }
            }
        );
        return response.data; 
    } catch (error) {
        console.error(error);
    }
};