import React from "react";
import './Header.css'

const Header = () => {
    return (
        <div className="container">

            <nav className="navbar bg-black border-none " data-bs-theme="dark">

                <img className="logo" src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" />

                <ul className="ul-header">
                    <li className="lista"><a>Bicicletas</a></li>
                    <li className="lista"><a>Seguros</a></li>
                    <li className="lista"><a>Contato</a></li>
                </ul>
            </nav>

        </div>
    );
}
export default Header;
