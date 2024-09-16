const Home = () => {
  const nome = localStorage.getItem("nome");
  if (nome) {
    return (
      <>
        <h1>Bem Vindo {nome}</h1>
      </>
    );
  } else {
    window.open("/login", "_self");
  }
};

export default Home;
