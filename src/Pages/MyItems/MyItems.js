import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>This is my items page</h1>
        </div>
    );
};

export default MyItems;