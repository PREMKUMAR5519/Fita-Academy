import React, { useState } from 'react'
import '../../styles/Login.css'
import axios from 'axios'
import {jwtDecode} from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate()

    function handleChange(e) {
        setError('')
        const value = e.target.value;
        if (e.target.name == 'email') {
            setEmail(value)
        }
        if (e.target.name == 'password') {
            setPassword(value)
        }



    }


    async function userLogin() {
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password })
            // console.log(response.data)
            localStorage.setItem('token',response.data?.token)
            const extractedToken = jwtDecode(response.data?.token)
            // console.log(extractedToken)
            if(extractedToken?.role == 'patient'){
                navigate('/patient')
            }
              if(extractedToken?.role == 'doctor'){
                navigate('/doctor')
            }
        } catch (error) {
            setError(error.response.data.message)
        }
    }

    return (
        <div className='login-page'>
            <div className='login-container'>
                <h2>Welcome! Login</h2>
                <div className='inputs-container'>
                    <input type="text" name='email' value={email} placeholder='Enter email' onChange={(e) => { handleChange(e) }} />
                    <input type="text" name='password' value={password} placeholder='Enter name' onChange={(e) => { handleChange(e) }} />
                    <p className='error-text'>{error}</p>
                </div>
                <button onClick={userLogin}>Login</button>

            </div>

        </div>
    )
}

export default Login