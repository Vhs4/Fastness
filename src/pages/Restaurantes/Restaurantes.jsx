import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ReactStars from 'react-stars'
import LocaisIcon from '../../../public/svgs/LocaisIcon'

const Restaurantes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://www.w3schools.com/bootstrap/la.jpg",
    "https://www.w3schools.com/bootstrap/chicago.jpg",
    "https://www.w3schools.com/bootstrap/ny.jpg",
    "https://www.w3schools.com/bootstrap/la.jpg",
    "https://www.w3schools.com/bootstrap/la.jpg",
    "https://www.w3schools.com/bootstrap/la.jpg",
    "https://www.w3schools.com/bootstrap/la.jpg",
    "https://www.w3schools.com/bootstrap/la.jpg",
    "https://www.w3schools.com/bootstrap/la.jpg",
    "https://www.w3schools.com/bootstrap/la.jpg",
    "https://www.w3schools.com/bootstrap/la.jpg",
    "https://www.w3schools.com/bootstrap/la.jpg",
    "https://www.w3schools.com/bootstrap/la.jpg",
    "https://www.w3schools.com/bootstrap/la.jpg",
  ];

  const handleNext = () => {
    if (currentSlide < images.length - 5) {
      setCurrentSlide(currentSlide + 5);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 5);
    }
  };

  return (
    <div className='flex flex-col'>
      <NavBar />
      <div className="w-custom-769:w-[100vw] w-custom-769:ml-24 h-full mt-20 flex flex-col">
        <h1 className='mt-[32px]'>Outback Steakhouse</h1>
        <div className="flex h-6 w-custom-769:my-2 my-8">
          <LocaisIcon fill={'green'} />
          <p className='ml-2 text-[20px]'>Av. José Pinheiro Borges, S/N - Itaquera, São Paulo - SP, 08220-385</p>
        </div>
        <ReactStars value={4.5} edit={false} size={24} />
        <div className="carrossel flex gap-x-[60px] mt-10">
          {images.slice(currentSlide, currentSlide + 5).map((image, index) => (
            <img src={image} alt={`Image ${index + 1}`} key={index} className="w-[150px] h-[150px]" />
          ))}
          <div className="flex mt-4 justify-between">
            <button onClick={handlePrev} disabled={currentSlide === 0} className="rounded px-4 py-2 bg-gray-200 hover:bg-gray-300">Anterior</button>
            <button onClick={handleNext} disabled={currentSlide === images.length - 5} className="rounded px-4 py-2 bg-gray-200 hover:bg-gray-300">Próximo</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Restaurantes
