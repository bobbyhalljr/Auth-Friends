import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendList = () => {
    const [friends, setFriends] = useState({
        friends: []
    })

    // useEffect(() => {
    //     getData();
    // }, [])

    // const getData = () => {
    //     axiosWithAuth().get('/friends')
    //     .then(res => {
    //         console.log(res.data)
    //         setFriends({
    //             friends: res.data.map(friend => {
    //                 return (
    //                     <h1>{friend.name}</h1>
    //                 )
    //             })
    //         })
    //     })
    //     .catch(err => console.log(err))
    // }

    return (
        <div>
            <h1>Hello from friendList.js</h1>
        </div>
    )
}

export default FriendList;