import {useEffect, useState} from "react";
import type {Product} from "../types/Product.tsx";
import {Link} from "react-router";
import ChatWidget from "../components/ChatWidget.tsx";

const HomePage = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:8080/');
            const products = await res.json();
            setProducts(products)
        }
        fetchData()
    }, []);



    return (
        <>
        <h1>Window Seat Dolls</h1>


            {products.length > 0 && (
                products.map(product => (
                    <div key={product.prodID}>
                        <Link to={`/details/${product.prodID}`}>
                            {product.prodName}
                            {/*<img src={product.prodImgURL} alt={product.prodName}/>*/}
                        </Link>
                    </div>
                ))
            )}

            <ChatWidget/>
        </>
    );
};

export default HomePage;