import "./Home.css";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-hero d-flex fraunces text-center rounded-4 px-5">
        <h1 className="mb-5">Great coffee made simple</h1>
        <p className="barlow mb-5">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Link to={"/subscribe"} className="btn main-btn rounded-3">
          Create you plan
        </Link>
      </div>
    </div>
  );
}

export default Home;
