import {useState, useEffect} from "react";
import {Navigate} from "react-router";
import Cookies from "js-cookie";

import WindowSeat_girl1 from "../assets/WindowSeat_girl1.png"

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

    useEffect(()=> {
        if (status !== "complete") return;
        const cart = Cookies.get(COOKIE_KEY);

        fetch("http://localhost:8080/checkout/confirmation", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: cart
        });
        Cookies.remove(COOKIE_KEY)
    }, [status])

        if (status === null) {
            return <p>Loading your order...</p>;
        }
        if (status === "open") {
            return (
                <Navigate to="/checkout" />
            )
        }
    console.log("STATUS CHANGED:", status);
        return(
            <section id="success">
                <div className="confirm-container">
                    <h1>We appreciate your business!</h1>
                    <img src={WindowSeat_girl1}
                         alt="Girl with pink cloud behind"
                         style={{ width:"40%", borderRadius:"10px", objectFit:"cover"}}/>
                    <h2>A confirmation email will be sent to {customerEmail}</h2>
                    <br/>
                    <p>Please direct any questions to help@windowseatdolls.ca</p>
                </div>
            </section>
        )
};

export default ConfirmationPage;