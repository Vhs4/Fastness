import React from 'react'
import './style.css'

const Home = () => {
  return (
        <>
        <nav class="navP">
          <img src="/img/logo.png" class="img_nav" alt="logo fastness"></img>
        <ul>
            <li><a href="">Benefícios</a></li>
            <li><a href="">Sobre a fastness</a></li>
            <li className=""><a href="">Central de ajuda</a></li>
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
        <p className="p3">Sobre a Fastness</p>
        <p className="p4">Oferecemos o melhor ambiente para <br></br>aumentar seus laços comerciais e fechar <br></br> 
        negócios de maneira rápida e prática. Com <br></br>nosso site, fica muito mais rápido encontrar <br></br>
        representantes de acordo com seus interesses,<br></br> além de ter a opção de bate-papo via chat.  Na<br></br> 
        conclusão da sua negociação, é possível escolher <br></br> um lugar para se encontrar e conversar pessoalmente <br></br> 
        com o representante do seu interesse.</p>
        </>
  )
}

export default Home