import "./MobileMenu.css";

import { MdClear } from "react-icons/md";

import { Link } from "react-router-dom";

function MobileMenu({ toggleMenu }) {
  return (
    <>
      <div className="backdrop fixed inset-0 "></div>
      <div
        className="close-menu fixed top-8 right-8 text-4xl"
        onClick={toggleMenu}
      >
        <MdClear />
      </div>
      <div className="mobile-menu font-fraunces flex flex-col gap-8 text-center capitalize fixed inset-[20%] text-dark-grey-blue">
        <Link to={"/"} onClick={toggleMenu}>
          home
        </Link>
        <Link to={"/about-us"} onClick={toggleMenu}>
          about us
        </Link>
        <Link to={"/subscribe"} onClick={toggleMenu}>
          create your plan
        </Link>
      </div>
    </>
  );
}

export default MobileMenu;
