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
      gradient: 'from-pink-500 via-purple-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop&crop=center'
    },
    {
      id: 2,
      title: 'Epic Gaming Moments: Best Plays of the Week',
      creator: 'GamingPro',
      views: '45K views',
      time: '2 days ago',
      gradient: 'from-green-500 via-blue-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop&crop=center'
    },
    {
      id: 3,
      title: 'Live Stream: Adventure Island Speedrun Challenge',
      creator: 'SpeedRunner',
      views: '32K views',
      time: '3 days ago',
      gradient: 'from-orange-500 via-red-500 to-pink-600',
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
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
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
              
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <h1 className="text-2xl font-bold mb-2 text-white">
                  {slide.title}
                </h1>
                <div className="flex items-center space-x-4 text-gray-200">
                  <span className="font-medium">{slide.creator}</span>
                  <span>{slide.views} • {slide.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors z-20"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors z-20"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Carousel Dots */}
        <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 left-4 bg-black/30 text-white px-3 py-1 rounded-full text-sm z-20">
          {currentSlide + 1} / {bannerSlides.length}
        </div>
      </div>
    </section>
  )
}

export default BannerSlider 