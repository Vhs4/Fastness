import React from 'react'
import './styles.css'

const NavBar = () => {
    const [navMenu, setNavMenu] = React.useState(false);

    function menuShow() {
      setNavMenu(!navMenu);
      let menuMobile = document.querySelector('.mobile-menu2');
      let icon = document.querySelector('.icon') as HTMLImageElement;

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
  </>
  )
}

export default NavBar