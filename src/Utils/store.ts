import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import CartSlice from './CartSlice';


export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: CartSlice
    },
});
