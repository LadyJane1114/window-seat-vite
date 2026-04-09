import {loadStripe} from "@stripe/stripe-js";
import {useCallback} from "react";
import {EmbeddedCheckoutProvider, EmbeddedCheckout} from '@stripe/react-stripe-js';

import Cookies from "js-cookie";


const stripePromise = loadStripe("pk_test_51T2GDsDlTUkLxqzE3nc1QwVYwHPHGUSIUGrKdx8wqz4EaLI6CJ7zg9JK6ickBjwXzHsqrCHl4K4Tqe7p1juursap00tMaihtn5")

const CheckoutPage = () => {
    const COOKIE_KEY = "shopping_cart";

    const fetchClientSecret = useCallback(async ()=> {
        // get shopping cart from cookie
        const cart = Cookies.get(COOKIE_KEY)

        //create checkout session
        const res = await fetch("http://localhost:8080/checkout/create-checkout-session",{
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: cart
        });
        const data = await res.json();
        return data.clientSecret;
    }, []);
    const options = {fetchClientSecret};

    return (
        <>
            <div style={{ width: "100%", minHeight: "100vh" }}>
                <h1>Checkout</h1>
                <EmbeddedCheckoutProvider
                    stripe={stripePromise}
                    options={options}
                >
                    <EmbeddedCheckout />
                </EmbeddedCheckoutProvider>
            </div>
        </>
    )
};

export default CheckoutPage;