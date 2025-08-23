import React from 'react'

const BannerSlide = ({ slide, isActive, onClick }) => {
  return (
    <div
      className={`absolute inset-0 transition-all duration-700 ease-in-out cursor-pointer ${
        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
      }`}
      onClick={() => onClick(slide.id)}
    >
      <div className="w-full h-full relative">
        {/* Background Image */}
        <img 
          src={slide.image} 
          alt={slide.title}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        
        {/* Content Layout - Left Side Text, Right Side Visual */}
        <div className="absolute inset-0 flex">
          {/* Left Side - Text Content */}
          <div className="w-1/2 flex flex-col justify-center p-8">
            <div className="max-w-md">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-white leading-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" 
                    alt={slide.creator}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-white">{slide.creator}</span>
                  <i className="fas fa-check-circle text-blue-500 text-sm"></i>
                </div>
              </div>
              <p className="text-gray-300 text-sm">{slide.views} • {slide.time}</p>
            </div>
          </div>
          
          {/* Right Side - Visual Content (if needed) */}
          <div className="w-1/2"></div>
        </div>
      </div>
    </div>
  )
}

export default BannerSlide
