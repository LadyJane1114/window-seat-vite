import {Link, useParams} from "react-router";
import {useEffect, useState} from "react";
import type {Product} from "../types/Product.tsx";
import type {Cart, CartItem} from "../types/Cart.tsx";
import Cookies from "js-cookie";
import {Button} from "react-bootstrap";

function DetailsPage() {
    const {prodID} = useParams()
    const [product, setProduct] = useState<Product>()
    const [showMessage, setShowMessage] = useState(false)
    const COOKIE_KEY = "shopping_cart"
    const quantity = 1

    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch("http://localhost:8080/" + prodID)
            const product = await  res.json()
            setProduct(product)
        }
        fetchData()
    }, [])


    const handleAddToCart = () => {
        // add product to cart
        const rawJson = Cookies.get(COOKIE_KEY)

        //ternary condition, if rawjson has value, parse it if not return empty array
        const cart: Cart = rawJson ? JSON.parse(rawJson) : { items: []}

        const existing = cart.items.find((item:CartItem) => item.itemID === product?.prodID)
        const updatedItems = existing
            ? cart.items.map(( item:CartItem)=>
            item.itemID === product?.prodID ? {...item, quantity: item.quantity + quantity}
            :item
            ) : [...cart.items, {itemID: product?.prodID, quantity}]

        Cookies.set(COOKIE_KEY, JSON.stringify({items: updatedItems}), {expires: 1})

        setShowMessage(true)
    }

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="details-page-container" style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
            {/* Left: Doll Image */}
            <div className="details-left" style={{ flex: 1 }}>
                <img
                    src={product.prodImgURL ?? "/placeholder.png"}
                    alt={product.prodName}
                    style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }}
                />
            </div>

            {/* Right: Details & Purchase */}
            <div className="details-right" style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h1>{product.prodName}</h1>
                <p>{product.prodStory}</p>
                {product.prodBirthday && <p><strong>Birthday:</strong> {product.prodBirthday}</p>}
                {product.prodHeight && <p><strong>Height:</strong> {product.prodHeight} cm</p>}
                {product.prodWeight && <p><strong>Weight:</strong> {product.prodWeight} kg</p>}
                {product.prodPrice && <p><strong>Price:</strong> ${product.prodPrice}</p>}

                <Button variant="primary" onClick={handleAddToCart}>
                    Add to Cart
                </Button>

                {showMessage && <p style={{ color: "green", marginTop: "0.5rem" }}>Item added to cart successfully!</p>}

                <Link to="/" style={{ marginTop: "1rem" }}>
                    <Button variant="secondary">Back to Home Page</Button>
                </Link>
            </div>
        </div>
    );
};

export default DetailsPage;