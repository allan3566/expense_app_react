import React from "react";

import { useSelector, useDispatch } from 'react-redux';
import {

    selectUser,
} from './userSlice';

const User = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();


    return (
        <div>
            <h1>User</h1>
            <p>{user.user}</p>
        </div>
    );
}


export default User;

