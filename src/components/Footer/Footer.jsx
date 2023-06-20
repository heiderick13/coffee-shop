import logo from "../../assets/shared/desktop/footer-logo.svg";

import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-center md:justify-between px-8 gap-12 md:gap-24 bg-dark-grey-blue py-16">
      <img src={logo} alt="Company Logo" />
      <div className="flex flex-col md:flex-row gap-6 text-center text-[1.5rem] text-grey uppercase">
        <Link to={"/"}>home</Link>
        <Link to={"/about-us"}>about us</Link>
        <Link to={"/subscribe"}>create your plan</Link>
      </div>
      <div className="flex gap-8 md:flex-grow md:justify-end text-light-cream text-[3rem]">
        <FaFacebook className="hover:text-pale-orange cursor-pointer" />
        <FaInstagram className="hover:text-pale-orange cursor-pointer" />
        <FaTwitter className="hover:text-pale-orange cursor-pointer" />
      </div>
    </footer>
  );
}

export default Footer;
