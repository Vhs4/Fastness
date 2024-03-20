import React from 'react'
import './style.css'


const Home = () => {
  const [navMenu, setNavMenu] = React.useState(false)
  function menuShow() {
    setNavMenu(!navMenu)
    let menuMobile = document.querySelector('.mobile-menu');
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
            <li><a href="">Sobre</a></li>
            <li><a href="">Benefícios</a></li>
            <li className=""><a href="">Entrar</a></li>
        </ul>
        <button className="header_button">Cadastre-se</button>

        <div className="mobile-menu-icon">
          <button onClick={menuShow}><img className="icon" src="img/menu-aberto (3).png" alt="menu-white"></img></button>
        </div>

        </nav>

        <div className="mobile-menu"> 
{navMenu && (
<>
        <ul>
            <li><a href="#" className="nav-item">Sobre</a></li>
            <li><a href="#" className="nav-item">Benefícios</a></li>
            <li><a href="" className="nav-item">Entrar</a></li>
        </ul>
        <button className="header_button">Cadastre-se</button>
</>
)}
</div>
        <p className="p1">
        Crie laços <span className="span1">rápidos</span> e <br></br>  
        feche <span className="span1">negócios</span> em <br></br>
        um piscar de olhos.
        </p>

        <p className="p1-mobile">
        Crie laços <span className="mobilep1">rápidos</span> e <br></br>  
        feche <span className="mobilep1">negócios</span> em <br></br>
        um piscar de olhos.
        </p>


        <p className="p2">
        Com a <span className="span1">Fastness</span>, os laços comerciais <br></br>
        são tecidos em ambientes virtuais para <br></br> conversas, impulsionando os <span className="span1">negócios</span > <br></br>
        em um piscar de olhos!
        </p>


        <a className="button1">Comece gratuitamente</a>
        <img src="/img/home.png" className="img_header" alt="homem de negócios"></img>
        <img src="/img/celular.png" className="img_header1" alt="celular"></img>
        <p className="p3">Sobre a Fastness</p>
        <p className="p4">Oferecemos o melhor ambiente para aumentar seus <br></br>laços comerciais e fechar  
        negócios de maneira rápida<br></br> e prática. Com nosso site, fica muito mais rápido<br></br> encontrar 
        representantes de acordo com seus <br></br>interesses, além de ter a opção de bate-papo via chat.  <br></br>Na 
        conclusão da sua negociação, é possível escolher <br></br> um lugar para se encontrar e conversar pessoalmente <br></br> 
        com o representante do seu interesse.</p>
        
        <img src="/img/home2.png" className="img_header2" alt="homem de negócios"></img>

        <section className="section1">
        <div className="div1">
          <p className="p1section1">Encontre seus <br></br>interesses</p>
          <p className="p2section1">Filtre por <br></br>interesses <br></br>comerciais e <br></br>descubra pessoas <br></br>para negociar!</p>
        </div>
        <div className="div2">
          <p className="p3section1">Converse e <br></br>crie laços</p>
          <p className="p4section1">Através do chat, <br></br>você pode <br></br>conversar <br></br>comercialmente e <br></br>marcar encontros!</p>
        </div>
        </section>
        <img src="/img/imagemraio.png" className="img_section" alt="raio"></img>
        <section className="section2">
          <div className="div3">
            <p className="p1section2">Fast business</p>
            <p className="p2section2">Verifique quem <br></br>está disposto a <br></br>fazer negócios no <br></br>dia a dia <br></br>através do <br></br>selo “Negócios Fast”!</p>
          </div>
          <div className="div4">
            <p className="p3section2">Se conheçam</p>
            <p className="p4section2">Descubra lugares <br></br>para marcar encontros <br></br>comerciais e potencializar seus negócios!</p>
          </div>
        </section>
        <footer>
          <p className="footer">© 2024 - Fastness, Todos os direitos reservados</p>
        </footer>
        </div>
        </>
  )
}

export default Home