function Step({ num, title, description }) {
  return (
    <div className="step text-dark-grey-blue mb-5 px-6">
      <h2 className="pb-3 text-pale-orange text-[8rem]">{num}</h2>
      <p className="text-[3.2rem] pb-3">{title}</p>
      <p className="font-barlow text-[1.5rem] ">{description}</p>
    </div>
  );
}

export default Step;
