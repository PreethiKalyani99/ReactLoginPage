import React, { useEffect } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react"

function App() {
  const { isLoading, isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoading){
      return
    }
    if (isAuthenticated) {
      navigate('/profile')
    } 
    else {
      navigate('/')
    }
  }, [isLoading, isAuthenticated, navigate])

  return (
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  );
}

export default App;
