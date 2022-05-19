import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useServices from '../../hooks/useServices';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [userStoredItems, setUserStoredItems] = useState([]);
    const [services] = useServices();

    useEffect(() => {
        const userItems = services?.filter(service => service.Supplier === user?.displayName);
        setUserStoredItems(userItems);
    }, [services, user?.displayName])

    const handleDeleteButton = _id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const url = `http://localhost:5000/services/${_id}`;
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const userRemainingItems = userStoredItems?.filter(userStoredItem => userStoredItem._id !== _id);
                        setUserStoredItems(userRemainingItems);
                        alert('Item Deleted');
                    }
                })
        }
    }
    return (
        <div className="container">
            <h1 className="text-center">My Items</h1>
            <div className="row gap-3 mx-auto">
                {
                    userStoredItems?.map(userStoredItem => <MyItem
                        key={userStoredItem._id}
                        userStoredItem={userStoredItem}
                        handleDeleteButton={handleDeleteButton}
                    ></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;