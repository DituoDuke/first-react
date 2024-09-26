import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Link } from "react-router-dom";
import axios from "../api/axios";
const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const tempUser = "tito",
    tempSenha = "1234";

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [nome, senha]);

  const handleSubmit = async (e) => {
    if (nome === tempUser && senha === tempSenha) {
      localStorage.setItem("nome", "Tito");
      window.open("/", "_self");
    }
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        { nome, senha },
        {
          headers: { "Content-Type": "aplication/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      setNome("");
      setSenha("");
      setSuccess(true);
    } catch (err) {}
  };
  return (
    <>
      {success ? (
        <section>
          <h1>voce esta logado {localStorage.getItem("nome")}</h1>
          <Link to={"/"}>Home</Link>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Faça o Login</h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                placeholder="Nome"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setNome(e.target.value)}
                value={nome}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                placeholder="Senha"
                onChange={(e) => setSenha(e.target.value)}
                value={senha}
                required
              ></input>
            </div>
            <button>Logar</button>
          </form>
          <p>
            Precisa de uma conta?
            <br />
            <span>
              <Link to={"/register"}>Registrar</Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
