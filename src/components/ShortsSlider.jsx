import React, { useRef, useState, useEffect } from 'react'
import ShortsCard from './ShortsCard'
import ShortsNavigation from './ShortsNavigation'

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
    <section className="mb-8 px-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-medium text-white">Shorts</h2>
        
        <ShortsNavigation
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
          onScrollLeft={scrollLeft}
          onScrollRight={scrollRight}
          onScrollToStart={scrollToStart}
          onScrollToEnd={scrollToEnd}
        />
      </div>
      
      {/* Shorts Cards */}
      <div 
        ref={sliderRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth"
        onScroll={checkScrollButtons}
      >
        {shorts.map((short) => (
          <ShortsCard key={short.id} short={short} />
        ))}
      </div>
    </section>
  )
}

export default ShortsSlider 