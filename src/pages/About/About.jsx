import React from "react";
import Hero from "../../components/Hero/Hero";

// import background from "../../assets/about/desktop/image-hero-whitecup.jpg";
// import barista from "../../assets/about/";

function About() {
  return (
    <div className="p-6">
      <div
        className={`min-h-[45rem] flex flex-col justify-center md:items-start items-center  px-16 text-center md:text-left rounded-xl bg-mobile-whitecup md:bg-desktop-whitecup bg-no-repeat bg-right bg-cover`}
      >
        <h2 className="text-light-cream text-[2.8rem] capitalize">about us</h2>
        <p
          className={`text-light-cream opacity-60 text-[1.5rem] md:max-w-[40rem]`}
        >
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
      <div className="flex flex-col md:flex-row"></div>
    </div>
  );
}

export default About;
