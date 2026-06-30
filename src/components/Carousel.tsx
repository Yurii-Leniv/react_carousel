import React, { useState } from 'react';
import './Carousel.scss';



type CarouselProps = {
  images: string[];
  step: number;
  frameSize: number;
  itemWidth: number;
  animationDuration: number;
}



const Carousel: React.FC<CarouselProps> = ({ images, step, frameSize, itemWidth, animationDuration }) =>{
  const [position, setPosition] = useState(0);

  // Обчислюємо максимально можливу позицію.
  // Math.max потрібен на випадок, якщо картинок менше, ніж розмір рамки.
  const maxPosition = Math.max(0, images.length - frameSize);

  const handleNext = () => {
    // Не дозволяємо новій позиції бути більшою за максимальну.
    setPosition(prev => Math.min(prev + step, maxPosition));
  };

  const handlePrev = () => {
    setPosition(prev => Math.max(prev - step, 0));
  };

  return (
    <div className="Carousel">
      <div
        className="conteiner"
        style={{ width: `${itemWidth * frameSize}px` }}
      >
        <ul
          className="Carousel__list"
          style={{
            transform: `translateX(-${position * itemWidth}px)`,
            transition: `transform ${animationDuration}ms ease-in-out`,
          }}
        >
          {images.map((image, index) => (
            <li key={index} style={{ minWidth: `${itemWidth}px` }}>
              <img src={image} alt={`Image ${index + 1}`} width={itemWidth} />
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handlePrev}
        type="button"
        disabled={position === 0}
      >Prev</button>
      <button
        onClick={handleNext}
        type="button"
        data-cy="next"
        disabled={position >= maxPosition}
      >Next</button>
    </div>
  );
}

export default Carousel;
