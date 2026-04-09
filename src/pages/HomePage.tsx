import {useEffect, useState} from "react";
import type {Product} from "../types/Product.tsx";
import ChatWidget from "../components/ChatWidget.tsx";
import HeroBanner from "../components/HeroBanner.tsx";
import ProductCard from "../components/ProductCard.tsx";

const HomePage = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:8080/');
            const products = await res.json();
            console.log("Products from API:", products);
            setProducts(products)
        }
        fetchData()
    }, []);

    const productsByCategory = products.reduce((acc, product) => {
        const category = product.category?.CatName ?? "All Dolls";
        if (!acc[category]) acc[category] = [];
        acc[category].push(product);
        return acc;
    }, {} as Record<string, Product[]>);



    return (
        <>
        <HeroBanner/>

            {Object.entries(productsByCategory).map(([categoryName, products]) => (
                <div key={categoryName} className="category-section">
                    <div className="category-header">
                        <h2>{categoryName}</h2>
                    </div>

                    <div className="product-grid">
                        {products.map(product => (
                            <ProductCard
                                key={product.prodID}
                                prodName={product.prodName}
                                prodID={product.prodID}
                                prodImgURL={product.prodImgURL}
                            />
                        ))}
                    </div>
                </div>
            ))}

            <ChatWidget/>
        </>
    );
};

export default HomePage;