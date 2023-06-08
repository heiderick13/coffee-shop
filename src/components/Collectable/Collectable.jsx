import React from "react";

function Collectable({ title, description, img }) {
  return (
    <div className="collection-item">
      <img src={img} alt="Producto Photo" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Collectable;
