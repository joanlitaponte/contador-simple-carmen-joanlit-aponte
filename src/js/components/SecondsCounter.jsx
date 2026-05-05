import React from "react";

const SecondsCounter = ({ segundos }) => {

const numero = String(segundos).padStart(6, "0");

return ( <div className="contenedor">

    <h1 className="titulo">⏱️ Contador de Segundos</h1>

  <div className="reloj">

    

    <div className="caja icono">
      <i className="fa-solid fa-clock"></i>
    </div>


    
    {numero.split("").map((num, i) => (
      <div key={i} className="caja">
        {num}
      </div>
    ))}

  </div>

</div>
);
};

export default SecondsCounter;
