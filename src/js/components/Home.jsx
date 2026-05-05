import React from "react";

const Home = ({ segundos }) => {

const numero = String(segundos).padStart(6, "0");

return ( <div className="contenedor-principal">

```
  <div className="contador">

   
    <div className="caja icono">
      <i className="fa-solid fa-clock"></i>
    </div>

   
   
    {numero.split("").map((digito, i) => (
      <div className="caja" key={i}>
        {digito}
      </div>
    ))}

  </div>

</div>
);
};

export default Home;
