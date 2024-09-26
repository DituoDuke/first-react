import { Link } from "react-router-dom";

const Home = () => {
  const nome = localStorage.getItem("nome");
  if (nome) {
    return (
      <>
        <h1>Bem Vindo {nome}</h1>
        <Link to={"/games"}>
          <h3>Jogos</h3>
        </Link>
      </>
    );
  } else {
    window.open("/login", "_self");
  }
};

export default Home;
