import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendForm = ({ name, age, email }) => {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: ''
    })
    
    // const addFriend = () => {
    //     console.log(friend)
    //     axiosWithAuth().post('/friends', friend)
    //     .then(res => {
    //         console.log(res.data)
    //         // setFriend(res.data)
    //     })
    //     .catch(err => console.log(err))
    // }


    const handleChange = e => {
        const value = e.target.value;
        setFriend({ 
                ...friend,
                [e.target.name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('/friends', friend)
        .then(res => {
            console.log(friend)
            // setFriend(res.data)
        })
        .catch(err => console.log(err))
    }

    // useEffect(() => {
    //     addFriend();
    // }, [])


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={handleChange}
                />
                <input 
                    type='text' 
                    placeholder='Age'
                    name='age'
                    value={age}
                    onChange={handleChange}
                />
                <input 
                    type='email' 
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                />
                <button
                    className='btn add-friend-btn'>
                    Add a new friend
                </button>
            </form>
        </div>
    )
}

export default FriendForm;