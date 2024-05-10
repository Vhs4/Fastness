import Logo from '../../../public/svgs/Logo';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data);
        toast.success('Cadastro realizado com sucesso!');
    };

    return (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='overflow-hidden'>
                        <div className="row d-flex">
                            <div className="col-md-6 bg-[#291458] flex justify-center items-center text-white h-dvh">
                                <div className='d-flex flex-column gap-1 justify-center items-center'>
                                    <h1 className='mb-[60px]'>Primeira vez por aqui?</h1>
                                    <p>Crie sua conta<br /> para aproveitar nossa <span className='text-[#00BF63]'>velocidade</span></p>
                                    <button className='mt-[62px] border border-solid border-white p-3 rounded-lg h-[45px] flex items-center'
                                    onClick={() => navigate('/criar-conta')}
                                    >
                                        Ir para criar conta
                                    </button>
                                </div>
                            </div>
                            <div className="col flex justify-center">
                            <ToastContainer />
                                <div className='d-flex flex-column gap-1 justify-center'>
                                    <div className='flex items-center justify-center'>
                                        <Logo className='mt-4 ' />
                                    </div>
                                    <h3 className='font-bold text-center'>Entrar na sua conta</h3>
                                    <label className='mt-8 font-bold'>Email</label>
                                    <input {...register("email",
                                        { required: "Email é obrigatório", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } })}
                                        className='bg-[#d9d9d9] rounded-md md:w-[400px] h-8 flex pl-4'
                                        type="email" placeholder='Insira seu e-mail' />
                                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                                    <label className='mt-8 font-bold'>Senha</label>
                                    <input {...register("password", { required: "Senha é obrigatória" })} className='bg-[#d9d9d9] rounded-md md:w-[400px] h-8 flex pl-4' type="password" placeholder='Insira sua senha' />
                                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                    <div className='flex justify-center'>
                                        <button className='mt-12 w-36 h-12 rounded-md text-white bg-[#00BF63]' type='submit'>Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
    );
};

export default Login;
