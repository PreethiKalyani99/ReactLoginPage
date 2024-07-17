import { createSlice } from "@reduxjs/toolkit";
import { signUp } from "./loginPageThunk";

export const loginPageSlice = createSlice({
    name: 'loginPage',
    initialState: {
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state) => {
            state.isLoading = true
        })
        .addCase(signUp.fulfilled, (state) => {
            state.isLoading = false
        })
    }
})

export const { toggle } = loginPageSlice.actions
export default loginPageSlice.reducer