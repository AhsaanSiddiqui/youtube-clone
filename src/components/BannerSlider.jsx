import React, { useState, useEffect } from 'react'

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const bannerSlides = [
    {
      id: 1,
      title: 'Rank Up solo player in Turtle Ninja from 01:00 AM - 11:00 AM',
      creator: 'Jenny Denta',
      views: '27K views',
      time: '1 day ago',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop&crop=center'
    },
    {
      id: 2,
      title: 'Epic Gaming Moments: Best Plays of the Week',
      creator: 'GamingPro',
      views: '45K views',
      time: '2 days ago',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop&crop=center'
    },
    {
      id: 3,
      title: 'Live Stream: Adventure Island Speedrun Challenge',
      creator: 'SpeedRunner',
      views: '32K views',
      time: '3 days ago',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop&crop=center'
    }
  ]

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [bannerSlides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
  }

  return (
    <section className="relative mb-8">
      <div className="relative h-96 mx-4 mt-4 overflow-hidden rounded-xl">
        {/* Slides */}
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
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
        ))}

        {/* Navigation Arrows */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-all duration-200 z-20 hover:scale-110"
        >
          <i className="fas fa-chevron-left text-lg"></i>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-all duration-200 z-20 hover:scale-110"
        >
          <i className="fas fa-chevron-right text-lg"></i>
        </button> */}

        {/* Carousel Dots - Bottom Right */}
        <div className="absolute bottom-6 right-6 flex space-x-2 z-20">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 bg-black/40 text-white px-3 py-1 rounded-full text-sm z-20 backdrop-blur-sm">
          {currentSlide + 1} / {bannerSlides.length}
        </div>
      </div>
    </section>
  )
}

export default BannerSlider 