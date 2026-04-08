import {Link, Outlet} from "react-router"

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white shadow-md">
                <nav className="container mx-auto px-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center">
                        <img
                            src="src/assets/WindowSeat1_ico_logo.png"
                            alt="Window Seat Dolls"
                            className="wsd_logo"/>
                        <span className="text-xl font-semibold text-gray-800">
                            Window Seat Dolls
                        </span>
                    </Link>

                    <div className="text-gray-800 text-2xl hover:text-gray-600">
                        <Link to="/cart" className="text-reset fs-4">
                            <i className="bi bi-cart4"></i>
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="flex-1 container mx-auto px-4 py-6">
                <Outlet/>
            </main>
            <footer className="bg-gray-100 mt-auto py-4 text-center text-gray-600">
                Lady Jane Scott, &copy; April 2026
            </footer>
        </div>
    );
};

export default Layout;