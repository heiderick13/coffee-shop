function ProsCard({ icon, pro, description }) {
  return (
    <div className="pro-card min-h-[450px] flex flex-col items-center justify-center bg-dark-cyan  rounded-xl ">
      <img src={icon} alt={(icon = "icon")} />
      <h3 className="font-fraunces text-[3.2rem]">{pro}</h3>
      <p className="font-barlow text-3xl">{description}</p>
    </div>
  );
}

export default ProsCard;
