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