import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth);

    const handleAddItem = event => {
        event.preventDefault();
        const Name = event.target.name.value;
        const Quantity = parseInt(event.target.quantity.value);
        const Price = event.target.price.value;
        const Details = event.target.details.value;
        const img = event.target.img.value;
        const Supplier = user?.displayName;
        const newItem = { Name, Quantity, Price, Details, img, Supplier };
        console.log(newItem)
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>Add New Item</h1>
            <Form onSubmit={handleAddItem}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Item Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" name="quantity" placeholder="Enter Quantity" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" placeholder="Enter Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDetails">
                    <Form.Label>Details</Form.Label>
                    <Form.Control type="text" name="details" placeholder="Enter Details" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUrl">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name='img' placeholder="Enter Image URL" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Item
                </Button>
            </Form>
        </div>
    );
};

export default AddItems;