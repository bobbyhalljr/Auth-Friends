import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ 
            username: '',
            password: '', 
     })


        const login = e => {
            e.preventDefault();
            axiosWithAuth().post('/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                // redirect to apps main page
                props.history.push('/friends')
            })
            .catch(err => console.log(err.response))
    }

    const handleChange = e => {
        setCredentials({ 
                ...credentials,
                [e.target.name]: e.target.value
        })
    }


    return (
        <div>
            <form onSubmit={login}>
                <input 
                    type='text' 
                    placeholder='Username'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input 
                    type='password' 
                    placeholder='Password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;