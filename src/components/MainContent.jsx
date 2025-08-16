import React, { useState } from 'react'
import VideoCard from './VideoCard'
import BannerSlider from './BannerSlider'
import ShortsSlider from './ShortsSlider'

const MainContent = ({ sidebarExpanded }) => {
  const [activeFilter, setActiveFilter] = useState('All Video')

  const filterCategories = [
    'All Video', 'One Shoot', 'Turtle Ninja', 'League of Darknes', 
    'Adventure island', 'Block Lego', 'Firenort 2', 'Bomb slack'
  ]

  const popularVideos = [
    {
      id: 1,
      title: 'Level Up Live: Turtle Ninja Gameplay Commentary',
      creator: 'Suryawachid.77',
      views: '27K views',
      time: '1 day ago',
      gradient: 'from-gray-600 to-gray-700'
    },
    {
      id: 2,
      title: 'Meditation Techniques for Beginners',
      creator: 'MindfulCreator',
      views: '15K views',
      time: '2 days ago',
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      id: 3,
      title: 'Track Running: Speed Training Tips',
      creator: 'FitnessPro',
      views: '42K views',
      time: '3 days ago',
      gradient: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      title: 'Dental Care for Kids: A Fun Guide',
      creator: 'HealthExpert',
      views: '8K views',
      time: '1 week ago',
      gradient: 'from-blue-500 to-blue-600'
    }
  ]

  return (
    <main className="flex-1 bg-gray-900 min-h-screen transition-all duration-300 ease-in-out">
      {/* Featured Video/Hero Section - Now using BannerSlider */}
      <BannerSlider />

      {/* Popular Videos Section */}
      <section className="mb-8 px-4">
        <h2 className="text-xl font-bold mb-4">Popular Videos</h2>
        
        {/* Filter Categories */}
        <div className="flex space-x-3 mb-6 overflow-x-auto pb-2">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeFilter === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      {/* Shorts Section - Now using ShortsSlider */}
      <ShortsSlider />

      {/* Additional Video Sections */}
      <section className="mb-8 px-4">
        <h2 className="text-xl font-bold mb-4">More Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularVideos.map((video) => (
            <VideoCard key={`additional-${video.id}`} video={video} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default MainContent 