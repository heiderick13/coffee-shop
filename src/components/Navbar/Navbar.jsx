import logo from "../../../public/logo.svg";

function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <img src={logo} alt="Company Logo" />
      <div className="flex gap-4 uppercase">
        <a className="">home</a>
        <a className="">about us</a>
        <a className="">create your plan</a>
      </div>
    </nav>
  );
}

export default Navbar;
