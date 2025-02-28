import React, { useState, useEffect, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel = ({ children, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const slides = Array.isArray(children) ? children : [children];

  useEffect(() => {
    if (autoSlide) {
      startAutoSlide();
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [currentIndex, autoSlide, autoSlideInterval]);

  const startAutoSlide = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoSlideInterval);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    clearInterval(timerRef.current); 
  };

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % slides.length);
  };

  return (
    <div className="relative h-64 w-full overflow-hidden">
      {/* Adjust height as needed */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full shrink-0">
            {slide}
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button
          onClick={prevSlide}
          className="p-2 bg-gray-800 text-white rounded"
        >
          <ArrowBackIosIcon />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 bg-gray-800 text-white rounded"
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
      {/* Indicators (optional) */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;