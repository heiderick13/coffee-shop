import "./Footer.css";

import logo from "../../assets/shared/desktop/footer-logo.svg";

import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="d-flex">
      <img src={logo} alt="Company Logo" />
      <div className="links d-flex">
        <Link to={"/"}>home</Link>
        <Link to={"/about-us"}>about us</Link>
        <Link to={"/subscribe"}>create your plan</Link>
      </div>
      <div className="socials d-flex">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
      </div>
    </footer>
  );
}

export default Footer;
