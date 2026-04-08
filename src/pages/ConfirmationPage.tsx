import {useState, useEffect} from "react";
import {Navigate} from "react-router";
import Cookies from "js-cookie";

const ConfirmationPage = () => {
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState("");
    const COOKIE_KEY = "shopping_cart"


    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const sessionID = urlParams.get('session_id')


        fetch(`http://localhost:8080/checkout/session-status?session_id=${sessionID}`)
            .then((res)=> res.json())
            .then((data)=>{
                setStatus(data.status);
                setCustomerEmail(data.customer_email);
            })
    }, []);

    if (status === null) {
        return <p>Loading your order...</p>;
    }

    if (status === "complete"){
        // clear the cart
        Cookies.remove(COOKIE_KEY);
        return(
            <section id="success">
                <h2>We appreciate your business!</h2>
                <p>A confirmation email will be sent to {customerEmail}</p>
                <br/>
                <p>Please direct any questions to help@windowseatdolls.ca</p>
            </section>
        )
    }
    if (status === "open") {
        return (
            <Navigate to="/checkout" />
        )
    }

};

export default ConfirmationPage;