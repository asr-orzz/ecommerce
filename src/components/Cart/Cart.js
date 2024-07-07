import AppContext from "../../store/app-context";
import Modal from "../Modals/Modal";
import "./Cart.css"
import { useContext } from "react";

function Cart() {
    const {showCart,incqty,decqty,closeCart,cart}=useContext(AppContext);

    if (!showCart) {
        return null; 
    }

  return (
    <div className="backdrop" onClick={closeCart}>   
            <Modal show={showCart} >    
                <h3>Cart</h3>
                {cart.length>0 ? cart.map(item=> 
                    <div className="cart-item" key={cart.id}>
                        <div className="item-image">
                             <img src={require(`../../assets/${item.image}`)} alt={item.name} />
                        </div>
                        <div className="item-name">
                            {item.name}
                        </div>
                        <div className="quantity">
                            Quantity : {item.quantity}
                        </div>
                        <div className="indecbuttons">
                            <button className="incbutton" onClick={()=>incqty(item.id)}>+</button>
                            <button className="decbutton" onClick={()=>decqty(item.id)}>-</button>
                        </div>
                    </div>
                ) : <div className="empyty-cart">Cart is Empty</div>}
                {cart.length>0 && <button className="checkout" onClick={closeCart}>
                    Checkout
                </button>}
                <button className="Close" onClick={closeCart}>
                    Close
                </button>
            </Modal>
    </div> 
  );
}

export default Cart;
