import {NavLink} from "react-router";

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/checkout" className="nav-link">Checkout</NavLink>
            <NavLink to="/cart" className="nav-link">Cart</NavLink>
            <NavLink to="/confirmation" className="nav-link">Confirmation</NavLink>
        </nav>
    );
};

export default NavBar;