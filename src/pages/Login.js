const Login = () => {
  const handleSubmit = () => {
    console.log("funciona!!");
  };
  return (
    <>
      <h1>Faça o Login</h1>
      <form>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" id="nome"></input>
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" id="senha"></input>
        </div>
        <input type="submit" value={"Enviar"}></input>
      </form>
    </>
  );
};

export default Login;
