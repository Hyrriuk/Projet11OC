import {createSlice} from "@reduxjs/toolkit";

const signInSlice = createSlice({
    name: "signIn",
    initialState: {
        token: "",
    },
    reducers: {
        setSignIn: (state, action) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        setLogout: (state, action) => {
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

export const {setSignIn} = signInSlice.actions;
export const {setLogout} = signInSlice.actions;
export default signInSlice.reducer;
