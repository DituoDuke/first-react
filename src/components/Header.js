import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const nome = localStorage.getItem("nome");
  if (nome) {
    return (
      <>
        <header className="App-header">
          <Link to={"/"}>
            <button>Home</button>
          </Link>
          <button
            onClick={() => {
              localStorage.removeItem("nome");
              window.open("/login", "_self");
            }}
          >
            Logout
          </button>
        </header>
      </>
    );
  }
};

export default Header;
