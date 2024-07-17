import { createAsyncThunk } from "@reduxjs/toolkit";
import { DOMAIN } from "../config/index.js";

export const signUp = createAsyncThunk("signUp", async (userInfo) => {
    try{
        const response = await fetch(`https://${DOMAIN}/dbconnections/signup`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            }
        )

        if (!response.ok) {
            throw new Error('Failed to create account')
        }
    
        const data = await response.json();
        return data
    }
    catch(error){
        console.log(error)
    }
})