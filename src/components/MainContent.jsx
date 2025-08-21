import React, { useState } from 'react'
import BannerSlider from './BannerSlider'
import ShortsSlider from './ShortsSlider'
import VideoCard from './VideoCard'

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
      category: 'Turtle Ninja',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop&crop=center'
    },
    {
      id: 2,
      title: 'Epic Adventures in League of Darknes: Live Gameplay',
      creator: 'Selly durinto',
      views: '27K views',
      time: '1 day ago',
      category: 'League of Darknes',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=225&fit=crop&crop=center'
    },
    {
      id: 3,
      title: 'Epic Adventures in Adventure Island: Live Gameplay',
      creator: 'Jonesy',
      views: '27K views',
      time: '1 day ago',
      category: 'Adventure island',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=225&fit=crop&crop=center'
    },
    {
      id: 4,
      title: 'Dental Care for Kids: A Fun Guide',
      creator: 'HealthExpert',
      views: '8K views',
      time: '1 week ago',
      category: 'Block Lego',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop&crop=center'
    },
    {
      id: 5,
      title: 'Epic Adventures in League of Darknes: Live Gameplay',
      creator: 'Selly durinto',
      views: '27K views',
      time: '1 day ago',
      category: 'League of Darknes',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop&crop=center'
    },
    {
      id: 6,
      title: 'Firenort 2 Showdown: Live Stream Highlights',
      creator: 'Jonathan simbel',
      views: '27K views',
      time: '1 day ago',
      category: 'Firenort 2',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=225&fit=crop&crop=center'
    }
  ]

  // Filter videos based on selected category
  const filteredVideos = activeFilter === 'All Video' 
    ? popularVideos 
    : popularVideos.filter(video => video.category === activeFilter)

  const handleTabClick = (category) => {
    setActiveFilter(category)
    console.log('Filter changed to:', category)
  }

  return (
    <main className={`flex-1 min-h-screen transition-all duration-500 ease-in-out bg-brown-950 ${
      sidebarExpanded ? 'ml-0' : 'ml-0'
    }`}>
      {/* Featured Video/Hero Section - Now using BannerSlider */}
      <BannerSlider />

      {/* Popular Videos Section */}
      <section className="mb-8 px-6">
        <h2 className="text-3xl font-medium mb-6 text-white">Popular Videos</h2>
        
        {/* Filter Categories */}
        <div className="flex space-x-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {filterCategories.map((category) => (
            <button
            key={category}
            onClick={() => handleTabClick(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 mx-2 border ${
              activeFilter === category
                ? 'bg-white text-black shadow-lg scale-105'
                : 'text-white hover:bg-white hover:text-black hover:scale-105'
            }`}
          >
              {category}
            </button>
          ))}
        </div>
        
        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
        
        {/* No Results Message */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400 text-lg">No videos found for "{activeFilter}"</p>
            <p className="text-gray-500 text-sm">Try selecting a different category</p>
          </div>
        )}
      </section>

      {/* Shorts Section - Now using ShortsSlider */}
      <ShortsSlider />

      {/* Additional Video Sections */}
      <section className="mb-8 px-6">
        <h2 className="text-3xl font-medium mb-6 text-white">More Videos</h2>
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