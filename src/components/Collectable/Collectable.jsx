function Collectable({ title, description, img }) {
  return (
    <div className="collection-item text-dark-grey-blue mb-6 px-6">
      <img src={img} alt="Producto Photo" />
      <h3 className="font-fraunces text-[2.4rem]">{title}</h3>
      <p className="font-barlow text-[1.5rem]">{description}</p>
    </div>
  );
}

export default Collectable;
