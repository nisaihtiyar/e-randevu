"use client";
import { useState } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/slide1.jpg', '/slide2.png', '/slide3.jpg']; // Resim URL'lerini değiştirin
  const texts = [
    "Bu metin slayt 1 için",
    "Bu metin slayt 2 için",
    "Bu metin slayt 3 için"
  ]; // Metinleri değiştirin

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
  <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px]">
    <div className="relative overflow-hidden min-h-[400px] sm:min-h-[550px]">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`}/>

      {/* Sol yönlü buton */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 text-blue-500 text-center font-bold text-2xl p-3 rounded-full"
        onClick={prevSlide}
      >
        <GrFormPrevious />
      </button>

      {/* Sağ yönlü buton */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 text-blue-500 text-center font-bold text-2xl p-3 rounded-full"
        onClick={nextSlide}
      >
        <MdNavigateNext />
      </button>

      {/* Metin eklemek için */}
      <p className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 text-blue-500 text-center font-bold p-2">
        {texts[currentIndex]}
      </p>
      
    </div>
    </div>
  );
};

export default Slider;