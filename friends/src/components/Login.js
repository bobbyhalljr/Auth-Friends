import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
    const [credentials, setCredentials] = useState({ 
        credentials: {
            username: '',
            password: '', 
        }
     })


        const login = e => {
            e.preventDefault();
            axiosWithAuth().post('/login/', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                // redirect to apps main page
                credentials.history.push('/friends')
            })
            .catch(err => console.log(err))
    }

    const handleChange = e => {
        setCredentials({ 
            credentials: {
                ...credentials,
                [e.target.name]: e.target.value
            }
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