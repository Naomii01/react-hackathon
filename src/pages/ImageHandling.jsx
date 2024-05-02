import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image1 from '../assets/Image1.jpg';
import Image2 from '../assets/Image2.jpg';
import Image3 from '../assets/Image3.jpg';
import Image4 from '../assets/Image4.webp';
import Image5 from '../assets/Image5.webp';
import NavBar from './NavBar';

function ImageHandling() {
    
  const slides = [
    { src: Image1, alt: "Image 1" },
    { src: Image2, alt: "Image 2" },
    { src: Image3, alt: "Image 3" },
    { src: Image4, alt: "Image 4" },
    { src: Image5, alt: "Image 5" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4000); // Change 5000 to the desired interval in milliseconds
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div style={{ backgroundImage: `url(${slides[currentIndex].src})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
      </div>
      {/* Left Arrow */}
      <div className='absolute top-[50%] transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='absolute top-[50%] transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageHandling;
