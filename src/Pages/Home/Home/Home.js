import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../Images/bike1.jpg'
import banner2 from '../../Images/bike2.jpg'
import banner3 from '../../Images/bike3.jpg'
import banner4 from '../../Images/bike4.jpg'
import banner5 from '../../Images/bike5.jpg'
import banner6 from '../../Images/bike6.jpg'
import Services from '../../Services/Services/Services';


const Home = () => {
    return (
        <div>
            <div className="banner">
                <Carousel>
                    <Carousel.Item>
                        <img style={{ height: "400px" }}
                            className="d-block w-100 "
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-warning bg-dark rounded w-50">Twenty four hour  Services</h3>
                            <p className="text-info bg-dark w-50">Twenty four hour services are availavail.I ensure your best services</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "400px" }}
                            className="d-block w-100 height-100"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-warning bg-dark rounded w-50">Three free services offer </h3>
                            <p className="text-info bg-dark w-50">You can get three free service offer from my bike haven</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "400px" }}
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-warning bg-dark rounded w-50">You can buy old and classic bike from here</h3>
                            <p className="text-info bg-dark w-50">All catagories of bike are available here so no tenson</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "400px" }}
                            className="d-block w-100"
                            src={banner4}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-warning bg-dark rounded w-50">You can buy old and classic bike from here</h3>
                            <p className="text-info bg-dark w-50">All catagories of bike are available here so no tenson</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "400px" }}
                            className="d-block w-100"
                            src={banner5}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-warning bg-dark rounded w-50">You can buy old and classic bike from here</h3>
                            <p className="text-info bg-dark w-50">All catagories of bike are available here so no tenson</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "400px" }}
                            className="d-block w-100"
                            src={banner6}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-warning bg-dark rounded w-50">You can buy old and classic bike from here</h3>
                            <p className="text-info bg-dark w-50">All catagories of bike are available here so no tenson</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
            <Services></Services>
        </div>
    );
};

export default Home;