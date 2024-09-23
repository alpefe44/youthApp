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
    },
});

export const { login , addSensitivity , removeSensitivity } = userSlice.actions;


export default userSlice.reducer;
