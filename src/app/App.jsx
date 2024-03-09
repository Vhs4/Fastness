import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import CriarConta from '../pages/CriarConta/CriarConta'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/criar-conta" element={<CriarConta />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
