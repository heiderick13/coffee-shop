function HeadQuarter({ icon, hq, address, city, state, phone }) {
  return (
    <div className="flex flex-col text-center mt-8">
      <img className="m-auto" src={icon} alt="Map location" />
      <h3 className="capitalize mt-6">{hq}</h3>
      <p>{address}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{phone}</p>
    </div>
  );
}

export default HeadQuarter;
