import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { signUp } from "../redux/loginPageThunk"
import { CLIENT_ID } from "../config/index"
import { useAuth0 } from "@auth0/auth0-react";

export default function SignUp(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { loginWithRedirect } = useAuth0()

    const dispatch = useDispatch()

    return (
        <>
            <section className="vh-100" style={{backgroundColor: "#508bfc"}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
                                <div className="card-body p-5 text-center">

                                    <h3 className="mb-5">Sign Up</h3>

                                    <div data-mdb-input-init className="form-outline mb-4">
                                    <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                                    <input 
                                        type="email" 
                                        id="typeEmailX-2" 
                                        className="form-control form-control-lg" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    </div>

                                    <div data-mdb-input-init className="form-outline mb-4">
                                    <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                                    <input 
                                        type="password" 
                                        id="typePasswordX-2" 
                                        className="form-control form-control-lg" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    </div>

                                    <button 
                                        data-mdb-button-init 
                                        data-mdb-ripple-init 
                                        className="btn btn-primary btn-lg btn-block mb-4" 
                                        type="submit"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            dispatch(signUp({
                                                client_id:  CLIENT_ID,
                                                email: email,
                                                password: password,
                                                connection: "Username-Password-Authentication",
                                                username: email.split('@')[0]
                                            }))
                                            setEmail('')
                                            setPassword('')
                                        }}
                                    >Create</button>
                                   
                                   <p>Already have an account? <button className="btn btn-danger btn-md btn-block" onClick={(e) => {
                                        e.preventDefault()
                                        console.log("before")
                                        loginWithRedirect()
                                        console.log("after")
                                    }}>Sign In</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}