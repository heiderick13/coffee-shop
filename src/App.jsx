import Navbar from "./components/Navbar/Navbar";

import { Outlet } from "react-router";

function App() {
  return (
    <div className="p-3">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
