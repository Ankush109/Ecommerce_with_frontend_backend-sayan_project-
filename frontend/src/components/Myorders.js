import React, { Fragment } from "react";
import CartItemCard from "./cartitems";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Link } from "react-router-dom";
import { additemstocart, removefromcart } from "../actions/cartaction";

const Myorder = () => {
const {cartitems}=useSelector((state)=>state.cart)
const dispatch =useDispatch()
const navigate =useNavigate()
const increasequantity =(id,quantity,stock)=>{
  const newqty = quantity+1;
  if(stock<=quantity){
    return
  }
  dispatch(additemstocart(id,newqty))
  
}
const decreasequantity =(id,quantity)=>{
  const newqty = quantity-1;
  if(1>=quantity){
    return
  }
  dispatch(additemstocart(id,newqty))
  
}
const deletecartitem =(id)=>{
 dispatch(removefromcart(id))
  
}
const checkouthandler =() =>{
navigate("/login?redirect=shipping")
}
  return (
   <Fragment>
     {cartitems.length === 0 ? (
       <div className="emptyCart">
      <RemoveShoppingCartIcon />
      <Typography>No Product in Your Cart</Typography>
      <Link to="/products">View Products</Link>
       </div>
     ):
     (
       
      <Fragment>
      <div className="cartPage">
        <div className="cartHeader">
          <p>Product</p>
     
          <p>Subtotal</p>
        </div>

        {cartitems &&
          cartitems.map((item) => (
            <div className="cartContainer" key={item.product}>
              <CartItemCard item={item} deletecartitem={deletecartitem} />
              
              <p className="cartSubtotal">{`₹${
                item.price * item.quantity
              }`}</p>
            </div>
          ))}

        <div className="cartGrossProfit">
          <div></div>
          <div className="cartGrossProfitBox">
            <p>Gross Total</p>
         <p>{`₹${cartitems.reduce(
           (acc,item)=>acc +item.quantity * item.price,0
         )}`}</p> 
          </div>
          <div></div>
        
        </div>
      </div>
    </Fragment>

     )}
   </Fragment>
  )
};

export default Myorder;