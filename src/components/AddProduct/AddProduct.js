import AppContext from "../../store/app-context";
import Modal from "../Modals/Modal";
import "./AddProduct.css"
import { useRef } from "react";
import { useContext } from "react";

function AddProduct(){

    const {addProduct,closeaddProduct,handleaddProduct}=useContext(AppContext);

    const nameref=useRef(null);
    function handleSubmit(event){
        event.preventDefault();
        const name=nameref.current.value;
        handleaddProduct(name);
        closeaddProduct();
    }

    if (!addProduct) {
        return null; // Return null if show is false, meaning the modal won't render
    }
    return(
        <div className="backdrop" onClick={closeaddProduct}>   
             <Modal show={addProduct} >    
                <div className="Add-Product">
                    <div className="Add-product-heading">Add Product</div>
                    <form onSubmit={handleSubmit}> 
                        <div className="add-product-label">Enter Product Name</div>
                        <input className="add-product-input" ref={nameref}/>
                        <button className="add-product-submit" type="submit">Add Product</button>
                    </form>
                </div>
             </Modal>
        </div> 
    );
}

export default AddProduct;