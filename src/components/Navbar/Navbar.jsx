import "./Navbar.css";

import logo from "../../assets/logo.svg";

import { MdMenu } from "react-icons/md";

function Navbar() {
  const openMenu = () => {
    // function from props
  };
  return (
    <nav className="navbar d-flex">
      <img src={logo} alt="Company Logo" />
      <div className="nav-menu" onClick={openMenu}>
        <MdMenu />
      </div>
      <div className="nav-links">
        <a className="">home</a>
        <a className="">about us</a>
        <a className="">create your plan</a>
      </div>
    </nav>
  );
}

export default Navbar;
