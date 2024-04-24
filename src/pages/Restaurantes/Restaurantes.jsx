import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ReactStars from 'react-stars'
import LocaisIcon from '../../../public/svgs/LocaisIcon'
import SetaEsquerdaCarrossel from '../../../public/svgs/SetaEsquerdaCarrossel'
import SetaDireitaCarrossel from '../../../public/svgs/SetaDireitaCarrossel'

const Restaurantes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'img/CarrosselRestaurantes/Img1.png',
    'img/CarrosselRestaurantes/Img2.png',
    'img/CarrosselRestaurantes/Img3.png',
    'img/CarrosselRestaurantes/Img4.png',
    'img/CarrosselRestaurantes/Img5.png'
  ];

  const images2 = [
    'img/CarrosselRestaurantes/Img6.png',
    'img/CarrosselRestaurantes/Img7.png',
    'img/CarrosselRestaurantes/Img8.png',
    'img/CarrosselRestaurantes/Img9.png',
    'img/CarrosselRestaurantes/Img10.png'
  ];
  
  const items = [
    {
       nome: 'Outback Steakhouse',
       localizacao: 'Av. José Pinheiro Borges, S/N - Itaquera, São Paulo - SP, 08220-385',
       imagens: [
         '/img/CarrosselRestaurantes/Img1.png',
         '/img/CarrosselRestaurantes/Img2.png',
         '/img/CarrosselRestaurantes/Img3.png',
         '/img/CarrosselRestaurantes/Img4.png',
         '/img/CarrosselRestaurantes/Img5.png'
       ]
    },
    {
      nome: 'Nelita Restaurant',
      localizacao: 'R. Ferreira de Araújo, 330 - Pinheiros, São Paulo - SP, 05428-000',
      imagens: [
        '/img/CarrosselRestaurantes/Img6.png',
        '/img/CarrosselRestaurantes/Img7.png',
        '/img/CarrosselRestaurantes/Img8.png',
        '/img/CarrosselRestaurantes/Img9.png',
        '/img/CarrosselRestaurantes/Img10.png',
        
        '/img/CarrosselRestaurantes/Img1.png',
        '/img/CarrosselRestaurantes/Img2.png',
        '/img/CarrosselRestaurantes/Img3.png',
        '/img/CarrosselRestaurantes/Img4.png',
        '/img/CarrosselRestaurantes/Img5.png'
      ]
   }
   ];
   

  const handleNext = () => {
    if (currentSlide < images.length - 5) {
      setCurrentSlide(currentSlide + 5);
    }
    if (currentSlide < images2.length - 5) {
      setCurrentSlide(currentSlide + 5);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 5);
    }
  };

  return (
  
    <div className="w-custom-769:max-w-full w-custom-769:ml-24 h-full mt-20 flex flex-col flex-wrap">
      <NavBar />
    {items.map((item, index) => (
      <>
        <h1 key={index} className='mt-[32px]'>{item.nome}</h1>
        <div className="flex h-6 w-custom-769:my-2 my-8">
          <span><LocaisIcon fill={'green'} /></span>
          <p className='ml-2 w-custom-769:text-[20px] mb-4'>{item.localizacao}</p>
        </div>
        <ReactStars className='pt-3 w-custom-400:py-0' value={4.5} edit={false} size={24} />
        
        <div className="carrossel gap-x-[60px] mt-10 w-custom-769:flex hidden">
          <button onClick={handlePrev} disabled={currentSlide === 0} className="rounded px-4 py-2 cursor-pointer"><SetaDireitaCarrossel /></button>
  
          {item.imagens.slice(currentSlide, currentSlide + 5).map((image, index) => (
            <img src={image} alt={`Image ${index + 1}`} key={index} className="w-[150px] h-[150px]" />
          ))}
          <button onClick={handleNext} disabled={currentSlide === item.imagens.length - 5} className="rounded px-4 py-2 cursor-pointer"><SetaEsquerdaCarrossel /></button>
        </div>
        </>
    ))}
    </div>
    
    )
}

export default Restaurantes
