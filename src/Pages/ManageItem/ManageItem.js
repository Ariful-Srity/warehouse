import React from 'react';

const ManageItem = ({ service, handleDelete }) => {
    const { Name, Supplier, _id } = service;
    return (
        <tr>
            <td>{Name}</td>
            <td>{Supplier}</td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-primary'>Delete</button></td>
        </tr>
    );
};

export default ManageItem;