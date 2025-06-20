import { logoCDN } from "../utils/CDN_Links";

const Header = () => {
  
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
        </ul>
      </div>
    </div>
  );
};
export default Header;
