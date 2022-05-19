import React, { useEffect, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Update.css';

const Update = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    const [updatedService, setUpdatedService] = useState({});

    const { Details, Name, Price, Quantity, Supplier, img, _id } = service;

    const url = `http://localhost:5000/services/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [updatedService]);

    let updatedQuantity = parseInt(Quantity);
    const handleDeliveredButton = () => {
        updatedQuantity = updatedQuantity - 1;
        const Quantity = updatedQuantity;
        const newUpdatedService = { Name, Price, Details, Quantity, Supplier, img };

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUpdatedService)
        })
            .then(res => res.json())
            .then(() => {
                setUpdatedService(newUpdatedService);
                alert('Item Updated!');
            })
    }
    const handleRestock = event => {
        event.preventDefault();
        const restockQuantity = event.target.quantity.value;
        if (restockQuantity) {
            const newQuantity = parseInt(Quantity) + parseInt(restockQuantity);
            if (1) {
                const Quantity = newQuantity;
                const newUpdatedService = { Name, Price, Details, Quantity, Supplier, img };

                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUpdatedService)
                })
                    .then(res => res.json())
                    .then(() => {
                        setUpdatedService(newUpdatedService);
                        alert('Items Restocked!');
                    })
            }
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Updating: {Name}</h2>
            <div className="d-flex flex-column flex-lg-row align-items-center gap-5">
                <Card style={{ width: '18rem' }}>
                    <Card.Img className='p-1' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='m-1'>Name: {Name}</Card.Title>
                        <Card.Text className='m-1'>Supplier: {Supplier}</Card.Text>
                        <Card.Text className='m-1'>Quantity: {Quantity}</Card.Text>
                        <Card.Text className='m-1'>Price: {Price}</Card.Text>

                        <Button onClick={handleDeliveredButton} variant="primary">Delivered</Button>
                    </Card.Body>
                </Card>
                <Form onSubmit={handleRestock}>
                    <h2>Restock</h2>
                    <Form.Group className="mb-3" controlId="formBasicQuantity">
                        <Form.Label>Restock Quantity</Form.Label>
                        <Form.Control onWheel={e => e.target.blur()} type="number" name="quantity" placeholder="Enter Quantity" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Restock Item
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Update;