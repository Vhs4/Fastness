
import './paginainicial.css';

export const PaginaInicial = () => {
    return (
        <>
        <nav class="navP">
          <img src="/img/logo.png" class="img_nav" alt="logo fastness"></img>
        <ul>
            <li><a href="">Início</a></li>
            <li><a href="">Negócios</a></li>
            <li className=""><a href="">Locais</a></li>
            <li className=""><a href="">Chat</a></li>
            <img src="/img/iconeboneco23.png" class="img_nav2" alt="ícone boneco"></img>
        </ul>
        </nav>
        <p className="p1">
        Seja <span>FAST</span> e tenha<br></br> mais velocidade em <br></br>seus <span>BUSINESS</span>!
        </p>
        <p className="p-2">
        Com a <span>Fastness</span>, os negócios fecham em um piscar de <br></br>olhos! Explore o melhor de nossas <span>funcionalidades</span>!
        </p>
        <img src="/img/imgnegocios2.png" class="img-header" alt="fechando negócios"></img>
        </>
    )
    }