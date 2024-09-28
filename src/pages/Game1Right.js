import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import React from "react";

function Game1Right() {
  return (
    <div>
      <iframe
        width="420"
        height="345"
        src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <h1>VRUUUM CAMINHÃO</h1>
      <table className="table">
        <tr>
          <td colSpan={3} className="bloco azul"></td>
          <td rowSpan={2} className="bloco"></td>
          <td colSpan={5} rowSpan={3} className="bloco azul"></td>
        </tr>
        <tr>
          <td colSpan={2} className="bloco verm"></td>

          <td rowSpan={2} className="bloco azul"></td>
        </tr>
        <tr>
          <td colSpan={2} className="bloco azul"></td>
          <td className="bloco azul"></td>
        </tr>
        <tr>
          <td className="bloco preto"></td>
          <td className="bloco"></td>
          <td className="bloco preto"></td>
          <td colSpan={2} className="bloco"></td>
          <td className="bloco preto"></td>
          <td className="bloco"></td>
          <td className="bloco"></td>
          <td className="bloco preto"></td>
        </tr>
      </table>

      <div>
        <ul className="ul">
          <h3>COMPONENTES DO CAMINHÃO VRUM VRUM:</h3>
          <li>
            Chassi: Aço de alta resistência da <strong>Scania</strong>, modelo{" "}
            <strong>R 580</strong>
          </li>
          <li>
            Motor: Diesel turboalimentado <strong>Cummins ISX15</strong>, 400
            HP, 12 cilindros
          </li>
          <li>
            Transmissão: Manual <strong>Eaton Fuller</strong>, 10 marchas com
            overdrive
          </li>
          <li>
            Suspensão: Pneumática <strong>Bendix</strong>, modelo{" "}
            <strong>EC-30</strong>
          </li>
          <li>
            Capacidade de carga útil: 15.000 kg (pneu{" "}
            <strong>Michelin XDE2</strong>) com 10R22.5
          </li>
          <li>
            Freios: A disco ventilados <strong>Wabco</strong>, com sistema
            antibloqueio (ABS)
          </li>
          <li>
            Tanque de combustível: 300 litros <strong>Dometic</strong>, com
            sistema de filtragem <strong>Racor 900MA</strong>
          </li>
          <li>
            Faróis: LED adaptativos <strong>Osram Night Breaker Laser</strong>
          </li>
          <li>
            Cabine: Isolamento acústico <strong>Harman Kardon</strong>,
            climatização automatizada <strong>Webasto</strong>
          </li>
        </ul>
      </div>

      <ol className="ul">
        <hr>Porque comprar:</hr>
        <li>
          Alta eficiência de combustível, com consumo médio de 6 km/l em
          estrada, utilizando tecnologia <strong>Bosch</strong> de injeção
          eletrônica.
        </li>
        <li>
          Durabilidade do chassi e motor, com garantia de até 5 anos ou 500.000
          km, assegurada pela <strong>Scania</strong>.
        </li>
        <li>
          Redução de custos operacionais com manutenção simplificada e peças de
          reposição acessíveis da <strong>TRP</strong>.
        </li>
        <li>
          Capacidade de tração superior, ideal para condições de carga pesada e
          terrenos difíceis, com pneus <strong>Michelin XZY</strong>.
        </li>
        <li>
          Equipado com tecnologia avançada de telemetria{" "}
          <strong>Teletrac Navman</strong> para monitoramento em tempo real da
          performance.
        </li>
      </ol>
      <button
        onClick={() => (window.location = "/compra")}
        style={{
          borderRadius: 10 + "px",
          width: 200 + "px",
        }}
      >
        <h2>Comprar</h2>
      </button>
    </div>
  );
}

export default Game1Right;
