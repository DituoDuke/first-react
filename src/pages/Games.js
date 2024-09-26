import React from "react";
import { Link } from "react-router-dom";

function Games() {
  const nome = localStorage.getItem("nome");
  if (nome) {
    return (
      <div>
        <h1>ESCOLHA O JOGO</h1>
        <Link to={"/games/compras-do-mes"}>Compras do mês</Link>
      </div>
    );
  } else {
    window.open("/login", "_self");
  }
}

export default Games;
