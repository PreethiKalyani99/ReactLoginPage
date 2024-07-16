import { configureStore } from "@reduxjs/toolkit";
import loginPageSlice from "./loginPageSlice";

export default configureStore({
    reducer: {
        loginPage: loginPageSlice
    }
})