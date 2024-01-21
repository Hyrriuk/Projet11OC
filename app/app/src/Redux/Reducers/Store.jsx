import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "./ProfileUserReducer";
import Signinreducer from "./Signinreducer";

const store = configureStore({reducer: {signIn: Signinreducer, profile: profileReducer}});

export default store;
