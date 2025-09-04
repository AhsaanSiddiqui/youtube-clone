import React, { useState, useEffect } from 'react'
import ShortsVideoPlayer from '../components/ShortsVideoPlayer'
import ShortsNavigation from '../components/ShortsNavigation'
import ShortsActions from '../components/ShortsActions'

const Shorts = ({ sidebarExpanded }) => {
  const [currentShortIndex, setCurrentShortIndex] = useState(0)

  // Mock data for the Shorts
  const shortsData = [
    {
      id: 1,
      title: "RS 18,800?",
      description: "Homebridge by Beaconhouse Online A Level programme admissions are open for 2025",
      sponsor: "Homebridge by Beaconhouse",
      likes: "1.2K",
      comments: "0",
      videoUrl: "#", // Placeholder for actual video
      thumbnail: "https://via.placeholder.com/400x700/00CED1/FFFFFF?text=RS+18,800?"
    },
    {
      id: 2,
      title: "Coding Tips!",
      description: "Learn these 5 JavaScript tricks that will make you a better developer",
      sponsor: "JavaScript Mastery",
      likes: "2.5K",
      comments: "45",
      videoUrl: "#",
      thumbnail: "https://via.placeholder.com/400x700/FF6B6B/FFFFFF?text=Coding+Tips!"
    },
    {
      id: 3,
      title: "React Hooks",
      description: "Master useState and useEffect with these practical examples",
      sponsor: "React Academy",
      likes: "3.1K",
      comments: "89",
      videoUrl: "#",
      thumbnail: "https://via.placeholder.com/400x700/4ECDC4/FFFFFF?text=React+Hooks"
    }
  ]

  const handleNextShort = () => {
    setCurrentShortIndex((prev) => (prev + 1) % shortsData.length)
  }

  const handlePreviousShort = () => {
    setCurrentShortIndex((prev) => (prev - 1 + shortsData.length) % shortsData.length)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowUp') {
        handlePreviousShort()
      } else if (event.key === 'ArrowDown') {
        handleNextShort()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <div className={`flex-1 bg-gray-900 min-h-screen ${sidebarExpanded ? 'ml-0' : 'ml-0'}`}>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex items-center gap-4">
          {/* Main Shorts Video Player */}
          <div className="relative">
            <ShortsVideoPlayer 
              short={shortsData[currentShortIndex]}
            />
          </div>
          
          {/* Right Side Actions */}
          <div className="flex flex-col items-center gap-6">
            <ShortsActions 
              short={shortsData[currentShortIndex]}
            />
          </div>
          
          {/* Navigation Arrows */}
          <ShortsNavigation 
            onNext={handleNextShort}
            onPrevious={handlePreviousShort}
          />
          
          {/* Progress Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {shortsData.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentShortIndex 
                    ? 'bg-white w-6' 
                    : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shorts
