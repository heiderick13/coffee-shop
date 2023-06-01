import logo from "../../assets/logo.svg";

import { MdMenu } from "react-icons/md";

function Navbar() {
  const openMenu = () => {
    // function from props
  };
  return (
    <nav className="flex items-center justify-between p-4">
      <img src={logo} alt="Company Logo" />
      <div className="md:hidden text-3xl cursor-pointer" onClick={openMenu}>
        <MdMenu />
      </div>
      <div className="hidden md:flex gap-4 uppercase">
        <a className="">home</a>
        <a className="">about us</a>
        <a className="">create your plan</a>
      </div>
    </nav>
  );
}

export default Navbar;
