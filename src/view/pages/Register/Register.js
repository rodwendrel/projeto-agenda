import React, { useState } from "react";
import Logo from "../../assets/SVG/Logo";
import Background from "../../assets/SVG/Background";
import "./style.css";
import { Link } from "react-router-dom";
import api from "../../../services/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const RegisterUserURL = "http://localhost:3030/register";

  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .post(RegisterUserURL, {
        user: `${name}`,
        email: `${email}`,
        password: `${password}`,
      })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        window.location.href = "/contacts/";
      })
      .catch((error) => {
        alert("Falha ao cadastrar usuário");
        console.error(error.toJSON());
      });
  };

  return (
    <div className="Register">
      <Background className="background" />
      <div className="logo">
        <Logo />
      </div>

      <form>
        <h2>Crie sua conta</h2>

        <div className="section">
          <label>Usuário</label>
          <input
            type="text"
            placeholder="Digite um nome Usuário"
            className="input re"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="section">
          <label>Email</label>
          <input
            type="text"
            placeholder="Digite um endereço de Email"
            className="input re"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="section">
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite uma Senha"
            className="input re"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-section">
          <button onClick={handleSubmit}>CRIAR CONTA</button>
          <p className="text">
            JÁ POSSUI UMA CONTA? ENTRE <Link to="/">AQUI</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
