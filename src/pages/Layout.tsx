import {Link, Outlet} from "react-router"

const Layout = () => {
    return (
        <div className="layout-wrapper">
                <nav className="navbar">
                    <Link to="/" className="nav-logo">
                        <img
                            src="src/assets/WindowSeat1_ico_logo.png"
                            alt="Window Seat Dolls"
                            className="wsd-logo"/>
                        <h1>Home</h1>
                    </Link>

                    <div className="cart-icon">
                        <Link to="/checkout">
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