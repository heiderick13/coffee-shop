import "./Navbar.css";

import logo from "../../assets/logo.svg";

import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  const openMenu = () => {
    // function from props
  };
  return (
    <nav className="navbar d-flex mb-5">
      <Link>
        <img src={logo} alt="Company Logo" />
      </Link>
      <div className="nav-menu" onClick={openMenu}>
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
  );
}

export default Navbar;
