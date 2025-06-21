import { useState } from "react";
import { logoCDN } from "../utils/CDN_Links";

console.log("Header Called");
const Header = () => {
  const [BtnText, setBtnText] = useState("LogIn");
  console.log("Component Called!");

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logoCDN} alt="logo-icon" />
      </div>
      <div className="header-item-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
