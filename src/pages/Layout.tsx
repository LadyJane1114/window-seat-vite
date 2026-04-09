import {Outlet} from "react-router"
import WSD_Nav from "../components/WSD_Nav.tsx";

const Layout = () => {
    return (
        <div className="layout-wrapper">
            <WSD_Nav/>

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