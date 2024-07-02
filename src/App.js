import { useState } from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cart,setcart] = useState([]);

  function add(id,name,image){

    const index=cart.findIndex(item=> item.id===id);

    if(index===-1){
      const object={
        "id":id,
        "name":name,
        "image":image,
        "quantity": 1
     }
     setcart([...cart,object]);
    }

    else{
      const updatedcart =[...cart];
      updatedcart[index].quantity++;
      setcart(updatedcart);
    }

  }

  function incqty(id){
    const index=cart.findIndex(item=> item.id===id);
    const updatedcart =[...cart];
      updatedcart[index].quantity++;
      setcart(updatedcart);
  }

  function decqty(id){
    const index=cart.findIndex(item=> item.id===id);
    let updatedcart =[...cart];
      let qty=updatedcart[index].quantity;
      if(qty===1){
        updatedcart=updatedcart.filter((item)=> item.id!==id)
        setcart(updatedcart);
      }
      else{
        updatedcart[index].quantity--;
        setcart(updatedcart);
      }  
  }

  function openCart() {
    setShowCart(true);
  }

  function closeCart() {
    setShowCart(false);
  }

  return (
    <div>
      <Header openCart={openCart} />
      <Products addtocart={add}/>
      <Cart  incqty={incqty} decqty={decqty} show={showCart} closeCart={closeCart} cartitems={cart}/>
    </div>
  );
}

export default App;
