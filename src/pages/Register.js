import React, { useState, useRef, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userEvent from "@testing-library/user-event";

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
  const [matchfoco, setMatchFoco] = useState(false);

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
        <form>
          <div>
            <label htmlFor="nome">Nome </label>
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
          </div>
          <p
            id="uidnote"
            className={
              nomeFoco && nome && !nomeValido ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 a 24 caracteres <br />
            Precisa começar com uma letra <br />
            Letras, numaros, sinais de separação (- e _) são permitidos
          </p>

          <div>
            <label htmlFor="senha">Senha </label>
            <input
              type="password"
              id="senha"
              placeholder="Senha"
              required
              onChange={(e) => setSenha(e.target.value)}
            ></input>
          </div>
          <input type="submit" value={"Enviar"}></input>
        </form>
      </section>
    </>
  );
}

export default Register;
