import React from 'react'
import './negocios.css';

const Negocios = () => {
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

        <section className="section_profissionais23">
                <h2 className="h2-profissionais">
                    Profissionais disponíveis para negócios imediatos - Fast Business:
                </h2>
                <div className="profissionais2">
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
                    <p className="p-pessoas">Paulo Henrique - <br></br> Representante da(o) Magalu</p>
                    <p className="p-pessoas">André Belmonte - <br></br> Representante da(o) OLX</p>
                    <p className="p-pessoas">Vitória Montenegro - <br></br> Representante da(o) Canva</p>
                    <p className="p-pessoas">Pietro Dourado - <br></br> Representante da(o) Amazon</p>
                </div>
            </section>

            <section className="section-persona">
                <h2 className="h2-ramos">
                    Profissionais do ramo de social media:
                </h2>
                <p className="p-button">Ver mais</p>
                <div className="ramosneg">
                    <img src="/img/persona.png" alt="persona1" className="persona1"/>
                    <p className="p-personamobile">XXXXXXX</p>
                    <img src="/img/persona.png" alt="persona1" className="persona2"/>
                    <p className="p-personamobile">XXXXXXX</p>
                    <img src="/img/persona.png" alt="persona1" className="persona3"/>
                    <p className="p-personamobile">XXXXXXX</p>
                    <img src="/img/persona.png" alt="persona1" className="persona4"/>
                    <p className="p-personamobile">XXXXXXX</p>
                </div>
                <div className="personas">
                    <p className="p-persona">XXXXX - <br></br> Representante da(o) XXXXX</p>
                    <p className="p-persona">XXXXX - <br></br> Representante da(o) XXXXX</p>
                    <p className="p-persona">XXXXX - <br></br> Representante da(o) XXXXX</p>
                    <p className="p-persona">XXXXX - <br></br> Representante da(o) XXXXX</p>
                </div>
            </section>

            <section className="section-persona">
                <h2 className="h2-ramos">
                    Profissionais do ramo de transporte:
                </h2>
                <p className="p-button">Ver mais</p>
                <div className="ramosneg">
                    <img src="/img/persona.png" alt="persona1" className="persona1"/>
                    <p className="p-personamobile">XXXXXXX</p>
                    <img src="/img/persona.png" alt="persona1" className="persona2"/>
                    <p className="p-personamobile">XXXXXXX</p>
                    <img src="/img/persona.png" alt="persona1" className="persona3"/>
                    <p className="p-personamobile">XXXXXXX</p>
                    <img src="/img/persona.png" alt="persona1" className="persona4"/>
                    <p className="p-personamobile">XXXXXXX</p>
                </div>
                <div className="personas">
                    <p className="p-persona">XXXXX - <br></br> Representante da(o) XXXXX</p>
                    <p className="p-persona">XXXXX - <br></br> Representante da(o) XXXXX</p>
                    <p className="p-persona">XXXXX - <br></br> Representante da(o) XXXXX</p>
                    <p className="p-persona">XXXXX - <br></br> Representante da(o) XXXXX</p>
                </div>
            </section>

            <section className="section-persona">
                <h2 className="h2-ramos">
                    Profissionais do ramo de design:
                </h2>
                <p className="p-button">Ver mais</p>
                <div className="ramosneg">
                    <img src="/img/persona.png" alt="persona1" className="persona1"/>
                    <p className="p-personamobile">XXXXXXX</p>
                    <img src="/img/persona.png" alt="persona1" className="persona2"/>
                    <p className="p-personamobile">XXXXXXX</p>
                    <img src="/img/persona.png" alt="persona1" className="persona3"/>
                    <p className="p-personamobile">XXXXXXX</p>
                    <img src="/img/persona.png" alt="persona1" className="persona4"/>
                    <p className="p-personamobile">XXXXXXX</p>
                </div>
                <div className="personas">
                    <p className="p-persona">XXXXX - <br></br> Representante da(o) XXXXX</p>
                    <p className="p-persona">XXXXX - <br></br> Representante da(o) XXXXX</p>
                    <p className="p-persona">XXXXX - <br></br> Representante da(o) XXXXX</p>
                    <p className="p-persona">XXXXX - <br></br> Representante da(o) XXXXX</p>
                </div>
            </section>

            <img src="/img/negociosfundo.png" alt="fundonegocios" className="negociosfundo"></img>

            <section className="section-ramos33">
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

export default Negocios;
