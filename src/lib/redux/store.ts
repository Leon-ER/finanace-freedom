import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/lib/redux/userSlice"

const store = configureStore({
    reducer:{
        user: userReducer,
    },
});

export default store;