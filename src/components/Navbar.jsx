import { useState } from "react";
import logo from "../assets/logo.svg";
import PlansBtn from "./PlansBtn";
import menuIcon from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";

function Navbar({ handleLogoClick }) {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuToggle() {
    setShowMenu(!showMenu);
  }

  return (
    <header>
      <div className="content-wrapper">
        <img src={logo} alt="insure logo" onClick={handleLogoClick} />
        <nav className={showMenu ? "show" : ""}>
          <ul className="nav-links">
            <li className="link-el">HOW WE WORK</li>
            <li className="link-el">BLOG</li>
            <li className="link-el">ACCOUNT</li>
          </ul>
          <PlansBtn />
        </nav>
        <button className="menu-btn" onClick={handleMenuToggle}>
          <img src={showMenu ? closeIcon : menuIcon} alt="hamburger-icon" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
