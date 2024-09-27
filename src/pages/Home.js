import { Link } from "react-router-dom";

const Home = () => {
  const nome = localStorage.getItem("nome");
  if (nome) {
    return (
      <>
        <h1>Bem Vindo {nome}</h1>
        <button
          onClick={() => (window.location = "/games")}
          style={{ borderRadius: 10 + "px", width: 200 + "px" }}
        >
          <h3>Jogos</h3>
        </button>
      </>
    );
  } else {
    window.open("/login", "_self");
  }
};

export default Home;
