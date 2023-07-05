import React from "react"
import './Footer.css'


const Footer = () => {
    return (
        <footer className="footer-bg container text-center">
            <div className="footer row align-items-start ">

                <div className="col-4 logo-footer">
                    <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" alt="Bikcraft" />
                </div>

                <div className="footer-contato col-4">
                    <h3 className="font-2-l-b cor-0 col-1">CONTATO</h3>
                    <ul className="font-2-m cor-5 col-10 contatos">
                        <li className="li-footer"><a href="tel:+552199999999" className="a-footer">+55 21 9999-9999</a></li>
                        <li className="li-footer" ><a href="mailto:contato@bikcraft.com"
                            className="a-footer">contato@bikcraft.com</a></li>
                        <section className="separador"></section>
                        <li className="a-footer">Rua Ali Perto, 42 - Botafogo</li>
                        <li className="li-footer a-footer">Rio de Janeiro - RJ</li>
                        <section className="separador"></section>
                    </ul>


                    <div className="footer-redes">

                        <a href="./">
                            <img src="https://www.origamid.com/projetos/bikcraft/img/redes/instagram-p.svg" alt="Instagram" />
                        </a>
                        <a href="./">
                            <img src="https://www.origamid.com/projetos/bikcraft/img/redes/facebook-p.svg" alt="Facebook" />
                        </a>
                        <a href="./">
                            <img src="https://www.origamid.com/projetos/bikcraft/img/redes/youtube-p.svg" alt="Youtube" />
                        </a>
                    </div>

                </div>


                <div className="footer-informacoes col-4">
                    <h3 className="font-2-l-b cor-0 col-4">INFORMAÇÕES</h3>
                    
                        <ul className="font-1-m cor-5 ul-vert contatos">
                            <li className="li-footer"><a href="./bicicletas.html" className="a-footer">Bicicletas</a></li>
                            <li className="li-footer"><a href="./seguros.html" className="a-footer">Seguros</a></li>
                            <li className="li-footer"><a href="./contato.html" className="a-footer">Contato</a></li>
                            <li className="li-footer"><a href="./termos.html" className="a-footer">Termos e Condições</a></li>
                        </ul>
                
                </div>
                <p className="footer-copy font-2-m cor-6">Bikcraft © Alguns direitos reservados.</p>
            </div>
        </footer>
    );
}
export default Footer;