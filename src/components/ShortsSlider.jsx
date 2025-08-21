import React, { useRef, useState, useEffect } from 'react'
import ShortsCard from './ShortsCard'

const ShortsSlider = () => {
  const sliderRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const shorts = [
    { id: 1, title: 'Do or die', views: '27K views', time: '1 day ago' },
    { id: 2, title: 'Epic Fail Compilation', views: '15K views', time: '2 days ago' },
    { id: 3, title: 'Amazing Skills', views: '32K views', time: '1 day ago' },
    { id: 4, title: 'Funny Moments', views: '18K views', time: '3 days ago' },
    { id: 5, title: 'Gaming Highlights', views: '25K views', time: '1 day ago' },
    { id: 6, title: 'Tutorial Tips', views: '12K views', time: '4 days ago' }
  ]

  // Check scroll position and update button states
  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  // Update button states on mount and window resize
  useEffect(() => {
    checkScrollButtons()
    window.addEventListener('resize', checkScrollButtons)
    return () => window.removeEventListener('resize', checkScrollButtons)
  }, [])

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  const scrollToStart = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }

  const scrollToEnd = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: sliderRef.current.scrollWidth, behavior: 'smooth' })
    }
  }

  return (
    <section className="mb-8 px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-medium text-white">Shorts</h2>
        <div className="flex space-x-2">
          {/* Scroll to Start/End buttons */}
          <button 
            onClick={scrollToStart}
            className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all duration-200 text-xs hover:scale-110"
            title="Go to start"
          >
            <i className="fas fa-angle-double-left"></i>
          </button>
          
          <button 
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
              canScrollLeft 
                ? 'bg-gray-700 hover:bg-gray-600 cursor-pointer hover:scale-110' 
                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
            }`}
          >
            <i className="fas fa-chevron-left text-sm"></i>
          </button>
          
          <button 
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
              canScrollRight 
                ? 'bg-gray-700 hover:bg-gray-600 cursor-pointer hover:scale-110' 
                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
            }`}
          >
            <i className="fas fa-chevron-right text-sm"></i>
          </button>
          
          <button 
            onClick={scrollToEnd}
            className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all duration-200 text-xs hover:scale-110"
            title="Go to end"
          >
            <i className="fas fa-angle-double-right"></i>
          </button>
        </div>
      </div>
      
      {/* Shorts Horizontal Scroll */}
      <div 
        ref={sliderRef}
        className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
        onScroll={checkScrollButtons}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {shorts.map((short) => (
          <ShortsCard key={short.id} short={short} />
        ))}
      </div>
      
      {/* Scroll Progress Indicator */}
      <div className="mt-4 px-4">
        <div className="w-full bg-gray-700 rounded-full h-1">
          <div 
            className="bg-purple-500 h-1 rounded-full transition-all duration-300"
            style={{ 
              width: `${canScrollLeft ? '50%' : '0%'}` 
            }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Scroll to navigate</span>
          <span>{shorts.length} shorts available</span>
        </div>
      </div>
    </section>
  )
}

export default ShortsSlider 