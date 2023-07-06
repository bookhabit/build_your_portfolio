import React, { useState } from 'react';
import leftArrow from "../../../assets/leftArrow.svg"
import rightArrow from "../../../assets/rightArrow.svg"

interface SlideshowProps {
  slides: JSX.Element[];
}

const Slideshow: React.FC<SlideshowProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
    console.log(currentSlide)
  const showSlide = (n: number): void => {
    setCurrentSlide((n + slides.length) % slides.length);
  };

  const prevSlide = (): void => {
    showSlide(currentSlide - 1);
  };

  const nextSlide = (): void => {
    showSlide(currentSlide + 1);
  };

  return (
    <div className="slideshow-container w-full h-full flex flex-col items-center justify-evenly py-10">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={` h-3/4 w-full relative bg-green-50 rounded-lg ${index === currentSlide ? 'active' : 'hidden'}`}
        >
          {/* 슬라이드 내용 */}
            {slide}
            <button className='hover:bg-slate-50 p-5 absolute left-0 top-1/2' onClick={prevSlide}><img src={leftArrow} alt='오른쪽 방향 아이콘'/></button>
            <button className='hover:bg-slate-50 p-5 absolute right-0 top-1/2'  onClick={nextSlide}><img src={rightArrow} alt='오른쪽 방향 아이콘'/></button>
            
        </div>
      ))}

      {/* 이전/다음 버튼 */}
    </div>
  );
};

export default Slideshow;
