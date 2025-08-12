import React, { useState } from 'react'
import '../../styles/Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleChange(e) {
        const value = e.target.value;
        if (e.target.name == 'email') {
            setEmail(value)
        }
        if (e.target.name == 'password') {
            setPassword(value)
        }



    }


    async function userRegister() {
        try {
            const response = await axios.post('http://localhost:3000/register', { email, password })
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='login-page'>
            <div className='login-container'>
                <h2>Welcome! Register</h2>
                <div className='inputs-container'>
                    <input type="text" name='email' value={email} placeholder='Enter email' onChange={(e) => { handleChange(e) }} />
                    <input type="text" name='password' value={password} placeholder='Enter name' onChange={(e) => { handleChange(e) }} />
                </div>
                <button onClick={userRegister}>Register</button>

            </div>

        </div>
    )
}

export default Register