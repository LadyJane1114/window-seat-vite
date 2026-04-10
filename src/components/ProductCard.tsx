import {Link} from "react-router";

type ProductCardProps = {
    prodName: string;
    prodImgURL: string;
    prodID:number;
};

const ProductCard: React.FC<ProductCardProps> = ({prodName, prodImgURL, prodID}) => {
    return (
        <>
            <Link to={`/details/${prodID}`} className="product-card-link">
                <div className="category-section">
                    <div className="product-book">
                        <div className="book-content">
                            <h3>I'm {prodName}!</h3>
                            <p>Read my story!</p>
                        </div>
                        <div className="book-cover">
                            <img src={prodImgURL} alt={prodName}/>
                        </div>
                    </div>
                </div>
            </Link>
        </>

    //     based on book card by eslam-hany
    );
};

export default ProductCard;