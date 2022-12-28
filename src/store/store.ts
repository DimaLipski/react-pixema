import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./useSlice/userSliсe"

export const store = configureStore({
    reducer: {
        user: userReducer
    },
});