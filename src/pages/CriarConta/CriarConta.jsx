import { Modal } from 'react-bootstrap';
import './styles.css';
import Logo from '../../../public/svgs/Logo';

const CriarConta = () => {
    return (
        <>
            <Modal show={true} className='modal-80w'>
                <Modal.Body>
                    <div className="">
                        <div className="row d-flex">
                            <div className="col-md-6 bg-[#291458] flex justify-center items-center text-white rounded-[30px]">
                                <div className='d-flex flex-column gap-1 justify-center items-center h-[100vh]'>
                                    <h1 className='mb-[60px]'>Que bom que voltou!</h1>
                                    <p>Conecte-se com seu login de acesso <br /> para aproveitar nossa <span className='text-[#00BF63]'>velocidade</span></p>
                                    <button className='mt-[62px] border border-solid border-white p-3 rounded-lg h-[45px] flex  items-center'>
                                        Fazer login
                                    </button>
                                </div>
                            </div>
                            <div className="col flex justify-center">
                                <div className='d-flex flex-column gap-1'>
                                    <div className='flex items-center justify-center'>
                                        <Logo className='mt-4 ' />
                                    </div>
                                    <h3 className='font-bold text-center'>Crie sua conta</h3>
                                    <label className='mt-8 font-bold' htmlFor="nome">Nome completo</label>
                                    <input className='bg-[#d9d9d9] rounded-md md:w-[400px] h-8 flex pl-4' type="text" name='nome' placeholder='Insira seu nome' />
                                    <label className='mt-8 font-bold' htmlFor="email">Email</label>
                                    <input className='bg-[#d9d9d9] rounded-md md:w-[400px] h-8 flex pl-4' type="email" name='email' placeholder='Insira seu e-mail' />
                                    <label className='mt-8 font-bold' htmlFor="nascimento">Data de nascimento</label>
                                    <input className='bg-[#d9d9d9] rounded-md md:w-[400px] justify-center h-8 flex pl-4' type="date"
                                        name='nascimento' placeholder='Insira sua data de nascimento' />
                                    <label className='mt-8 font-bold' htmlFor="password">Senha</label>
                                    <input className='bg-[#d9d9d9] rounded-md md:w-[400px] h-8 flex pl-4' type="password" name='password' placeholder='Insira sua senha' />
                                    <div className='flex justify-center'>
                                        <button className='mt-12 w-36 h-12 rounded-md text-white bg-[#00BF63]'>Cadastrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CriarConta;
