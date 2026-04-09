import {Link} from "react-router";
import {Nav, Navbar, Container } from "react-bootstrap";
import {useEffect, useState} from "react";
import WindowSeat1_ico_logo from "../assets/WindowSeat1_ico_logo.png"

import Cookies from "js-cookie";

const WsdNav = () => {
    const [cartCount, setCartCount] = useState(0);
    // NORMALLY I WOULD PUT A SEARCH IN HERE BUT THERE'S JUST NO TIME SO THAT'S GOLD PLATING FOR NOW

    useEffect(() => {
        const updateCart = () => {
            const cart = Cookies.get("shopping_cart");
            if (cart) {
                try {
                    const parsedCart = JSON.parse(cart);
                    setCartCount(parsedCart.length);
                } catch (err){
                    console.error("Count parse error", err)
                }
            } else {
                setCartCount(0);
            }
        };

        updateCart();
        const interval = setInterval(updateCart, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <Navbar className="wsd-navigation" expand="lg">
            <Container fluid className="nav-container">
                <Navbar.Brand as={Link} to="/">
                    <img className="wsd-logo" src={WindowSeat1_ico_logo} alt="Window Seat Dolls Logo"/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar-nav" className="custom-toggle">Menu
                </Navbar.Toggle>

                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/checkout">
                            Go to Checkout
                            {cartCount >0 && (
                                <span
                                    className="position-absolute top-0 start-100 translate-middle"
                                    style={{fontSize:"0.7rem"}}>
                                    {cartCount}
                                </span>
                            )}
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default WsdNav;