import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import CriarConta from '../pages/CriarConta/CriarConta'
import { PaginaInicial } from '../pages/PaginaInicial/PaginaInicial'
import Negocios from '../pages/Negocios/Negocios'
import { Perfil } from '../pages/Perfil/Perfil'
import Restaurantes from '../pages/Restaurantes/Restaurantes'
import Chat from '../pages/Chat/Chat'
import Login from '../pages/Login/Login'

function App() {

  return (
    <div className='flex flex-col m-custom-auto
w-custom-769:flex-wrap max-w-screen-md:items-center
max-w-screen-md:justify-center
max-w-screen-md:max-w-[428px]'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criar-conta" element={<CriarConta />} />
          <Route path="/login" element={<Login />} />
          <Route path="/beneficios" element={<PaginaInicial />} />
          <Route path='/chat' element={<Chat />} />

          <Route path='/*' element={
            <div className='max-h-full flex m-custom-auto justify-center
              max-w-[768px]:flex max-w-[768px]:max-w-full'>
              <Routes>
                <Route path='/restaurantes' element={<Restaurantes />} />
                <Route path="/negocios" element={<Negocios />} />
                <Route path="/perfil" element={<Perfil />} />
              </Routes>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
