import React from 'react'
import './style.css'

const Home = () => {
  return (
        <>
        <nav class="navP">
          <img src="/img/logo.png" class="img_nav" alt="logo fastness"></img>
        <ul>
            <li><a href="">Sobre</a></li>
            <li><a href="">Benefícios</a></li>
            <li className=""><a href="">Entrar</a></li>
            <button className="header_button">Cadastre-se</button>
        </ul>
        </nav>
        <p className="p1">
        Crie laços <span>rápidos</span> e <br></br>  
        feche <span>negócios</span> em <br></br>
        um piscar de olhos.
        </p>
        <p className="p2">
        Com a <span>Fastness</span>, os laços comerciais <br></br>
        são tecidos em ambientes virtuais para <br></br> conversas, impulsionando os <span>negócios</span> <br></br>
        em um piscar de olhos!
        </p>
        <button className="button1">Comece gratuitamente</button>
        <img src="/img/home.png" class="img_header" alt="homem de negócios"></img>
        <img src="/img/celular.png" class="img_header1" alt="celular"></img>
        <p className="p3">Sobre a Fastness</p>
        <p className="p4">Oferecemos o melhor ambiente para aumentar seus <br></br>laços comerciais e fechar  
        negócios de maneira rápida<br></br> e prática. Com nosso site, fica muito mais rápido<br></br> encontrar 
        representantes de acordo com seus <br></br>interesses, além de ter a opção de bate-papo via chat.  <br></br>Na 
        conclusão da sua negociação, é possível escolher <br></br> um lugar para se encontrar e conversar pessoalmente <br></br> 
        com o representante do seu interesse.</p>
        <img src="/img/home2.png" class="img_header2" alt="homem de negócios"></img>

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
        <img src="/img/imagemraio.png" class="img_section" alt="raio"></img>
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
        </>
  )
}

export default Home