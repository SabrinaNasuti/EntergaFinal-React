import itemDetailStyle from "./ItemDetail.module/ItemDetail.module.css";

export const ItemDetail = ({ id, name, price, image, section }) => {
  

  return (
    <div className="border m-2 ">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <img src={image} alt="" className={itemDetailStyle.image} />
          <div className="card-body btn-outline-dark">
            <p>
              Todos nuestros productos estan hechos con materia prima de primera
              calidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
