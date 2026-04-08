import {Link} from "react-router";


const ProductCard = () => {
    return (
        <>
            <div className="category-section">
                <div className="category-header">
                    <h2>{category.CatName}</h2>
                    {/*<Link to="/category/CatID"/>*/}
                </div>
                <div className="product-book">
                    <h3>I'm {category.product.prodName}!</h3>
                    <p>Read my story!</p>
                    <div className="book-img-cover">
                        {/*<img src={product.prodImgURL} alt={product.prodName}/>*/}
                    </div>
                </div>
            </div>
        </>

    //     based on book card by eslam-hany
    );
};

export default ProductCard;