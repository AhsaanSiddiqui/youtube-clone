import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BannerSlide from './BannerSlide'
import BannerControls from './BannerControls'

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

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

  const handleSlideClick = (slideId) => {
    navigate(`/video/${slideId}`)
  }

  return (
    <section className="relative mb-8">
      <div className="relative h-96 mx-4 mt-4 overflow-hidden rounded-xl">
        {/* Slides */}
        {bannerSlides.map((slide, index) => (
          <BannerSlide
            key={slide.id}
            slide={slide}
            isActive={index === currentSlide}
            onClick={handleSlideClick}
          />
        ))}

        {/* Controls */}
        <BannerControls
          totalSlides={bannerSlides.length}
          currentSlide={currentSlide}
          onDotClick={goToSlide}
        />
      </div>
    </section>
  )
}

export default BannerSlider 