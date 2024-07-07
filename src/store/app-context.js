import { createContext } from "react";

const AppContext=createContext({
    showCart:false,
    cart: [],
    addProduct:false ,
    product :[],
    add : ()=>{} ,
    incqty : ()=>{},
    decqty : ()=>{},
    openCart : ()=>{},
    closeCart : ()=>{},
    openaddProduct : ()=>{},
    closeaddProduct : ()=>{},
    handleaddProduct : ()=>{}
});

export default AppContext;