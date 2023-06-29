function HeadQuarter({ icon, hq, address, city, state, phone }) {
  return (
    <div className="flex flex-col text-center md:text-left mt-8 text-dark-grey-blue">
      <img className="m-auto" src={icon} alt="Map location" />
      <h3 className="font-fraunces text-[2.8rem] capitalize mt-6">{hq}</h3>
      <p className="font-barlow text-[1.6rem]">{address}</p>
      <p className="font-barlow text-[1.6rem]">{city}</p>
      <p className="font-barlow text-[1.6rem]">{state}</p>
      <p className="font-barlow text-[1.6rem]">{phone}</p>
    </div>
  );
}

export default HeadQuarter;
