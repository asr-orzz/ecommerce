import Modal from "../Modals/Modal";
import "./Cart.css"

function Cart({show, closeCart,cartitems,incqty,decqty}) {
    if (!show) {
        return null; // Return null if show is false, meaning the modal won't render
     }
  return (
    <div className="backdrop" onClick={closeCart}>   
       <div className="modal">
            <Modal show={show} >    
                <h3>Cart</h3>
                {cartitems.length>0 ? cartitems.map(item=> 
                    <div className="cart-item" key={cartitems.id}>
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
                {cartitems.length>0 && <button className="checkout" onClick={closeCart}>
                    Checkout
                </button>}
                <button className="Close" onClick={closeCart}>
                    Close
                </button>
            </Modal>
        </div> 
    </div> 
  );
}

export default Cart;
