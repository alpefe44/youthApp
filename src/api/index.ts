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

        if (response.status === 201) {
            await AsyncStorage.setItem('token', response.data.token)
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


export const getProducts = async () => {
    try {
        const getToken = await AsyncStorage.getItem('token');
        const response = await axios.get('https://squid-app-2-pvqvd.ondigitalocean.app/products/list', {
            headers: {
                Authorization: `Bearer ${getToken}`
            }
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}


export const getProductById = async (id: string) => {
    try {
        const getToken = await AsyncStorage.getItem('token');
        const response = await axios.post(`https://squid-app-2-pvqvd.ondigitalocean.app/products/${id}`, {}, {
            headers: {
                Authorization: `Bearer ${getToken}`
            }
        })

        if (response) {
            return response.data
        }

    } catch (error) {
        console.log(error)
    }
}


export const deleteAccount = async () => {
    try {
        const getToken = await AsyncStorage.getItem('token');

        if (getToken) {
            const response = await axios.post(`https://squid-app-2-pvqvd.ondigitalocean.app/users/delete`, {}, {
                headers: {
                    Authorization: `Bearer ${getToken}`
                }
            })

            if (response) {
                return response.data
            }
        }

    } catch (error) {
        console.log(error)
    }
}