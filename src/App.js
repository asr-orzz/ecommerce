import { useState } from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import AddProduct from "./components/AddProduct/AddProduct";
import initialproduct from "./data/products.json"
function App() {
  const [showCart, setShowCart] = useState(false);
  const [cart,setcart] = useState([]);
  const [addProduct, setaddProduct] = useState(false);
  const [product,setproduct]=useState(initialproduct);

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

  function openaddProduct() {
    setaddProduct(true);
  }

  function closeaddProduct() {
    setaddProduct(false);
  }

  function handleaddProduct(name){
      const update={
        "id":product.length+1,
        "name": name, 
        "image":"360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg"
      }
      setproduct((state)=>([...state,update]));
  }

  return (
    <div>
      <Header openCart={openCart} openaddProduct={openaddProduct}/>
      <Products products={product}addtocart={add}/>
      <Cart  incqty={incqty} decqty={decqty} show={showCart} closeCart={closeCart} cartitems={cart}/>
      <AddProduct show={addProduct} openaddProduct={openaddProduct} closeaddProduct={closeaddProduct} handle={handleaddProduct}/>
    </div>
  );
}

export default App;
