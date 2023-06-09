import "./Navbar.css";

import { useState } from "react";

import logo from "../../assets/logo.svg";

import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

import MobileMenu from "../MobileMenu/MobileMenu";

function Navbar() {
  const [isClosed, setIsClosed] = useState(true);
  const toggleMenu = () => {
    setIsClosed(!isClosed);
    console.log(isClosed);
  };
  return (
    <>
      <nav className="navbar d-flex mb-5">
        <Link>
          <img src={logo} alt="Company Logo" />
        </Link>
        <div className="nav-menu" onClick={toggleMenu}>
          <MdMenu />
        </div>

        <div className="nav-links">
          <Link to={"/"} className="">
            home
          </Link>
          <Link to={"/about-us"} className="">
            about us
          </Link>
          <Link to={"/subscribe"} className="">
            create your plan
          </Link>
        </div>
      </nav>
      {!isClosed && <MobileMenu toggleMenu={toggleMenu} />}
    </>
  );
}

export default Navbar;
