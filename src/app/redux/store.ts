// "use client"
// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "../redux/cartslice";

// const store = configureStore({
//   reducer: {
//     auth: cartReducer,
//     cart: cartReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './authSlice';
// import cartReducer from './cartslice';

// export const store = configureStore({
//   reducer: {
//     auth: authReducer, // Auth slice
//     cart: cartReducer, // Cart slice
//   },
// });

// // Extract RootState type from the store
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;






import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "./cartslice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

// Extract RootState type from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Add a default export for store
export default store;
