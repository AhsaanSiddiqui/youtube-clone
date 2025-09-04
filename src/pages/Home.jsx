import React, { useState } from 'react'
import BannerSlider from '../components/BannerSlider'
import ShortsSlider from '../components/ShortsSlider'
import VideoFilter from '../components/VideoFilter'
import VideoGrid from '../components/VideoGrid'

const Home = ({ sidebarExpanded }) => {
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
      {/* Featured Video/Hero Section */}
      <BannerSlider />

      {/* Popular Videos Section */}
      <div className="px-0">
        <VideoFilter 
          categories={filterCategories}
          activeFilter={activeFilter}
          onFilterChange={handleTabClick}
        />
        
        <VideoGrid 
          videos={filteredVideos}
          title="Popular Videos"
          showNoResults={true}
          activeFilter={activeFilter}
        />
      </div>

      {/* Shorts Section */}
      <ShortsSlider />

      {/* Additional Video Sections */}
      <VideoGrid 
        videos={popularVideos}
        title="More Videos"
        showNoResults={false}
      />
    </main>
  )
}

export default Home
