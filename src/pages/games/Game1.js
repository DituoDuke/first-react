import React, { useState } from "react";

function Game1() {
  const [blusa1, setBlusa1] = useState("");
  const [blusa2, setBlusa2] = useState("");
  const [blusa3, setBlusa3] = useState("");
  const [blusa4, setBlusa4] = useState("");
  const [blusa5, setBlusa5] = useState("");

  const [nome1, setNome1] = useState("");
  const [nome2, setNome2] = useState("");
  const [nome3, setNome3] = useState("");
  const [nome4, setNome4] = useState("");
  const [nome5, setNome5] = useState("");

  const [esqueceu1, setEsqueceu1] = useState("");
  const [esqueceu2, setEsqueceu2] = useState("");
  const [esqueceu3, setEsqueceu3] = useState("");
  const [esqueceu4, setEsqueceu4] = useState("");
  const [esqueceu5, setEsqueceu5] = useState("");

  const [pagamento1, setPagamento1] = useState("");
  const [pagamento2, setPagamento2] = useState("");
  const [pagamento3, setPagamento3] = useState("");
  const [pagamento4, setPagamento4] = useState("");
  const [pagamento5, setPagamento5] = useState("");

  const [veioCom1, setVeioCom1] = useState("");
  const [veioCom2, setVeioCom2] = useState("");
  const [veioCom3, setVeioCom3] = useState("");
  const [veioCom4, setVeioCom4] = useState("");
  const [veioCom5, setVeioCom5] = useState("");

  const checkAnswers = () => {
    const respostasCorretas = {
      blusas: ["verde", "amarela", "azul", "branca", "vermelha"],
      nomes: ["juliana", "aline", "carol", "fernanda", "natalia"],
      esqueceu: ["amaciante", "frutas", "pão", "presunto", "leite"],
      pagamentos: ["cheque", "vale", "débito", "crédito", "dinheiro"],
      veioCom: ["namorado", "marido", "mãe", "irmã", "filho"],
    };

    const blusas = [blusa1, blusa2, blusa3, blusa4, blusa5];
    const nomes = [nome1, nome2, nome3, nome4, nome5];
    const esqueceu = [esqueceu1, esqueceu2, esqueceu3, esqueceu4, esqueceu5];
    const pagamentos = [
      pagamento1,
      pagamento2,
      pagamento3,
      pagamento4,
      pagamento5,
    ];
    const veioCom = [veioCom1, veioCom2, veioCom3, veioCom4, veioCom5];

    const isCorrect =
      JSON.stringify(blusas) === JSON.stringify(respostasCorretas.blusas) &&
      JSON.stringify(nomes) === JSON.stringify(respostasCorretas.nomes) &&
      JSON.stringify(esqueceu) === JSON.stringify(respostasCorretas.esqueceu) &&
      JSON.stringify(pagamentos) ===
        JSON.stringify(respostasCorretas.pagamentos) &&
      JSON.stringify(veioCom) === JSON.stringify(respostasCorretas.veioCom);

    if (isCorrect) {
      alert("Parabéns! Tudo está correto.");
    } else {
      localStorage.setItem("comprasmes", true);
    }
  };

  const mark = (e) => {
    if (e.target.style.color === "black" || !e.target.style.color) {
      e.target.style.textDecorationLine = "line-through";
      e.target.style.color = "grey";
    } else if (e.target.style.color === "grey") {
      e.target.style.textDecorationLine = "";
      e.target.style.color = "black";
    }
  };

  const nome = localStorage.getItem("nome");

  if (!nome) {
    window.open("/login", "_self");
  } else {
    const getBgColor = (blusa) => {
      switch (blusa) {
        case "verde":
          return "#26ad08";
        case "amarela":
          return "#ecdc17";
        case "azul":
          return "#4749b9";
        case "branca":
          return "white";
        case "vermelha":
          return " #e04141 ";
        default:
          return "transparent";
      }
    };

    return (
      <>
        <div className="game-container">
          <div
            className="caixa"
            style={{ backgroundColor: getBgColor(blusa1) }}
          >
            <h3>Caixa #1</h3>
            <div>
              Blusa:
              <select onChange={(e) => setBlusa1(e.target.value.toLowerCase())}>
                <option value=""></option>
                <option value="verde">Verde</option>
                <option value="amarela">Amarela</option>
                <option value="azul">Azul</option>
                <option value="branca">Branca</option>
                <option value="vermelha">Vermelha</option>
              </select>
            </div>
            <div>
              Nome:
              <select onChange={(e) => setNome1(e.target.value.toLowerCase())}>
                <option value=""></option>
                <option value="juliana">Juliana</option>
                <option value="aline">Aline</option>
                <option value="carol">Carol</option>
                <option value="fernanda">Fernanda</option>
                <option value="natalia">Natalia</option>
              </select>
            </div>
            <div>
              Esqueceu:
              <select
                onChange={(e) => setEsqueceu1(e.target.value.toLowerCase())}
              >
                <option value=""></option>
                <option value="amaciante">Amaciante</option>
                <option value="frutas">Frutas</option>
                <option value="pão">Pão</option>
                <option value="presunto">Presunto</option>
                <option value="leite">Leite</option>
              </select>
            </div>
            <div>
              Pagamento:
              <select
                onChange={(e) => setPagamento1(e.target.value.toLowerCase())}
              >
                <option value=""></option>
                <option value="cheque">Cheque</option>
                <option value="vale">Vale</option>
                <option value="débito">Débito</option>
                <option value="crédito">Crédito</option>
                <option value="dinheiro">Dinheiro</option>
              </select>
            </div>
            <div>
              Veio com:
              <select
                onChange={(e) => setVeioCom1(e.target.value.toLowerCase())}
              >
                <option value=""></option>
                <option value="namorado">Namorado</option>
                <option value="marido">Marido</option>
                <option value="mãe">Mãe</option>
                <option value="irmã">Irmã</option>
                <option value="filho">Filho</option>
              </select>
            </div>
          </div>
          <div
            className="caixa"
            style={{ backgroundColor: getBgColor(blusa2) }}
          >
            <h3>Caixa #2</h3>
            <div>
              Blusa:
              <select onChange={(e) => setBlusa2(e.target.value.toLowerCase())}>
                <option value=""></option>
                <option value="verde">Verde</option>
                <option value="amarela">Amarela</option>
                <option value="azul">Azul</option>
                <option value="branca">Branca</option>
                <option value="vermelha">Vermelha</option>
              </select>
            </div>
            <div>
              Nome:
              <select onChange={(e) => setNome2(e.target.value.toLowerCase())}>
                <option value=""></option>
                <option value="juliana">Juliana</option>
                <option value="aline">Aline</option>
                <option value="carol">Carol</option>
                <option value="fernanda">Fernanda</option>
                <option value="natalia">Natalia</option>
              </select>
            </div>
            <div>
              Esqueceu:
              <select
                onChange={(e) => setEsqueceu2(e.target.value.toLowerCase())}
              >
                <option value=""></option>
                <option value="amaciante">Amaciante</option>
                <option value="frutas">Frutas</option>
                <option value="pão">Pão</option>
                <option value="presunto">Presunto</option>
                <option value="leite">Leite</option>
              </select>
            </div>
            <div>
              Pagamento:
              <select
                onChange={(e) => setPagamento2(e.target.value.toLowerCase())}
              >
                <option value=""></option>
                <option value="cheque">Cheque</option>
                <option value="vale">Vale</option>
                <option value="débito">Débito</option>
                <option value="crédito">Crédito</option>
                <option value="dinheiro">Dinheiro</option>
              </select>
            </div>
            <div>
              Veio com:
              <select
                onChange={(e) => setVeioCom2(e.target.value.toLowerCase())}
              >
                <option value=""></option>
                <option value="namorado">Namorado</option>
                <option value="marido">Marido</option>
                <option value="mãe">Mãe</option>
                <option value="irmã">Irmã</option>
                <option value="filho">Filho</option>
              </select>
            </div>
          </div>

          {/* Caixa 3 */}
          <div
            className="caixa"
            style={{ backgroundColor: getBgColor(blusa3) }}
          >
            <h3>Caixa #3</h3>
            <div>
              Blusa:
              <select onChange={(e) => setBlusa3(e.target.value.toLowerCase())}>
                <option value=""></option>
                <option value="verde">Verde</option>
                <option value="amarela">Amarela</option>
                <option value="azul">Azul</option>
                <option value="branca">Branca</option>
                <option value="vermelha">Vermelha</option>
              </select>
            </div>
            <div>
              Nome:
              <select onChange={(e) => setNome3(e.target.value.toLowerCase())}>
                <option value=""></option>
                <option value="juliana">Juliana</option>
                <option value="aline">Aline</option>
                <option value="carol">Carol</option>
                <option value="fernanda">Fernanda</option>
                <option value="natalia">Natalia</option>
              </select>
            </div>
            <div>
              Esqueceu:
              <select
                onChange={(e) => setEsqueceu3(e.target.value.toLowerCase())}
              >
                <option value=""></option>
                <option value="amaciante">Amaciante</option>
                <option value="frutas">Frutas</option>
                <option value="pão">Pão</option>
                <option value="presunto">Presunto</option>
                <option value="leite">Leite</option>
              </select>
            </div>
            <div>
              Pagamento:
              <select
                onChange={(e) => setPagamento3(e.target.value.toLowerCase())}
              >
                <option value=""></option>
                <option value="cheque">Cheque</option>
                <option value="vale">Vale</option>
                <option value="débito">Débito</option>
                <option value="crédito">Crédito</option>
                <option value="dinheiro">Dinheiro</option>
              </select>
            </div>
            <div>
              Veio com:
              <select
                onChange={(e) => setVeioCom3(e.target.value.toLowerCase())}
              >
                <option value=""></option>
                <option value="namorado">Namorado</option>
                <option value="marido">Marido</option>
                <option value="mãe">Mãe</option>
                <option value="irmã">Irmã</option>
                <option value="filho">Filho</option>
              </select>
            </div>
          </div>

          {/* Caixa 4 */}
          <div
            className="caixa"
            style={{ backgroundColor: getBgColor(blusa4) }}
          >
            <h3>Caixa #4</h3>
            <div>
              Blusa:
              <select onChange={(e) => setBlusa4(e.target.value.toLowerCase())}>
                <option value=""></option>
                <option value="verde">Verde</option>
                <option value="amarela">Amarela</option>
                <option value="azul">Azul</option>
                <option value="branca">Branca</option>
                <option value="vermelha">Vermelha</option>
              </select>
            </div>
            <div>
              Nome:
              <select onChange={(e) => setNome4(e.target.value.toLowerCase())}>
                <option value=""></option>
                <option value="juliana">Juliana</option>
                <option value="aline">Aline</option>
                <option value="carol">Carol</option>
                <option value="fernanda">Fernanda</option>
                <option value="natalia">Natalia</option>
              </select>
            </div>
            <div>
              Esqueceu:
              <select
                onChange={(e) => setEsqueceu4(e.target.value.toLowerCase())}
              >
                <option value=""></option>
                <option value="amaciante">Amaciante</option>
                <option value="frutas">Frutas</option>
                <option value="pão">Pão</option>
                <option value="presunto">Presunto</option>
                <option value="leite">Leite</option>
              </select>
            </div>
            <div>
              Pagamento:
              <select
                onChange={(e) => setPagamento4(e.target.value.toLowerCase())}
              >
                <option value=""></option>
                <option value="cheque">Cheque</option>
                <option value="vale">Vale</option>
                <option value="débito">Débito</option>
                <option value="crédito">Crédito</option>
                <option value="dinheiro">Dinheiro</option>
              </select>
            </div>
            <div>
              Veio com:
              <select
                onChange={(e) => setVeioCom4(e.target.value.toLowerCase())}
              >
                <option value=""></option>
                <option value="namorado">Namorado</option>
                <option value="marido">Marido</option>
                <option value="mãe">Mãe</option>
                <option value="irmã">Irmã</option>
                <option value="filho">Filho</option>
              </select>
            </div>
          </div>

          {/* Caixa 5 */}
          <div
            className="caixa"
            style={{ backgroundColor: getBgColor(blusa5) }}
          >
            <h3>Caixa #5</h3>
            <div>
              Blusa:
              <select onChange={(e) => setBlusa5(e.target.value.toLowerCase())}>
                <option value=""></option>
                <option value="verde">Verde</option>
                <option value="amarela">Amarela</option>
                <option value="azul">Azul</option>
                <option value="branca">Branca</option>
                <option value="vermelha">Vermelha</option>
              </select>
            </div>
            <div>
              Nome:
              <select onChange={(e) => setNome5(e.target.value.toLowerCase())}>
                <option value=""></option>
                <option value="juliana">Juliana</option>
                <option value="aline">Aline</option>
                <option value="carol">Carol</option>
                <option value="fernanda">Fernanda</option>
                <option value="natalia">Natalia</option>
              </select>
            </div>
            <div>
              Esqueceu:
              <select
                onChange={(e) => setEsqueceu5(e.target.value.toLowerCase())}
              >
                <option value=""></option>
                <option value="amaciante">Amaciante</option>
                <option value="frutas">Frutas</option>
                <option value="pão">Pão</option>
                <option value="presunto">Presunto</option>
                <option value="leite">Leite</option>
              </select>
            </div>
            <div>
              Pagamento:
              <select
                onChange={(e) => setPagamento5(e.target.value.toLowerCase())}
              >
                <option value=""></option>
                <option value="cheque">Cheque</option>
                <option value="vale">Vale</option>
                <option value="débito">Débito</option>
                <option value="crédito">Crédito</option>
                <option value="dinheiro">Dinheiro</option>
              </select>
            </div>
            <div>
              Veio com:
              <select
                onChange={(e) => setVeioCom5(e.target.value.toLowerCase())}
              >
                <option value=""></option>
                <option value="namorado">Namorado</option>
                <option value="marido">Marido</option>
                <option value="mãe">Mãe</option>
                <option value="irmã">Irmã</option>
                <option value="filho">Filho</option>
              </select>
            </div>
          </div>
        </div>

        <div className="dicas-container">
          <div className="dicas1">
            <p className="dicas-text" onClick={mark}>
              Quem esqueceu o Pão está exatamente à esquerda de quem veio fazer
              compras com a Irmã.
            </p>
            <p className="dicas-text" onClick={mark}>
              A mulher com a blusa Azul está em algum caixa à esquerda de quem
              trouxe o Filho.
            </p>
            <p className="dicas-text" onClick={mark}>
              A moça que veio com o Marido vai pagar as compras usando Vale.
            </p>
            <p className="dicas-text" onClick={mark}>
              O Namorado está acompanhando a mulher que está no caixa 1.
            </p>
            <p className="dicas-text" onClick={mark}>
              Quem vai pagar usando o cartão de Crédito está no caixa 4.
            </p>
            <p className="dicas-text" onClick={mark}>
              A moça do último caixa vai pagar usando Dinheiro.
            </p>
            <p className="dicas-text" onClick={mark}>
              Quem veio com o Marido está exatamente à esquerda de quem esqueceu
              de comprar Pão.
            </p>
            <p className="dicas-text" onClick={mark}>
              Quem vai pagar com Cheque está no primeiro caixa.
            </p>
            <p className="dicas-text" onClick={mark}>
              A cliente que vai pagar com Cartão de Crédito esqueceu de comprar
              Presunto.
            </p>
            <p className="dicas-text" onClick={mark}>
              Quem esqueceu de comprar Leite vai pagar as compras com Dinheiro.
            </p>
          </div>
          <div className="dicas2">
            <p className="dicas-text" onClick={mark}>
              A mulher que esqueceu de comprar Amaciante está em um dos caixas
              das pontas.
            </p>
            <p className="dicas-text" onClick={mark}>
              A Fernanda está usando uma blusa Branca.
            </p>
            <p className="dicas-text" onClick={mark}>
              Quem veio de blusa Verde está em algum lugar à esquerda de quem
              veio com a blusa Azul.
            </p>
            <p className="dicas-text" onClick={mark}>
              A Aline veio fazer compras com o Marido.
            </p>
            <p className="dicas-text" onClick={mark}>
              A Carol está no caixa exatamente à direita de quem veio com o
              Marido.
            </p>
            <p className="dicas-text" onClick={mark}>
              A Natália está no último caixa.
            </p>
            <p className="dicas-text" onClick={mark}>
              A Juliana está exatamente à esquerda de quem veio com a blusa
              Amarela.
            </p>
            <p className="dicas-text" onClick={mark}>
              A moça de blusa Branca esqueceu de comprar Presunto.
            </p>
            <p className="dicas-text" onClick={mark}>
              A mulher da blusa Vermelha trouxe o Filho para o supermercado.
            </p>
          </div>
        </div>
        <button onClick={checkAnswers}>Verificar</button>
      </>
    );
  }
}

export default Game1;
