import { createAsyncThunk } from "@reduxjs/toolkit";
import { DOMAIN, CLIENT_ID } from "../config/index.js";

export const loginUser = createAsyncThunk("loginUser", async () => {
    console.log(DOMAIN, CLIENT_ID, "info")
    try{
        const response = await fetch(`https://${DOMAIN}/authorize?response_type=code&client_id=${CLIENT_ID}&connection=CONNECTION&redirect_uri=http://localhost:3000&state=statevaluedskafjlkfj`,
            {
                method: 'GET'
            }
        )

        if (!response.ok) {
            throw new Error('Failed to Login')
        }
    
        return await response.json()
    }
    catch(error){
        console.log(error)
    }
})

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
    
        return await response.json()
    }
    catch(error){
        console.log(error)
    }
})