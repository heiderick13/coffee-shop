import React from "react";

import commitmentImg from "../../assets/about/desktop/image-commitment.jpg";
import qualityImg from "../../assets/about/mobile/image-quality.jpg";
import HeadQuarter from "../../components/HeadQuarter/HeadQuarter";

import uk from "../../assets/about/desktop/illustration-uk.svg";
import canada from "../../assets/about/desktop/illustration-canada.svg";
import australia from "../../assets/about/desktop/illustration-australia.svg";

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
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8 mt-32 md:mt-16">
        <img
          className="rounded-xl max-h-[40rem]"
          src={commitmentImg}
          alt="Our Barista doing latte art"
        />
        <div className="px-8 text-center md:text-left md:max-w-3xl">
          <h3 className="font-fraunces text-[2.4rem] text-dark-grey-blue">
            Our commitment
          </h3>
          <p className="font-barlow text-[1.5rem]">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center md:justify-between rounded-xl px-10 bg-dark-grey-blue mt-[40%] ">
        <img
          className="rounded-xl -translate-y-1/2 md:-translate-y-1/3 md:aspect-[2/3] md:max-h-[40rem]"
          src={qualityImg}
          alt=""
        />
        <div className="text-center md:text-left md:max-w-3xl text-light-cream -translate-y-1/4 md:translate-y-0">
          <h3 className="font-fraunces text-[2.4rem] pb-12">
            Uncompromising quality
          </h3>
          <p className="font-barlow text-[1.5rem]">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast
          </p>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-[2.4rem] font-fraunces text-grey text-center md:text-left mb-8">
          Our Headquartes
        </h3>
        <div className="flex flex-col md:flex-row">
          <HeadQuarter
            icon={uk}
            hq={"united kingdom"}
            address={"68  Asfordby Rd"}
            city={"Alcaston"}
            state={"SY6 1YA"}
            phone={"+44 1241 918425"}
          />
          <HeadQuarter
            icon={canada}
            hq={"canada"}
            address={"1528  Eglinton Avenue"}
            city={"Toronto"}
            state={"Ontario M4P 1A6"}
            phone={"+1 416 485 2997"}
          />
          <HeadQuarter
            icon={australia}
            hq={"australia"}
            address={"36 Swanston Street"}
            city={"Kewell"}
            state={"Victoria"}
            phone={"+61 4 9928 3629"}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
