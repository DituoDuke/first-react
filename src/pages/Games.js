import React from "react";
import { Link } from "react-router-dom";

function Games() {
  const nome = localStorage.getItem("nome");
  const game1 = localStorage.getItem("comprasmes");
  if (nome) {
    return (
      <div>
        <h1>ESCOLHA O JOGO</h1>
        <button
          onClick={() => (window.location = "/games/compras-do-mes")}
          style={{
            borderRadius: 10 + "px",
            width: 200 + "px",
          }}
        >
          <h3>1 - Compras do mês</h3>
        </button>
        <button style={{ borderRadius: 10 + "px", width: 200 + "px" }}>
          <h3>2 - Futuro proximo</h3>
        </button>
      </div>
    );
  } else {
    window.open("/login", "_self");
  }
}

export default Games;
