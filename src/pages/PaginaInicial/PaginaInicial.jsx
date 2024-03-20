
import Carousel from 'react-bootstrap/Carousel';
import './paginainicial.css';

export const PaginaInicial = () => {
    return (
        <>
            <nav className="navP">
                <img src="/img/logo.png" className="img_nav" alt="logo fastness"></img>
                <ul>
                    <li><a href="">Início</a></li>
                    <li><a href="">Negócios</a></li>
                    <li className=""><a href="">Locais</a></li>
                    <li className=""><a href="">Chat</a></li>
                    <img src="/img/iconeboneco23.png" className="img_nav2" alt="ícone boneco"></img>
                </ul>
            </nav>
            <p className="p1">
                Seja <span>FAST</span> e tenha<br></br> mais velocidade em <br></br>seus <span>BUSINESS</span>!
            </p>
            <p className="p-2">
                Com a <span>Fastness</span>, os negócios fecham em um piscar de <br></br>olhos! Explore o melhor de nossas <span>funcionalidades</span>!
            </p>
            <img src="/img/imgnegocios2.png" className="img-header" alt="fechando negócios"></img>

            <section className="div-section">
            <div className="info1">
               <h2 className="div1-h2">Negócios</h2>
               <p>- Interesses individuais;</p>
               <p>- Negócios nichados;</p>
               <p>- Grandes empresas;</p>
               <p>- Credibilidade.</p>
               <button className="div-button">Acessar</button>
            </div>
            <div className="info2">
               <h2 className="div2-h2">Locais</h2>
               <p>- Locais especializados;</p>
               <p>- Encontros comerciais;</p>
               <p>- Conversas eficientes;</p>
               <p>- Olho no olho.</p>
               <button className="div-button">Acessar</button>
            </div>
            <div className="info3">
               <h2 className="div3-h2">Chat</h2>
               <p>- Fácil comunicação;</p>
               <p>- Dúvidas esclarecidas;</p>
               <p>- Interesses bem definidos;</p>
               <p>- Laços criados.</p>
               <button className="div-button">Acessar</button>
            </div>
            </section>


        </>
    )
}