import {Link} from "react-router";
import {Nav, Navbar, Container } from "react-bootstrap";
import WindowSeat1_ico_logo from "../assets/WindowSeat1_ico_logo.png"


const WsdNav = () => {
    // NORMALLY I WOULD PUT A SEARCH IN HERE BUT THERE'S JUST NO TIME SO THAT'S GOLD PLATING FOR NOW

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
                        <Nav.Link as={Link} to="/" className="nav-link">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/checkout" className="nav-link">
                            Go to Checkout
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default WsdNav;