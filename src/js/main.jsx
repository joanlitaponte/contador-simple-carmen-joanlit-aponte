import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./components/SecondsCounter";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../styles/index.css";

let segundos = 0;

const root = ReactDOM.createRoot(document.getElementById("root"));

// render 
root.render(<SecondsCounter segundos={segundos} />);

// actualiza cada segundo
setInterval(() => {
segundos++;
root.render(<SecondsCounter segundos={segundos} />);
}, 1000);
