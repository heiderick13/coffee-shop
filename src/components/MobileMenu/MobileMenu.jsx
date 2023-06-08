import "./MobileMenu.css";

import { Link } from "react-router-dom";

function MobileMenu({ toggleMenu }) {
  return (
    <>
      <div className="backdrop"></div>
      <div className="mobile-menu fraunces d-flex text-center rounded-4 px-5">
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