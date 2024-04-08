import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import CriarConta from '../pages/CriarConta/CriarConta'
import { PaginaInicial } from '../pages/PaginaInicial/PaginaInicial'
import Negocios from '../pages/Negocios/Negocios'
import { Perfil } from '../pages/Perfil/Perfil'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/criar-conta" element={<CriarConta />} />
            <Route path="/pagina-inicial" element={<PaginaInicial/>}/>
            <Route path="/negocios" element={<Negocios/>}/>
            <Route path="/perfil" element={<Perfil/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
