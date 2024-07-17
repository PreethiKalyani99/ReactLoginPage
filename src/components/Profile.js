import React from "react"
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile(){
    const { user, logout } = useAuth0()
    return (
        <>
            <h1>{'Welcome ' + user?.nickname + '!'}</h1>
            <button onClick={() => logout()}>Log out</button>
        </>
    )
}