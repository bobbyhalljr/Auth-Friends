import React from 'react';

const Login = () => {

    return (
        <div>
            <form>
                <input type='text' placeholder='Username'/>
                <input type='password' placeholder='Password'/>
            </form>
            <button>Submit</button>
        </div>
    )
}

export default Login;