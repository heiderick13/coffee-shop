import "./ProsCard.css";

function ProsCard({ icon, pro, description }) {
  return (
    <div className="pro-card rounded-4 text-center">
      <img src={icon} alt={(icon = "icon")} />
      <h2 className="fraunces">{pro}</h2>
      <p className="barlow">{description}</p>
    </div>
  );
}

export default ProsCard;
