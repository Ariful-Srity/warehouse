import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, Name, Details, img, Price, Quantity, Supplier } = service;

    return (
        <div className="service  " >
            <Card style={{ width: '18rem' }} className="col-sm-12">
                <Card.Img variant="top" src={img} className="img-fluid" />
                <Card.Body>
                    <Card.Title className="text-primary text-center">{Name}</Card.Title>
                    <Card.Text className="text-bold text-">
                        {Details}
                    </Card.Text>
                    <h4 >$<span className="text-warning ps-2">{Price}</span></h4>
                    <h4 >Quantity:<span className="text-warning ps-2">{Quantity}</span></h4>
                    <h4 >Supplier:<span className="text-warning ps-2">{Supplier}</span></h4>

                    <Link to={`/inventory/${_id}`} className='btn btn-primary'> Stock Update</Link>


                </Card.Body>
            </Card>







        </div >
    );
};

export default Service;