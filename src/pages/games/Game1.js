import React, { useState } from "react";

const Game1 = () => {
  const [blusa1, setBlusa1] = useState("");
  const [nome1, setNome1] = useState("");
  const [esqueceu1, setEsqueceu1] = useState("");
  const [pagamento1, setPagamento1] = useState("");
  const [veioCom1, setVeioCom1] = useState("");

  const [blusa2, setBlusa2] = useState("");
  const [nome2, setNome2] = useState("");
  const [esqueceu2, setEsqueceu2] = useState("");
  const [pagamento2, setPagamento2] = useState("");
  const [veioCom2, setVeioCom2] = useState("");

  const [blusa3, setBlusa3] = useState("");
  const [nome3, setNome3] = useState("");
  const [esqueceu3, setEsqueceu3] = useState("");
  const [pagamento3, setPagamento3] = useState("");
  const [veioCom3, setVeioCom3] = useState("");

  const [blusa4, setBlusa4] = useState("");
  const [nome4, setNome4] = useState("");
  const [esqueceu4, setEsqueceu4] = useState("");
  const [pagamento4, setPagamento4] = useState("");
  const [veioCom4, setVeioCom4] = useState("");

  const [blusa5, setBlusa5] = useState("");
  const [nome5, setNome5] = useState("");
  const [esqueceu5, setEsqueceu5] = useState("");
  const [pagamento5, setPagamento5] = useState("");
  const [veioCom5, setVeioCom5] = useState("");

  const getBgColor = (blusa) => {
    switch (blusa) {
      case "verde":
        return "#dff0d8";
      case "amarela":
        return "#fcf8e3";
      case "azul":
        return "#d9edf7";
      case "branca":
        return "#ffffff";
      case "vermelha":
        return "#f2dede";
      default:
        return "#ffffff";
    }
  };

  const checkAnswers = () => {
    // lógica para verificar respostas
  };

  return (
    <div className="game-container">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          fontWeight: "bold",
        }}
      >
        <div></div>
        <div>Caixa #1</div>
        <div>Caixa #2</div>
        <div>Caixa #3</div>
        <div>Caixa #4</div>
        <div>Caixa #5</div>
      </div>

      {/* Blusas */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
        <div>Blusa</div>
        <select
          style={{ backgroundColor: getBgColor(blusa1) }}
          onChange={(e) => setBlusa1(e.target.value.toLowerCase())}
        >
          <option value=""></option>
          <option value="verde">Verde</option>
          <option value="amarela">Amarela</option>
          <option value="azul">Azul</option>
          <option value="branca">Branca</option>
          <option value="vermelha">Vermelha</option>
        </select>
        <select
          style={{ backgroundColor: getBgColor(blusa2) }}
          onChange={(e) => setBlusa2(e.target.value.toLowerCase())}
        >
          <option value=""></option>
          <option value="verde">Verde</option>
          <option value="amarela">Amarela</option>
          <option value="azul">Azul</option>
          <option value="branca">Branca</option>
          <option value="vermelha">Vermelha</option>
        </select>
        <select
          style={{ backgroundColor: getBgColor(blusa3) }}
          onChange={(e) => setBlusa3(e.target.value.toLowerCase())}
        >
          <option value=""></option>
          <option value="verde">Verde</option>
          <option value="amarela">Amarela</option>
          <option value="azul">Azul</option>
          <option value="branca">Branca</option>
          <option value="vermelha">Vermelha</option>
        </select>
        <select
          style={{ backgroundColor: getBgColor(blusa4) }}
          onChange={(e) => setBlusa4(e.target.value.toLowerCase())}
        >
          <option value=""></option>
          <option value="verde">Verde</option>
          <option value="amarela">Amarela</option>
          <option value="azul">Azul</option>
          <option value="branca">Branca</option>
          <option value="vermelha">Vermelha</option>
        </select>
        <select
          style={{ backgroundColor: getBgColor(blusa5) }}
          onChange={(e) => setBlusa5(e.target.value.toLowerCase())}
        >
          <option value=""></option>
          <option value="verde">Verde</option>
          <option value="amarela">Amarela</option>
          <option value="azul">Azul</option>
          <option value="branca">Branca</option>
          <option value="vermelha">Vermelha</option>
        </select>
      </div>

      {/* Nomes */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
        <div>Nome</div>
        <select onChange={(e) => setNome1(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="juliana">Juliana</option>
          <option value="aline">Aline</option>
          <option value="carol">Carol</option>
          <option value="fernanda">Fernanda</option>
          <option value="natalia">Natalia</option>
        </select>
        <select onChange={(e) => setNome2(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="juliana">Juliana</option>
          <option value="aline">Aline</option>
          <option value="carol">Carol</option>
          <option value="fernanda">Fernanda</option>
          <option value="natalia">Natalia</option>
        </select>
        <select onChange={(e) => setNome3(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="juliana">Juliana</option>
          <option value="aline">Aline</option>
          <option value="carol">Carol</option>
          <option value="fernanda">Fernanda</option>
          <option value="natalia">Natalia</option>
        </select>
        <select onChange={(e) => setNome4(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="juliana">Juliana</option>
          <option value="aline">Aline</option>
          <option value="carol">Carol</option>
          <option value="fernanda">Fernanda</option>
          <option value="natalia">Natalia</option>
        </select>
        <select onChange={(e) => setNome5(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="juliana">Juliana</option>
          <option value="aline">Aline</option>
          <option value="carol">Carol</option>
          <option value="fernanda">Fernanda</option>
          <option value="natalia">Natalia</option>
        </select>
      </div>

      {/* Esqueceu */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
        <div>Esqueceu</div>
        <select onChange={(e) => setEsqueceu1(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="amaciante">Amaciante</option>
          <option value="frutas">Frutas</option>
          <option value="pão">Pão</option>
          <option value="presunto">Presunto</option>
          <option value="leite">Leite</option>
        </select>
        <select onChange={(e) => setEsqueceu2(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="amaciante">Amaciante</option>
          <option value="frutas">Frutas</option>
          <option value="pão">Pão</option>
          <option value="presunto">Presunto</option>
          <option value="leite">Leite</option>
        </select>
        <select onChange={(e) => setEsqueceu3(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="amaciante">Amaciante</option>
          <option value="frutas">Frutas</option>
          <option value="pão">Pão</option>
          <option value="presunto">Presunto</option>
          <option value="leite">Leite</option>
        </select>
        <select onChange={(e) => setEsqueceu4(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="amaciante">Amaciante</option>
          <option value="frutas">Frutas</option>
          <option value="pão">Pão</option>
          <option value="presunto">Presunto</option>
          <option value="leite">Leite</option>
        </select>
        <select onChange={(e) => setEsqueceu5(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="amaciante">Amaciante</option>
          <option value="frutas">Frutas</option>
          <option value="pão">Pão</option>
          <option value="presunto">Presunto</option>
          <option value="leite">Leite</option>
        </select>
      </div>

      {/* Pagamento */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
        <div>Pagamento</div>
        <select onChange={(e) => setPagamento1(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="cheque">Cheque</option>
          <option value="vale">Vale</option>
          <option value="débito">Débito</option>
          <option value="crédito">Crédito</option>
          <option value="dinheiro">Dinheiro</option>
        </select>
        <select onChange={(e) => setPagamento2(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="cheque">Cheque</option>
          <option value="vale">Vale</option>
          <option value="débito">Débito</option>
          <option value="crédito">Crédito</option>
          <option value="dinheiro">Dinheiro</option>
        </select>
        <select onChange={(e) => setPagamento3(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="cheque">Cheque</option>
          <option value="vale">Vale</option>
          <option value="débito">Débito</option>
          <option value="crédito">Crédito</option>
          <option value="dinheiro">Dinheiro</option>
        </select>
        <select onChange={(e) => setPagamento4(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="cheque">Cheque</option>
          <option value="vale">Vale</option>
          <option value="débito">Débito</option>
          <option value="crédito">Crédito</option>
          <option value="dinheiro">Dinheiro</option>
        </select>
        <select onChange={(e) => setPagamento5(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="cheque">Cheque</option>
          <option value="vale">Vale</option>
          <option value="débito">Débito</option>
          <option value="crédito">Crédito</option>
          <option value="dinheiro">Dinheiro</option>
        </select>
      </div>

      {/* Veio com */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
        <div>Veio com</div>
        <select onChange={(e) => setVeioCom1(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="namorado">Namorado</option>
          <option value="marido">Marido</option>
          <option value="mãe">Mãe</option>
          <option value="irmã">Irmã</option>
          <option value="filho">Filho</option>
        </select>
        <select onChange={(e) => setVeioCom2(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="namorado">Namorado</option>
          <option value="marido">Marido</option>
          <option value="mãe">Mãe</option>
          <option value="irmã">Irmã</option>
          <option value="filho">Filho</option>
        </select>
        <select onChange={(e) => setVeioCom3(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="namorado">Namorado</option>
          <option value="marido">Marido</option>
          <option value="mãe">Mãe</option>
          <option value="irmã">Irmã</option>
          <option value="filho">Filho</option>
        </select>
        <select onChange={(e) => setVeioCom4(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="namorado">Namorado</option>
          <option value="marido">Marido</option>
          <option value="mãe">Mãe</option>
          <option value="irmã">Irmã</option>
          <option value="filho">Filho</option>
        </select>
        <select onChange={(e) => setVeioCom5(e.target.value.toLowerCase())}>
          <option value=""></option>
          <option value="namorado">Namorado</option>
          <option value="marido">Marido</option>
          <option value="mãe">Mãe</option>
          <option value="irmã">Irmã</option>
          <option value="filho">Filho</option>
        </select>
      </div>

      <button onClick={checkAnswers}>Verificar</button>
    </div>
  );
};

export default Game1;
