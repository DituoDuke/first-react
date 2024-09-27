import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const nome = localStorage.getItem("nome");
  if (nome) {
    return (
      <>
        <header className="App-header">
          <div className="inner-header">
            <button onClick={() => (window.location = "/")}>Home</button>
            <button
              onClick={() => {
                localStorage.removeItem("nome");
                window.open("/login", "_self");
              }}
            >
              Logout
            </button>
          </div>
        </header>
      </>
    );
  }
};

export default Header;
