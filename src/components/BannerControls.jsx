import React from 'react'

const BannerControls = ({ 
  totalSlides, 
  currentSlide, 
  onDotClick, 
  showCounter = true 
}) => {
  return (
    <>
      {/* Carousel Dots - Bottom Right */}
      <div className="absolute bottom-6 right-6 flex space-x-2 z-20">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      {showCounter && (
        <div className="absolute top-4 right-4 bg-black/40 text-white px-3 py-1 rounded-full text-sm z-20 backdrop-blur-sm">
          {currentSlide + 1} / {totalSlides}
        </div>
      )}
    </>
  )
}

export default BannerControls
