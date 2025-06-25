import { useState } from "react";
import { logoCDN } from "../utils/CDN_Links";
import { Link } from "react-router";
import isOnline from "../utils/isOnline";
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
            {isOnline() ? (
              <img
                className="internet-status"
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
