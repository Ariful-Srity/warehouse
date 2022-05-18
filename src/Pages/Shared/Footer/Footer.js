

import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div className="container1">

            <div className="information">

                <h5 className="text-white">Information</h5>
                <p className="text-white">About Our Inventories</p>
                <p className="text-white">Bike Heaven</p>
                <p className="text-white">Products Importe</p>
                <p className="text-white">Products Export</p>


            </div>
            <div className="helpful">

                <h5 className="text-white">Helpful Links</h5>
                <p className="text-white">Services</p>
                <p className="text-white">Support</p>
                <p className="text-white">Terms and Conditions</p>
                <p className="text-white">Privacy</p>
            </div>
            <div className="products">
                <h5 className="text-white">Products</h5>
                <p className="text-white">Bike Items</p>
                <p className="text-white">TVS Bike/RTR</p>

                <p className="text-white">Apachy</p>


            </div>


        </div>
    );
};

export default Footer;