import Modal from "../Modals/Modal";
import "./AddProduct.css"
import { useRef } from "react";

function AddProduct({show,closeaddProduct,handle}){

    const nameref=useRef(null);
    function handleSubmit(event){
        event.preventDefault();
        const name=nameref.current.value;
        handle(name);
        closeaddProduct();
    }

    if (!show) {
        return null; // Return null if show is false, meaning the modal won't render
    }
    return(
        <div className="backdrop" onClick={closeaddProduct}>   
             <Modal show={show} >    
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