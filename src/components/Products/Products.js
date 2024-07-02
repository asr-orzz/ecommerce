import productsData from "../../data/products.json";
import "./Products.css"
function Products({addtocart}) {
    return (
        <div className="products-container">
            {productsData.map((product) => (
                <div key={product.id} className="product">
                    <div className="product-image">
                        <img src={require(`../../assets/${product.image}`)} alt={product.name} />
                    </div>
                    <div className="product-name">
                        {product.name}
                    </div>
                    <button className="add-to-cart" onClick={()=>addtocart(product.id,product.name,product.image)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Products;
