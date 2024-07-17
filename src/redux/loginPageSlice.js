import { createSlice } from "@reduxjs/toolkit";
import { signUp } from "./loginPageThunk";

export const loginPageSlice = createSlice({
    name: 'loginPage',
    initialState: {
        isAccountCreated: false,
        isLoading: false,
        data: null
    },
    reducers: {
        toggle:  (state) => {
            state.isAccountCreated = !state.isAccountCreated
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state) => {
            state.isLoading = true
        })
        .addCase(signUp.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
    }
})

export const { toggle } = loginPageSlice.actions
export default loginPageSlice.reducer