import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    isAuth: false,
}

const userSlise = createSlice({
    name: "name",
    initialState,
    reducers: {},
});

export default userSlise.reducer;