function Hero({ bgImg, title, description }) {
  return (
    <div
      style={{
        backgroundImage: "url(" + bgImg + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={`min-h-[45rem] flex flex-col justify-center md:items-start items-center text-center md:text-left rounded-xl bg-black`}
    >
      <h2 className="text-light-cream text-[2.8rem] capitalize">{title}</h2>
      <p className="text-light-cream opacity-60 text-[1.5rem] px-16">
        {description}
      </p>
    </div>
  );
}

export default Hero;
