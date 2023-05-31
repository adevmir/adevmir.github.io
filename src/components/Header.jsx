import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" className="link">
        <p>INICIO</p>
      </Link>
      <Link to="/projects" className="link">
        <p>PROJETOS</p>
      </Link>
      <Link to="/contact" className="link">
        <p>CONTATO</p>
      </Link>
    </header>
  );
}

export default Header;
