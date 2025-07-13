import { useDispatch, useSelector } from "react-redux";
import MenuListLayout from "./MenuLayout";
import React from "react";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItem);
  console.log(cartItems);
  const clearCartHandler = useDispatch();
  const handleClearCart = () => {
    clearCartHandler(clearCart());
  };
  console.log(cartItems.length);

  return (
    <div className="w-1/2 m-auto flex flex-col gap-10 bg-amber-50 px-5 py-2">
      {!cartItems.length ? (
        <h1>Your Cart Is Empty!</h1>
      ) : (
        <React.Fragment>
          <button
            onClick={() => handleClearCart()}
            className="bg-gray-950 hover:bg-gray-900 text-white font-bold py-0.5- px-1.5 rounded-md w-20 cursor-pointer">
            Clear
          </button>
          <MenuListLayout data={cartItems} isCartComponent={true} />
        </React.Fragment>
      )}
    </div>
  );
};
export default Cart;
