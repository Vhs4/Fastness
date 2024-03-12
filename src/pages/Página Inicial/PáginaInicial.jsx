import       from       ;
import './style.css';

const PáginaInicial = () => {
    return (
        <>
        <nav class="navP">
          <img src="/img/logo.png" class="img_nav" alt="logo fastness"></img>
        <ul>
            <li><a href="">Início</a></li>
            <li><a href="">Negócios</a></li>
            <li className=""><a href="">Locais</a></li>
            <li className=""><a href="">Chat</a></li>
            <img src="/img/iconeboneco.png" class="img_nav2" alt="ícone boneco"></img>
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
        em um piscar de olhos! Explore o melhor de nossas <span>funcionalidades</span>
        </p>
        <button className="button1">Funcionalidades Fast</button>
        <img src="/img/imgnegocios.png" class="img_header" alt="fechando negócios"></img>
        <img src="/img/losangonegocios.png" class="img_header1" alt="losango negócios"></img>

        <section className="section1">
        <div className="div1">
          <p className="p1section1">Interesses <br></br>individuais</p>
          <p className="p2section1">Declare seus<br></br>interesses e tenha<br></br>recomendações<br></br>personalizadas!</p>
        </div>
        <div className="div2">
          <p className="p3section1">Negócios<br></br>nichados</p>
          <p className="p4section1">Navegue<br></br>isoladamente dentro<br></br>do ramo do seu<br></br>interesse!</p>
        </div>
        </section>
        <img src="/img/imagemraio.png" class="img_section" alt="raio"></img>
        <section className="section2">
          <div className="div3">
            <p className="p1section2">Fast business</p>
            <p className="p2section2">Veja quem está<br></br>disposto a fechar<br></br>negócios no dia de<br></br>hoje!</p>
          </div>
          <div className="div4">
            <p className="p3section2">Credibilidade</p>
            <p className="p4section2">Negocie diretamente<br></br>com os<br></br>representantes de<br></br>grandes empresas!</p>
          </div>
        </section>
        </>