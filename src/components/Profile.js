import React from "react"
import { useSelector } from "react-redux"

export default function Profile(){
    const { data } = useSelector(state => state.loginPage)
    console.log(data, "data")
    return (
        <>
            <h1>Welcome!</h1>
        </>
    )
}