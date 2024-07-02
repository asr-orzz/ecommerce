import "./Header.css";

function Header({ openCart }) {
  return (
    <div className="header">
      <h1>My React Store</h1>
      <div className="cart">
        <button className="cart-button" onClick={openCart}>
          Cart
        </button>
      </div>
    </div>
  );
}

export default Header;
