import Collectable from "../../components/Collectable/Collectable";
import "./Home.css";

import espresso from "../../assets/home/desktop/image-gran-espresso.png";
import planalto from "../../assets/home/desktop/image-planalto.png";
import piccollo from "../../assets/home/desktop/image-piccollo.png";
import danche from "../../assets/home/desktop/image-danche.png";
import ProsCard from "../../components/ProsCard/ProsCard";

import coffeeBean from "../../assets/home/desktop/icon-coffee-bean.svg";
import gift from "../../assets/home/desktop/icon-gift.svg";
import truck from "../../assets/home/desktop/icon-truck.svg";
import Step from "../../components/Step/Step";
import CreateBtn from "../../components/CreateBtn/CreateBtn";

function Home() {
  return (
    <div className="home p-4">
      <div className="home-hero min-h-[45rem] text-light-cream flex flex-col gap-4 justify-center items-center md:items-start text-center md:text-left font-fraunces rounded-xl px-5">
        <h1 className="mb-5 leading-tight md:max-w-[35%] text-[4.6rem]">
          Great coffee made simple
        </h1>
        <p className="font-barlow mb-5 md:max-w-[35%] text-[1.6rem]">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <CreateBtn />
      </div>
      <div className="collection mt-40 text-center">
        <h2 className="font-fraunces mb-5 text-[4.2rem]">our collection</h2>
        <div className="flex flex-col md:flex-row">
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
      <div className="pros max-h-[900px] text-light-cream text-center mt-16 p-5 rounded-xl bg-dark-grey-blue">
        <h2 className="font-fraunces py-4 text-[3.6rem]">Why choose us?</h2>
        <p className="font-barlow text-[1.6rem] text-grey py-4 md:max-w-[40rem] md:m-auto">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div className="flex flex-col gap-8 py-4 md:flex-row">
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
      </div>
      <div className="steps font-fraunces text-center mt-[80rem] md:mt-0 pb-8">
        <div className="flex flex-col md:flex-row mb-8">
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
        <CreateBtn />
      </div>
    </div>
  );
}

export default Home;
