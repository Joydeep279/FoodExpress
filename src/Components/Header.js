import { useState } from "react";
import { logoCDN } from "../utils/CDN_Links";
import { Link } from "react-router";
import isOnline from "../utils/isOnline";
import userInfo from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
console.log("Header Called");
const Header = (props) => {

  const { name } = useContext(userInfo);
  const [BtnText, setBtnText] = useState("LogIn");
  const cartItems = useSelector((store) => store.cart.cartItem);
  console.log(cartItems);

  return (
    <div className="flex justify-between items-start pt-2.5">
      <div className="max-w-44 max-h-36">
        <Link to={"/"}>
          <img className="w-40 h-32" src={logoCDN} alt="logo-icon" />
        </Link>
      </div>
      <div>
        <ul className="header-list flex justify-center items-center gap-4 text-xl antialiased font-medium text-[#353535] hover:text-black transition-all">
          <li>
            {isOnline() ? (
              <img
                className="w-10 h- bg-blend-normal"
                src="https://static.wixstatic.com/media/4ea17e_a962cd2cf30b4c01a8d76b9629b42148~mv2.gif"
                alt="Online"
              />
            ) : (
              <div>
                <span>🔴</span>
              </div>
            )}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/contact">{global}</Link>
          </li>
          <li>
            <Link to="/cart">
              <span className="relative pl-5 text-center">
                {cartItems.length}
              </span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
                className="w-10 h-8"
              />
            </Link>
          </li>
          <li>
            <button
              className="bg-gray-950 hover:bg-gray-900 text-white font-bold py-0.5- px-1.5 rounded-md"
              onClick={() => {
                BtnText === "LogOut"
                  ? setBtnText("LogIn")
                  : setBtnText("LogOut");
              }}>
              {BtnText}
            </button>
          </li>
          <li>{name}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
