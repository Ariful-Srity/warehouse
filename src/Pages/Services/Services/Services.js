import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services] = useServices();
    return (
        <div>
            <h1 className="text-center  text-warning mb-5 mt-5">Inventory Items</h1>
            <div className="services">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;