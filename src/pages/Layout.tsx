import {Link, Outlet} from "react-router"
import {NavDropdown} from "react-bootstrap";

const Layout = () => {
    return (
        <div className="layout-wrapper">
                <nav className="navbar">
                    <Link to="/" className="nav-logo">
                        <img
                            src="src/assets/WindowSeat1_ico_logo.png"
                            alt="Window Seat Dolls"
                            className="wsd-logo"/>
                    </Link>
                    <NavDropdown title="Categories" id="category-dropdown">
                        {category.map (c => (
                            <NavDropdown.item key={c.categoryID} as={Link} to={`/category/${encodeURIComponent(cat.categoryID)}`}>
                                {category.catName}
                            </NavDropdown.item>
                        ))}
                    </NavDropdown>

                    <div className="cart-icon">
                        <Link to="/cart">
                            <i className="bi bi-cart4"></i>
                        </Link>
                    </div>
                </nav>

            <main className="main-container">
                <Outlet/>
            </main>
            <footer className="footer">
                Lady Jane Scott, &copy; April 2026
            </footer>
        </div>
    );
};

export default Layout;