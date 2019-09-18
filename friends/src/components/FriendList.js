import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendForm from './FriendForm';

const FriendList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        getFriends();
    }, [])

    const getFriends = () => {
        axiosWithAuth().get('/friends')
        .then(res => {
            console.log(res.data)
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <div>
                <FriendForm friends={friends} />
            </div>
           {friends.map(friend => {
               return (
                   <div className='container' key={friend.id}>
                       <div className='friends'>
                            <h1>{friend.name}</h1>
                            <h2>{friend.age}</h2>
                            <h4>{friend.email}</h4>
                            <div>
                                <button className='btn edit-btn'>Edit</button>
                                <button className='btn delete-btn'>Delete</button>
                            </div>
                        </div>
                   </div>
               )
           })}
        </div>
    )
}

export default FriendList;