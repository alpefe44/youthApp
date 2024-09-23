import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice'; // userSlice'i içe aktar

// Store'u oluştur ve userReducer'ı ekle
export const store = configureStore({
    reducer: {
        user: userReducer, // Burada user slice'i store'a ekliyoruz
    },
});
