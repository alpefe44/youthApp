import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';


interface User {
    name: string,
    sensivities: Array<any>
}


const initialState: User = {
    name: '',
    sensivities: []
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            const { name, sensivities } = action.payload;
            state.name = name;
            state.sensivities = sensivities;
        },
        addSensitivity: (state, action) => {
            state.sensivities.push(action.payload);
        },
        removeSensitivity: (state, action) => {
            state.sensivities = state.sensivities.filter(id => id !== action.payload);
        },
        logout: (state) => {
            state.name = '';
            state.sensivities = [];
            AsyncStorage.removeItem('token').catch(error => {
                console.error("Token silme hatası:", error);
            });
        },
    },
});

export const { login, addSensitivity, removeSensitivity, logout } = userSlice.actions;


export default userSlice.reducer;
