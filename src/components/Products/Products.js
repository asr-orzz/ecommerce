import AppContext from "../../store/app-context";
import "./Products.css"
import Loader from "../UI/Loader";
import { useContext } from "react";
function Products() {

    const {product,add,loading}=useContext(AppContext);
    
    if(loading){
        return (<Loader/>);
    }
    return (
        <div className="products-container">
            {Object.keys(product).map((k) => (
                <div key={k} className="product">
                    <div className="product-image">
                        <img src={require(`../../assets/${product[k].image}`)} alt={product[k].name} />
                    </div>
                    <div className="product-name">
                        {product[k].name}
                    </div>
                    <button className="add-to-cart" onClick={()=>add(product[k].id,product[k].name,product[k].image)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Products;
