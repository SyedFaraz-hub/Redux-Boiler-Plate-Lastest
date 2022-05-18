import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {add} from "../Redux/Cakes/CakeActions"

const Cart = () => {

  const numberOfCake = useSelector(state=> state.numberOfCake); 
  const dispatch = useDispatch()
  return (
    <div
      className="container my-4"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <h1>I Have {numberOfCake} Cake</h1>
      <button className="btn btn-primary mx-3">- Minus</button>
      <button className="btn btn-primary mx-3" onClick={()=> dispatch(add())}>+ Add </button>
    </div>
  );
};

export default Cart;
