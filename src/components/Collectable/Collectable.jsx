import "./Collectable.css";

function Collectable({ title, description, img }) {
  return (
    <div className="collection-item lh-lg mb-4">
      <img src={img} alt="Producto Photo" />
      <h3 className="collection-item__name fraunces">{title}</h3>
      <p className="collection-item__description barlow">{description}</p>
    </div>
  );
}

export default Collectable;
