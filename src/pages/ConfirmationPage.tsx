import {useState, useEffect} from "react";
import {Navigate} from "react-router";

const ConfirmationPage = () => {
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState("");

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

    if (status === "complete"){
        return(
            <section id="success">
                <h2>We appreciate your business!</h2>
                <p>A confirmation email will be sent to {customerEmail}</p>
                <br/>
                <p>Please direct any questions to orders@windowseatdolls.ca</p>
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