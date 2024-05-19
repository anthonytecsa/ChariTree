import React, { useState } from 'react';
import CharityBoxes from './CharityBoxes';

const CharityBoxCarousel = ({ items, itemsToShow = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - itemsToShow : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - itemsToShow ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative max-w-full">
      <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10">
        &#8592;
      </button>
      <div className="flex overflow-hidden">
        {items.slice(currentIndex, currentIndex + itemsToShow).map((item, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 mb-10 px-2" key={index}>
            <CharityBoxes
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              text={item.text}
            />
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10">
        &#8594;
      </button>
    </div>
  );
};

export default CharityBoxCarousel;
