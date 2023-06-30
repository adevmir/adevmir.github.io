import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" className="link">
        INICIO
      </Link>
      <Link to="/projects" className="link">
        PROJETOS
      </Link>
      <Link to="/contact" className="link">
        CONTATO
      </Link>
    </header>
  );
}

export default Header;
