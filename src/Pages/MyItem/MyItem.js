import React from 'react';
import { Button, Card } from 'react-bootstrap';

const MyItem = ({ handleDeleteButton, userStoredItem }) => {
    const { Name, Supplier, Quantity, Price, img, _id } = userStoredItem;
    return (
        <Card className='col col-lg-3 col-1' style={{ width: '18rem' }}>
            <Card.Img className='p-1' variant="top" src={img} />
            <Card.Body>
                <Card.Title className='m-1'>Name: {Name}</Card.Title>
                <Card.Text className='m-1'>Supplier: {Supplier}</Card.Text>
                <Card.Text className='m-1'>Quantity: {Quantity}</Card.Text>
                <Card.Text className='m-1'>Price: {Price}</Card.Text>

                <Button onClick={() => handleDeleteButton(_id)} variant="primary">Delete</Button>
            </Card.Body>
        </Card>
    );
};

export default MyItem;