import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axiosWithAuth().get('/friends')
        .then(res => {
            console.log(res.data)
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
           {friends.map(friend => {
               return (
                   <div className='friends' key={friend.id}>
                       <h1>{friend.name}</h1>
                        <h2>{friend.age}</h2>
                        <h4>{friend.email}</h4>
                   </div>
               )
           })}
        </div>
    )
}

export default FriendList;