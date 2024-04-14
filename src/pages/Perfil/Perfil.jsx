import React from 'react';
import './perfil.css';
import { useForm } from 'react-hook-form';

export const Perfil = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

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

    const onSubmit = (data) => {
        console.log(data);
    }
        return (
            <>
                <div className="containerGeral mt-20 w-custom-769:w-[100vw]">
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

                        <form onSubmit={handleSubmit(onSubmit)} className="formuser">

                            <div>
                                <label htmlFor="empresa" className="label_block">Empresa:</label>
                                <input type="text" id="empresa" {...register('empresa', {required: 'Este campo é obrigatório'})} />
                                {errors.empresa && <p className="error text-red-500">{errors.empresa.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="ramo" className="label_block">Ramo comercial:</label>
                                <input type="text" id="ramo" {...register('ramo', {required: 'Este campo é obrigatório'})} />
                                {errors.ramo && <p className="error text-red-500">{errors.ramo.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="celular" className="label_block">Celular:</label>
                                <input type="tel" id="celular" {...register('celular', {required: 'Este campo é obrigatório'})} placeholder="(xx)x.xxxx-xxxx" />
                                {errors.celular && <p className="error text-red-500">{errors.celular.message}</p>}
                            </div>
                            <button type="submit">Salvar</button>

                        </form>

                    </section>

                </div>
            </>
        )
    }