import Collectable from "../../components/Collectable/Collectable";
import "./Home.css";

import { Link } from "react-router-dom";

import espresso from "../../assets/home/desktop/image-gran-espresso.png";
import planalto from "../../assets/home/desktop/image-planalto.png";
import piccollo from "../../assets/home/desktop/image-piccollo.png";
import danche from "../../assets/home/desktop/image-danche.png";

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
      <div className="collection">
        <h2>our collection</h2>
        <Collectable
          img={espresso}
          title={"Gran Expresso"}
          description={
            "Light and flavorful blend with cocoa and black pepper for an intense experience"
          }
        />
        <Collectable
          img={planalto}
          title={"Planalto"}
          description={
            "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
          }
        />
        <Collectable
          img={piccollo}
          title={"Piccollo"}
          description={
            "Mild and smooth blend featuring notes of toasted almond and dried cherry "
          }
        />
        <Collectable
          img={danche}
          title={"Danche"}
          description={
            "Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
          }
        />
      </div>
    </div>
  );
}

export default Home;
