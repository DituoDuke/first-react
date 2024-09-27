import React from "react";

function Comprar() {
  return (
    <div>
      <form action="/resultado">
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            required
            style={{ width: "500px", padding: "10px", marginTop: "5px" }}
          />
        </div>

        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            required
            style={{ width: "500px", padding: "10px", marginTop: "5px" }}
          />
        </div>

        <div>
          <label htmlFor="payment">Forma de Pagamento:</label>
          <select
            id="payment"
            required
            style={{ width: "500px", padding: "10px", marginTop: "5px" }}
          >
            <option value="">Selecione</option>
            <option value="cartao_credito">Cartão de Crédito</option>
            <option value="cartao_debito">Cartão de Débito</option>
            <option value="boleto">Boleto</option>
            <option value="dinheiro">Dinheiro</option>
            <option value="pix">Pix</option>
          </select>
        </div>

        <input type="hidden" id="model" value="Scania R 580" />

        <button
          type="submit"
          className="button"
          style={{ borderRadius: 10 + "px", width: 200 + "px" }}
        >
          <h3>Comprar</h3>
        </button>
      </form>
    </div>
  );
}

export default Comprar;
