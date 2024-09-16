import React, { useState } from "react";

function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <>
      <h1>Faça o registro</h1>
      <form>
        <div>
          <label htmlFor="nome">Nome </label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Nome"
            required
            onChange={(e) => setNome(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="senha">Senha </label>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Senha"
            required
            onChange={(e) => setSenha(e.target.value)}
          ></input>
        </div>
        <input type="submit" value={"Enviar"}></input>
      </form>
    </>
  );
}

export default Register;
