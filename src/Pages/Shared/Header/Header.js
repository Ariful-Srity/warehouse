import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    if (user) {
        console.log('user', user);
    }
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
                <Container className="navbar">
                    <Navbar.Brand as={Link} to="Home" className="text-warning ">Ontors Bikes Heaven</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="Services" id='Services' className="text-white ">Services</Nav.Link>
                            <Nav.Link as={Link} to="Blogs" id='Blogs' className="text-white ">Blogs</Nav.Link>

                        </Nav>
                        <Nav>

                            {!user && <Nav.Link as={Link} eventKey={2} to="register">
                                Register
                            </Nav.Link>}
                        </Nav>

                        <Nav>

                            {
                                user ?
                                    <>
                                        <Nav.Link as={Link} to="/manageitems">
                                            Manage Items
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/addItem">
                                            Add Item
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="MyItems">
                                            My items
                                        </Nav.Link>

                                        {user && <div className="d-flex align-items-center text-white">
                                            <span>{user.displayName}</span>
                                            <button className='btn btn-link text-white text-decoration-none bg-dark ' onClick={handleSignOut}>Log out</button>
                                        </div>}
                                    </>
                                    :
                                    <Nav.Link className="text-white" as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>

                    </Navbar.Collapse>
                </Container>




            </Navbar>
        </>
    );
};

export default Header;