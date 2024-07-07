import AppContext from "../../store/app-context";
import "./Products.css"
import { useContext } from "react";
function Products() {

    const {product,add}=useContext(AppContext);

    return (
        <div className="products-container">
            {product.map((product) => (
                <div key={product.id} className="product">
                    <div className="product-image">
                        <img src={require(`../../assets/${product.image}`)} alt={product.name} />
                    </div>
                    <div className="product-name">
                        {product.name}
                    </div>
                    <button className="add-to-cart" onClick={()=>add(product.id,product.name,product.image)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Products;
