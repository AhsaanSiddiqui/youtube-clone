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
      <div className="relative h-80 mx-4 mt-4 overflow-hidden rounded-xl">
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
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"></div>
              
              {/* Text Content Wrapper */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="max-w-3xl">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <div className="flex items-center space-x-6 text-gray-200">
                    <span className="font-semibold text-lg md:text-xl">{slide.creator}</span>
                    <span className="text-base md:text-lg">{slide.views} • {slide.time}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
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
        </button>

        {/* Carousel Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70 hover:scale-110'
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