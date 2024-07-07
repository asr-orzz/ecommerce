import { createContext } from "react";

const AppContext=createContext({
    showCart:false,
    cart: [],
    addProduct:false ,
    product :[],
    loading: false,
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