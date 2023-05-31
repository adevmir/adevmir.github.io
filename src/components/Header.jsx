import * as React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link
                to="/"
                class="link"
            >
                <p>
                    INICIO
                </p>
            </Link>
            <Link
                to="/projects"
                class="link"
            >
                <p>
                    PROJETOS
                </p>
            </Link>
            <Link
                to="/contact"
                class="link"
            >
                <p>
                    CONTATO
                </p>
            </Link>
        </header>
    )
}

export default Header;