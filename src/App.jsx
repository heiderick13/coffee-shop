import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
