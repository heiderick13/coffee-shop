import "./Step.css";

function Step({ num, title, description }) {
  return (
    <div className="step mb-5">
      <h2 className="step__number pb-3">{num}</h2>
      <p className="step__title pb-3">{title}</p>
      <p className="barlow">{description}</p>
    </div>
  );
}

export default Step;
