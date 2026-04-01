import {useParams} from "react-router";
import type {Product} from "../types/Product.tsx";
import {useEffect, useState} from "react";
import Cookies from "js-cookie"
import type {Cart, CartItem} from "../types/Cart.tsx";

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
        const raw = Cookies.get(COOKIE_KEY)
        const cart: Cart = raw ? JSON.parse(raw) : { items: [] }
        const existing = cart.items.find((item:CartItem))

        const existing = cart.items.find((item: CartItem) => item.itemID === product?.prodID)
        const updatedItems = existing
            ? cart.items.map((item: CartItem) =>
                item.itemID === product?.prodID
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            )
            //: [...cart.items, { id: movie.id, price: movie.price, quantity }]
            : [...cart.items, { id: product?.prodID, quantity }]

        Cookies.set(COOKIE_KEY, JSON.stringify({ items: updatedItems }), { expires: 1 })

        setShowMessage(true)
    }



    return (
        <>{showMessage && (
            <h4 className="text-success">Item added to cart successfully!</h4>
        )}

            {product && (
                <div className="card">
                    <h1>{product.prodName}</h1>
                    {/*<img src={product.prodImgURL} alt={product.prodName} className="w-50 max-w-md mx-auto"/>*/}
                    <p>{product.prodStory}</p>
                    <p>
                        <button className="btn btl-primary" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </p>
                </div>
            )
}
        </>
    );
}

export default DetailsPage;