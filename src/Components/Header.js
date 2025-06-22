import { useState } from "react";
import { logoCDN } from "../utils/CDN_Links";
import { Link } from "react-router";
console.log("Header Called");
const Header = () => {
  const [BtnText, setBtnText] = useState("LogIn");
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logoCDN} alt="logo-icon" />
      </div>
      <div className="header-item-container">
        <ul>
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
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <button
              className="HeaderBTN"
              onClick={() => {
                BtnText === "LogOut"
                  ? setBtnText("LogIn")
                  : setBtnText("LogOut");
              }}>
              {BtnText}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
