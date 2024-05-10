import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [navMenu, setNavMenu] = React.useState(false);

    function menuShow() {
      setNavMenu(!navMenu);
      let menuMobile = document.querySelector('.mobile-menu2');
      let icon = document.querySelector('.icon')

      if (menuMobile && icon) {
        if (menuMobile.classList.contains('open')) {
          menuMobile.classList.remove('open');
          icon.src = "img/menu-aberto (3).png";
        } else {
          menuMobile.classList.add('open');
          icon.src = "img/menuabertoo.png";
        }
      }
    }
  return (
    <>
    <nav className="navP">
    <img src="/img/logo.png" className="img_nav" alt="logo fastness"></img>
  <ul>
      <li><Link to="/">Início</Link></li>
      <li><Link to="/negocios">Negócios</Link></li>
      <li><Link to="/restaurantes">Locais</Link></li>
      <li className=""><Link to="/chat">Chat</Link></li>
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
  </>
  )
}

export default NavBar