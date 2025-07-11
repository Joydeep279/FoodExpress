import { useSelector } from "react-redux";
import MenuListLayout from "./MenuLayout";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItem);
  console.log(cartItems);

  return (
    <div className="w-1/2 m-auto flex flex-col gap-10 bg-amber-50 px-5 py-2">
      <MenuListLayout data={cartItems} isCartComponent={true}/>
    </div>
  );
};
export default Cart;
