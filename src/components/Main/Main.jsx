import './Main.css'
import nebula from '../../assets/images/nebula.jpg'
import magic from '../../assets/images/magic.jpg'
import nimbus from '../../assets/images/nimbus.jpg'



const Main = () => {
    return (
        <>

            <div className=" contato-container">

                <section className="bikes">

                    <img className="img-bike" src={nimbus} alt="" />
                    <div className="price">R$ 4999</div>

                </section>

                <section className="product-description">
                    <div className="dot"></div>
                    <div className="desc">
                        <h3 className="h3-ttl2">Nimbus Stark</h3>
                        <p className="description2"> A nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores
                            acessórios, o que garante maior velocidade.</p>
                        <ul className="itens">

                            <li className="li-desc">Motor Elétrico</li>
                            <li className="li-desc">Fibra de Carbono</li>
                            <li className="li-desc">50 Km/h</li>
                            <li className="li-desc">Rastreador</li>
                        </ul>
                    </div>




                    <button className="botao btn-sobre" onclick="sobre(1)">MAIS SOBRE</button>
                </section>

            </div>


            <div className=" contato-container">

                <section className="bikes">

                    <img className="img-bike" src={magic} alt="" />
                    <div className="price">R$ 2499</div>

                </section>

                <section className="product-description">
                    <div className="dot"></div>
                    <div className="desc">
                        <h3 className="h3-ttl2">Magic Might</h3>
                        <p className="description2"> A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.</p>
                        <ul className="itens">

                            <li className="li-desc">Motor Elétrico</li>
                            <li className="li-desc">Fibra de Carbono</li>
                            <li className="li-desc">45 Km/h</li>
                            <li className="li-desc">Rastreador</li>
                        </ul>
                    </div>




                    <button className="botao btn-sobre" onclick="sobre(1)">MAIS SOBRE</button>
                </section>

            </div>


            <div className=" contato-container">

                <section className="bikes">

                    <img className="img-bike" src={nebula} alt="" />
                    <div className="price">R$ 3999</div>

                </section>

                <section className="product-description">
                    <div className="dot"></div>
                    <div className="desc">
                        <h3 className="h3-ttl2">Nebula Cosmic</h3>
                        <p className="description2">  A Nebula Cosmic é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.</p>


                        <ul className="itens">

                            <li className="li-desc">Motor Elétrico</li>
                            <li className="li-desc">Fibra de Carbono</li>
                            <li className="li-desc">50 Km/h</li>
                            <li className="li-desc">Rastreador</li>
                        </ul>
                    </div>



                    <button className="botao btn-sobre" onclick="sobre(1)">MAIS SOBRE</button>
                </section>

            </div>

        </>

    );
}
export default Main;