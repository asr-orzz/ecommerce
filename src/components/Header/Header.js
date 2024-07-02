import "./Header.css";

function Header({ openCart , openaddProduct}) {
  return (
    <div className="header">
      <h1>My React Store</h1>
     
      <div className="cart">
        <button className="cart-button" style={{marginRight:"20px"} } onClick={openaddProduct}>
          Add Product
        </button>
        <button className="cart-button" onClick={openCart}>
          Cart
        </button>
      </div>
    </div>
  );
}

export default Header;
