import Navbar from "./components/Navbar/Navbar";

import { Outlet } from "react-router";

function App() {
  return (
    <div className="p-4">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
