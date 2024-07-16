import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggle } from "../redux/loginPageSlice"
import { loginUser, signUp } from "../redux/loginPageThunk"
import { CLIENT_ID } from "../config/index"

export default function Login(){
    const { isAccountCreated } = useSelector(state => state.loginPage)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    return (
        <>
            <section className="vh-100" style={{backgroundColor: "#508bfc"}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
                                <div className="card-body p-5 text-center">

                                    <h3 className="mb-5">{isAccountCreated ? 'Sign Up' : 'Sign in'}</h3>

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

                                    <div className="form-check d-flex justify-content-start mb-4">
                                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                    <label className="form-check-label ms-2" htmlFor="form1Example3"> Remember password </label>
                                    </div>

                                    {isAccountCreated ? 
                                        <button 
                                            data-mdb-button-init 
                                            data-mdb-ripple-init 
                                            className="btn btn-primary btn-lg btn-block" 
                                            type="submit"
                                            onClick={() => {
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
                                        >Create</button> : 
                                        <button 
                                            data-mdb-button-init 
                                            data-mdb-ripple-init 
                                            className="btn btn-primary btn-lg btn-block" 
                                            type="submit"
                                            onClick={() => dispatch(loginUser())}
                                        >Login</button> 
                                    }
                                    {isAccountCreated ? <p>Already have an account? <button onClick={() => {
                                        dispatch(toggle())
                                    }}>Login</button></p> : <p>Don't have an account? <button onClick={() => {
                                        dispatch(toggle())
                                    }}>Sign up</button></p>}
                                    <p className="OR"><span>OR</span></p>

                                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-lg btn-block btn-primary" style={{backgroundColor: "#dd4b39"}}
                                    type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}