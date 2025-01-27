// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface User {
//   email: string;
//   password: string;
//   name? : string;
// }

// interface AuthState {
//   user: User | null;
//   users: User[];
// }

// const initialState: AuthState = {
//   user: null,
//   users: [],
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login(state, action: PayloadAction<{ email: string; password: string }>) {
//       const { email, password } = action.payload;
//       const user = state.users.find((user) => user.email === email && user.password === password);
//       state.user = user || null;
//     },
//     logout(state) {
//       state.user = null;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface User {
//   email: string;
//   password: string;
//   name: string;
// }

// interface AuthState {
//   user: User | null;
//   users: User[];
// }

// const initialState: AuthState = {
//   user: null,
//   users: [],
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login(state, action: PayloadAction<{ email: string; password: string }>) {
//       const { email, password } = action.payload;
//       const user = state.users.find((user) => user.email === email && user.password === password);
//       state.user = user || null;
//     },
//     logout(state) {
//       state.user = null;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;





import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: {
    name: string;
    email: string;
  } | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ name: string; email: string }>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
