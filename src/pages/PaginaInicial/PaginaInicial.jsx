import React from 'react'
import './paginainicial.css';

export const PaginaInicial = () => {
    const [navMenu, setNavMenu] = React.useState(false)
  function menuShow() {
    setNavMenu(!navMenu)
    let menuMobile = document.querySelector('.mobile-menu2');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu-aberto (3).png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/menuabertoo.png";
    }
  }
    return (
        <>
        <div className="containerGeral">
        <nav className="navP">
          <img src="/img/logo.png" className="img_nav" alt="logo fastness"></img>
        <ul>
            <li><a href="">Início</a></li>
            <li><a href="">Negócios</a></li>
            <li><a href="">Locais</a></li>
            <li className=""><a href="">Chat</a></li>
            <li><img src="/img/iconeboneco23.png" alt="" /></li>
        </ul>
        <div className="mobile-menu-icon">
          <button onClick={menuShow}><img className="icon" src="img/menu-aberto (3).png" alt="menu-white"></img></button>
        </div>

        </nav>

        <div className="mobile-menu2"> 
{navMenu && (
<>
        <ul>
            <li><a href="#" className="nav-item">Início</a></li>
            <li><a href="#" className="nav-item">Negócios</a></li>
            <li><a href="#" className="nav-item">Locais</a></li>
            <li><a href="" className="nav-item">Chat</a></li>
        </ul>
</>
)}
        </div>
            <p className="p1-pi">
                Seja <span>FAST</span> e tenha<br></br> mais velocidade em <br></br>seus <span>BUSINESS</span>!
            </p>
            <p className="p1pi-mobile">
                Seja <span>FAST</span> e tenha<br></br> mais velocidade em <br></br>seus <span>BUSINESS</span>!
            </p>
            <p className="p-2">
                Com a <span>Fastness</span>, os negócios fecham em um piscar de <br></br>olhos! Explore o melhor de nossas <span>funcionalidades</span>!
            </p>
            <p className="p2-mobile">
                Com a <span>Fastness</span>, os negócios fecham em um piscar de <br></br>olhos! Explore o melhor de nossas <span>funcionalidades</span>!
            </p>
            <img src="/img/imgnegocios2.png" className="img-header" alt="fechando negócios"></img>

            <section className="trilha">
                <article className="article-trilha">
                    <img className="img-trilha" src="/img/trilha2.png"></img>
                </article>
            </section>

            <section>
                <article className="">
                    <img className="img-trilhamobile" src="/img/trilhamobile.png" alt="" />
                </article>
            </section>

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

            <section className="section_profissionais">
                <h2 className="h2-profissionais">
                    Profissionais disponíveis para negócios imediatos - Fast Business:
                </h2>
                <div className="profissionais">
                    <img src="/img/pessoa1.png" alt="profissional1" className="pessoa"/>
                    <p className="p-pessoasmobile">Paulo Henrique</p>
                    <img src="/img/pessoa2.png" alt="profissional2"  className="pessoa2"/>
                    <p className="p-pessoasmobile">André Belmonte</p>
                    <img src="/img/pessoa3.png" alt="profissional3" className="pessoa3"/>
                    <p className="p-pessoasmobile">Vitória Montenegro</p>
                    <img src="/img/pessoa4.png" alt="profissional4" className="pessoa4"/>
                    <p className="p-pessoasmobile">Pietro Dourado</p>
                </div>
                <div className="pessoas">
                    <p className="p-pessoas">Paulo Henrique</p>
                    <p className="p-pessoas">André Belmonte</p>
                    <p className="p-pessoas">Vitória Montenegro</p>
                    <p className="p-pessoas">Pietro Dourado</p>
                </div>

            </section>

            <section className="section-ramos">
                <h2 className="h2-ramos">
                    Profissionais separados por ramo:
                </h2>
                <p className="p-button">Todos os ramos</p>
                <div className="ramos">
                <div className="div1-ramo">
                    <img src="/img/bebidas2.png" alt="bebidas" className="img-categorias1"/>
                    <p className="p-ramo1">Bebidas</p>
                </div>
                <div className="div2-ramo">
                    <img src="/img/transporte2.png" alt="transporte" className="img-categorias2"/>
                    <p className="p-ramo2">Transporte</p>
                </div>
                <div className="div3-ramo">
                    <img src="/img/eletronicos2.png" alt="eletrônicos" className="img-categorias3"/>
                    <p className="p-ramo3">Eletrônicos</p>
                </div>
                <div className="div4-ramo">
                    <img src="/img/construcaocivil2.png" alt="construçãocivil" className="img-categorias4"/>
                    <p className="p-ramo4">Construção Civil</p>
                </div>
                </div>
            </section>

            <footer>
                <p className="footer">© 2024 - Fastness, Todos os direitos reservados</p>
            </footer>
            </div>

        </>
    )
}