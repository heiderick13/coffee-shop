import Collectable from "../../components/Collectable/Collectable";
import "./Home.css";

import { Link } from "react-router-dom";

import espresso from "../../assets/home/desktop/image-gran-espresso.png";
import planalto from "../../assets/home/desktop/image-planalto.png";
import piccollo from "../../assets/home/desktop/image-piccollo.png";
import danche from "../../assets/home/desktop/image-danche.png";
import ProsCard from "../../components/ProsCard/ProsCard";

import coffeeBean from "../../assets/home/desktop/icon-coffee-bean.svg";
import gift from "../../assets/home/desktop/icon-gift.svg";
import truck from "../../assets/home/desktop/icon-truck.svg";
import Step from "../../components/Step/Step";

function Home() {
  return (
    <div className="home p-4">
      <div className="home-hero d-flex fraunces rounded-4 px-5">
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
      <div className="collection text-center">
        <h2 className="fraunces mb-5">our collection</h2>
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
      <div className="pros d-flex p-5 rounded-4">
        <h2 className="fraunces">Why choose us?</h2>
        <p className="barlow">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <ProsCard
          icon={coffeeBean}
          pro={`Best quality`}
          description={`Discover an endless variety of the world’s best artisan coffee from each of our roasters.`}
        />
        <ProsCard
          icon={gift}
          pro={`Exclusive benefits`}
          description={`Special offers and swag when you subscribe, including 30% off your first shipment.`}
        />
        <ProsCard
          icon={truck}
          pro={`Free shipping`}
          description={`We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.`}
        />
      </div>
      <div className="steps fraunces">
        <Step
          num={"01"}
          title={"Pick your coffee"}
          description={
            "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
          }
        />
        <Step
          num={"02"}
          title={"Choose the frequency"}
          description={
            "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
          }
        />
        <Step
          num={"03"}
          title={"Receive and enjoy!"}
          description={
            "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
          }
        />
      </div>
    </div>
  );
}

export default Home;
