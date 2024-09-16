import React, { useState, useRef, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

//Constante que usaremos para defenir o necessario para o campo de usuario (minimo 3 digitos e maximo 23) sendo limitado pelos caracteres especificados a baixo
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
//Constante que usaremos para definir o necessario para o campo de senha sendo necesario uma letra maiuscula, um caracter especial e um minusculo pelo menos, minimo 8 caracter maximo 24
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}$/;

function Register() {
  const nomeRef = useRef();
  const errRef = useRef();

  const [nome, setNome] = useState("");
  const [nomeValido, setNomeValido] = useState(false);
  const [nomeFoco, setNomeFoco] = useState(false);

  const [senha, setSenha] = useState("");
  const [senhaValida, setSenhaValida] = useState(false);
  const [senhaFoco, setSenhaFoco] = useState(false);

  const [matchSenha, setMatchSenha] = useState("");
  const [matchValida, setMatchValida] = useState(false);
  const [matchFoco, setMatchFoco] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    nomeRef.current.focus();
  }, []);

  useEffect(() => {
    setNomeValido(USER_REGEX.test(nome));
  }, [nome]);

  useEffect(() => {
    setSenhaValida(PWD_REGEX.test(senha));
    const match = senha === matchSenha;
    setMatchValida(match);
  }, [senha, matchSenha]);

  useEffect(() => {
    setErrMsg("");
  }, [nome, senha, matchSenha]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Faça o registro</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">
              Nome:
              <span className={nomeValido ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={nomeValido || !nome ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="text"
              id="nome"
              ref={nomeRef}
              autoComplete="off"
              placeholder="Nome"
              aria-invalid={nomeValido ? "false" : "true"}
              aria-describedby="uinote"
              required
              onFocus={() => setNomeFoco(true)}
              onBlur={() => setNomeFoco(false)}
              onChange={(e) => setNome(e.target.value)}
            ></input>
            <p
              id="uidnote"
              className={
                nomeFoco && nome && !nomeValido ? "instructions" : "hide"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} /> 4 a 24 caracteres <br />
              Precisa começar com uma letra <br />
              Letras, numaros, sinais de separação (- e _) são permitidos
            </p>
          </div>
          <div>
            <label htmlFor="senha">
              Senha:
              <FontAwesomeIcon
                icon={faCheck}
                className={senhaValida ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={senhaValida || !senha ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="senha"
              onChange={(e) => setSenha(e.target.value)}
              value={senha}
              required
              placeholder="Senha"
              aria-invalid={senhaValida ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setSenhaFoco(true)}
              onBlur={() => setSenhaFoco(false)}
            />
            <p
              id="pwdnote"
              className={senhaFoco && !senhaValida ? "instructions" : "hide"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Entre 8 a 24 caracteres
              <br />
              Deve incluir pelo menos uma letra minuscula, maiuscula, um numero
              e um character especial
              <br />
              Caracteres especiais pemitidos:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
          </div>
          <div>
            <label htmlFor="confirmSenha">
              Confirmar senha:
              <FontAwesomeIcon
                icon={faCheck}
                className={matchValida && matchSenha ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={matchValida || !matchSenha ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="confirmSenha"
              onChange={(e) => setMatchSenha(e.target.value)}
              value={matchSenha}
              required
              placeholder="Confirmar Senha"
              aria-invalid={matchValida ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFoco(true)}
              onBlur={() => setMatchFoco(false)}
            />
            <p
              id="confirmnote"
              className={matchFoco && !matchValida ? "instructions" : "hide"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Precisa ser igual a senha anterior
            </p>
          </div>

          <button
            disabled={
              !nomeValido || !senhaValida || !matchValida ? true : false
            }
          >
            Inscrever-se
          </button>
        </form>
        <p>
          Já possui uma conta?
          <Link to={"/login"}> Entrar</Link>
        </p>
      </section>
    </>
  );
}

export default Register;
