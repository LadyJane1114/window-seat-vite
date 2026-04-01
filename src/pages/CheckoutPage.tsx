import {loadStripe, type StripeEmbeddedCheckoutOptions} from "@stripe/stripe-js";
import {useCallback} from "react";
import {EmbeddedCheckoutProvider, EmbeddedCheckout} from '@stripe/react-stripe-js';
import cartPage from "./CartPage.tsx";
import Cookies from "js-cookie";

const CheckoutPage = () => {

    const stripePromise = loadStripe("pk_test_51T2GDsDlTUkLxqzE3nc1QwVYwHPHGUSIUGrKdx8wqz4EaLI6CJ7zg9JK6ickBjwXzHsqrCHl4K4Tqe7p1juursap00tMaihtn5")


    const fetchClientSecret = useCallback(async ()=> {
        //create checkout session
        const res = await fetch("http://localhost:8080/checkout/create-checkout-session",{
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body:cartPage
        });
        const data = await res.json();
        return data.clientSecret;
    }, []);

    const options : StripeEmbeddedCheckoutOptions = {fetchClientSecret}

    return (
        <>
            <h1>Checkout</h1>
            <div id="checkout">
                <EmbeddedCheckoutProvider
                    stripe={stripePromise}
                    options={options}>
                    <EmbeddedCheckout/>
                </EmbeddedCheckoutProvider>
            </div>
        </>
    );
};

export default CheckoutPage;