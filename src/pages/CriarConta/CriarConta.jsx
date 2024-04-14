import { Modal } from 'react-bootstrap';
import './styles.css';
import Logo from '../../../public/svgs/Logo';
import { useForm } from 'react-hook-form';
import { useValidarIdade } from '../../hooks/useValidarIdade';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CriarConta = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const validarIdade = useValidarIdade()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data);
        toast.success('Cadastro realizado com sucesso!');
    };

    return (
        <Modal show={true} className='modal-80w'>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className="row d-flex">
                            <div className="col-md-6 bg-[#291458] flex justify-center items-center text-white rounded-[30px]">
                                <div className='d-flex flex-column gap-1 justify-center items-center h-[100vh]'>
                                    <h1 className='mb-[60px]'>Que bom que voltou!</h1>
                                    <p>Conecte-se com seu login de acesso <br /> para aproveitar nossa <span className='text-[#00BF63]'>velocidade</span></p>
                                    <button className='mt-[62px] border border-solid border-white p-3 rounded-lg h-[45px] flex items-center'
                                    onClick={() => navigate('/login')}
                                    >
                                        Fazer login
                                    </button>
                                </div>
                            </div>
                            <div className="col flex justify-center">
                            <ToastContainer />
                                <div className='d-flex flex-column gap-1'>
                                    <div className='flex items-center justify-center'>
                                        <Logo className='mt-4 ' />
                                    </div>
                                    <h3 className='font-bold text-center'>Crie sua conta</h3>
                                    <label className='mt-8 font-bold'>Nome completo</label>
                                    <input {...register("nome", { required: "Nome é obrigatório" })}
                                        className='bg-[#d9d9d9] rounded-md md:w-[400px] h-8 flex pl-4'
                                        type="text" placeholder='Insira seu nome' />
                                    {errors.nome && <p className='text-red-500'>{errors.nome.message}</p>}

                                    <label className='mt-8 font-bold'>Email</label>
                                    <input {...register("email",
                                        { required: "Email é obrigatório", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } })}
                                        className='bg-[#d9d9d9] rounded-md md:w-[400px] h-8 flex pl-4'
                                        type="email" placeholder='Insira seu e-mail' />
                                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                                    <label className='mt-8 font-bold'>Data de nascimento</label>
                                    <input {...register("nascimento", { required: "Data de nascimento é obrigatória", validate: validarIdade })}
                                        className='bg-[#d9d9d9] rounded-md md:w-[400px] justify-center h-8 flex pl-4'
                                        type="date" placeholder='Insira sua data de nascimento' />
                                    {errors.nascimento && <p className='text-red-500'>{errors.nascimento.message}</p>}

                                    <label className='mt-8 font-bold'>Senha</label>
                                    <input {...register("password", { required: "Senha é obrigatória" })} className='bg-[#d9d9d9] rounded-md md:w-[400px] h-8 flex pl-4' type="password" placeholder='Insira sua senha' />
                                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                    <div className='flex justify-center'>
                                        <button className='mt-12 w-36 h-12 rounded-md text-white bg-[#00BF63]' type='submit'>Cadastrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default CriarConta;
