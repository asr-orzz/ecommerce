import AppContext from "./app-context";
// import initialproduct from "../data/products.json"
import { useEffect, useState } from "react";

const AppContextProvider = ({children}) => {

  const [showCart, setShowCart] = useState(false);
  const [cart,setcart] = useState([]);
  const [addProduct, setaddProduct] = useState(false);
  const [product,setproduct]=useState([]);
  const [loading,setloading]=useState(false);
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

  const sendpost=async(update)=>{

    const response=fetch("apiendpoint/json",{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(update)
    });
    const data= (await response).json();
    console.log(data);

  }

  function handleaddProduct(name){
      const update={
        "id":product.length+1,
        "name": name, 
        "image":"360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg"
      }
      sendpost(update);
      setproduct((state)=>{
          return(
              {
                ...state,[Object.keys(state).length+1]: update
              }
          );
      });
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setloading(true);
        const response = await fetch("apiendpoint/json");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setproduct(data);
        setloading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const AppContextValue={
    showCart,
    cart,
    addProduct,
    product,
    loading,
    add,
    incqty,
    decqty,
    openCart,
    closeCart,
    openaddProduct,
    closeaddProduct,
    handleaddProduct
  };    

  return (
    <AppContext.Provider value={AppContextValue}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;
