import React from 'react'
import './style.css'

const Home = () => {
  return (
        <nav className="nav">
           <img src="/img/logo.png" class="img_nav" alt="logo fastness"></img>
        <ul>
            <li><a href="">Benefícios</a></li>
            <li><a href="">Sobre a fastness</a></li>
            <li className=""><a href="">Central de ajuda</a></li>
            <li className=""><a href="">Entrar</a></li>
            <button className="header_button">Cadastre-se</button>
        </ul>
        </nav>
  )
}

export default Home