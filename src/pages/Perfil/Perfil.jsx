import React from 'react'
import './perfil.css';

export const Perfil = () => {
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

                <section>
                    <div></div>
                    <img src="" alt="" />
                    <button></button>
                    <h3>Nome do usuário</h3>

                    <form action="">

                        <div>
                            <label htmlFor="empresa" className="label_block">Empresa:</label>
                            <input type="text" id="empresa" name="empresa"/>
                        </div>
                        <div>
                            <label htmlFor="ramo" className="label_block">Ramo comercial:</label>
                            <input type="text" id="ramo" name="ramo"/>
                        </div>
                        <div>
                            <label htmlFor="celular" className="label_block">Celular:</label>
                            <input type="text" id="celular" name="celular"/>
                        </div>

                    </form>

                </section>

            </div>
        </>
    )
}