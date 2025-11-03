import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const History = ({ sidebarExpanded }) => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [openDropdown, setOpenDropdown] = useState(null)
  const [showClearModal, setShowClearModal] = useState(false)
  const [historyVideos, setHistoryVideos] = useState([
    {
      id: 1,
      title: "Ultimate Comedy Show | Stand-up Special | Live Performance",
      channel: "Comedy Central",
      views: "3.7M views",
      duration: "42:28",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=320&h=180&fit=crop",
      description: "Ultimate Comedy Show featuring top comedians in a live performance. Welcome to the...",
      badge: "4K",
      date: "Yesterday"
    },
    {
      id: 2,
      title: "Championship Finals Analysis | Sports Review | Expert Commentary",
      channel: "Sports Network",
      views: "22K views",
      duration: "28:29",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=320&h=180&fit=crop",
      description: "#ChampionshipFinals #SportsAnalysis #ExpertCommentary #SportsReview #FinalsAnalysis...",
      badge: "SPORTS",
      isVerified: true,
      date: "Yesterday"
    },
    {
      id: 3,
      title: "Comedy and Poetry Special | Live Show | Entertainment Mix",
      channel: "Comedy Central",
      views: "6.4M views",
      duration: "38:43",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=320&h=180&fit=crop",
      description: "Comedy and Poetry Special featuring top entertainers. These days, comedy seems to hav...",
      badge: "4K",
      date: "Yesterday"
    },
    {
      id: 4,
      title: "Team Analysis | Championship Review | Sports Commentary",
      channel: "Sports Network",
      views: "15K views",
      duration: "25:12",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=320&h=180&fit=crop",
      description: "Team analysis after championship match with expert commentary and review.",
      badge: "SPORTS",
      isVerified: true,
      date: "Yesterday"
    },
    {
      id: 5,
      title: "Web Development Tutorial | HTML CSS JavaScript Complete Course",
      channel: "Tech Academy",
      views: "125K views",
      duration: "2:15:30",
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=320&h=180&fit=crop",
      description: "Complete web development course covering HTML, CSS, and JavaScript fundamentals for beginners.",
      badge: "TUTORIAL",
      date: "2 days ago"
    },
    {
      id: 6,
      title: "Lofi Hip Hop Mix - Study Music | Chill Beats for Focus",
      channel: "Music Studio",
      views: "2.1M views",
      duration: "1:00:00",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=320&h=180&fit=crop",
      description: "Perfect study music with lofi hip hop beats to help you focus and concentrate.",
      badge: "MUSIC",
      date: "3 days ago"
    }
  ])
  const navigate = useNavigate()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target.closest('.dropdown-container')) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openDropdown])


  const filters = ['All', 'Music']

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`)
  }

  const handleDropdownToggle = (videoId, e) => {
    e.stopPropagation()
    setOpenDropdown(openDropdown === videoId ? null : videoId)
  }

  const handleDropdownAction = (action, videoId) => {
    console.log(`${action} clicked for video ${videoId}`)
    setOpenDropdown(null)
  }

  const handleClearHistory = () => {
    setShowClearModal(true)
  }

  const confirmClearHistory = () => {
    console.log('Clearing all watch history...')
    setHistoryVideos([])
    setShowClearModal(false)
  }

  const cancelClearHistory = () => {
    setShowClearModal(false)
  }

  const removeVideo = (videoId) => {
    setHistoryVideos(prevVideos => prevVideos.filter(video => video.id !== videoId))
  }

  const dropdownOptions = [
    { label: 'Add to queue', icon: 'fas fa-plus', action: 'addToQueue' },
    { label: 'Save to Watch later', icon: 'fas fa-clock', action: 'watchLater' },
    { label: 'Save to playlist', icon: 'fas fa-bookmark', action: 'saveToPlaylist' },
    { label: 'Download', icon: 'fas fa-download', action: 'download' },
    { label: 'Share', icon: 'fas fa-share', action: 'share' }
  ]

  return (
    <div className={`flex-1 bg-white min-h-screen ${sidebarExpanded ? 'ml-0' : 'ml-0'}`}>
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Watch history</h1>
            
            {/* Filter Buttons */}
            <div className="flex gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* History Videos */}
          <div className="space-y-6">
            {/* Yesterday Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Yesterday</h2>
              <div className="space-y-4">
                {historyVideos.filter(video => video.date === 'Yesterday').map((video) => (
                  <div key={video.id} className="flex gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    {/* Thumbnail */}
                    <div 
                      className="relative flex-shrink-0 cursor-pointer"
                      onClick={() => handleVideoClick(video.id)}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-48 h-27 object-cover rounded-lg"
                      />
                      {/* Badge */}
                      <div className="absolute top-2 left-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                        {video.badge}
                      </div>
                      {/* Duration */}
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>

                    {/* Video Info */}
                    <div 
                      className="flex-1 min-w-0 cursor-pointer"
                      onClick={() => handleVideoClick(video.id)}
                    >
                      <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                        {video.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-gray-600 hover:text-blue-600 transition-colors">{video.channel}</span>
                        {video.isVerified && (
                          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        )}
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{video.views}</span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex-shrink-0 flex items-start gap-2">
                      <button 
                        onClick={() => removeVideo(video.id)}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                        title="Remove from history"
                      >
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                      </button>
                      <div className="relative dropdown-container">
                        <button 
                          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                          onClick={(e) => handleDropdownToggle(video.id, e)}
                        >
                          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                          </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {openDropdown === video.id && (
                          <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                            <div className="py-1">
                              {dropdownOptions.map((option) => (
                                <button
                                  key={option.action}
                                  onClick={() => handleDropdownAction(option.action, video.id)}
                                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-3"
                                >
                                  <i className={`${option.icon} w-4 h-4 text-gray-500`}></i>
                                  {option.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2 days ago Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">2 days ago</h2>
              <div className="space-y-4">
                {historyVideos.filter(video => video.date === '2 days ago').map((video) => (
                  <div key={video.id} className="flex gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    {/* Thumbnail */}
                    <div 
                      className="relative flex-shrink-0 cursor-pointer"
                      onClick={() => handleVideoClick(video.id)}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-48 h-27 object-cover rounded-lg"
                      />
                      {/* Badge */}
                      <div className="absolute top-2 left-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                        {video.badge}
                      </div>
                      {/* Duration */}
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>

                    {/* Video Info */}
                    <div 
                      className="flex-1 min-w-0 cursor-pointer"
                      onClick={() => handleVideoClick(video.id)}
                    >
                      <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                        {video.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-gray-600 hover:text-blue-600 transition-colors">{video.channel}</span>
                        {video.isVerified && (
                          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        )}
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{video.views}</span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex-shrink-0 flex items-start gap-2">
                      <button 
                        onClick={() => removeVideo(video.id)}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                        title="Remove from history"
                      >
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                      </button>
                      <div className="relative dropdown-container">
                        <button 
                          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                          onClick={(e) => handleDropdownToggle(video.id, e)}
                        >
                          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                          </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {openDropdown === video.id && (
                          <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                            <div className="py-1">
                              {dropdownOptions.map((option) => (
                                <button
                                  key={option.action}
                                  onClick={() => handleDropdownAction(option.action, video.id)}
                                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-3"
                                >
                                  <i className={`${option.icon} w-4 h-4 text-gray-500`}></i>
                                  {option.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 days ago Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">3 days ago</h2>
              <div className="space-y-4">
                {historyVideos.filter(video => video.date === '3 days ago').map((video) => (
                  <div key={video.id} className="flex gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    {/* Thumbnail */}
                    <div 
                      className="relative flex-shrink-0 cursor-pointer"
                      onClick={() => handleVideoClick(video.id)}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-48 h-27 object-cover rounded-lg"
                      />
                      {/* Badge */}
                      <div className="absolute top-2 left-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                        {video.badge}
                      </div>
                      {/* Duration */}
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>

                    {/* Video Info */}
                    <div 
                      className="flex-1 min-w-0 cursor-pointer"
                      onClick={() => handleVideoClick(video.id)}
                    >
                      <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                        {video.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-gray-600 hover:text-blue-600 transition-colors">{video.channel}</span>
                        {video.isVerified && (
                          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        )}
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{video.views}</span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex-shrink-0 flex items-start gap-2">
                      <button 
                        onClick={() => removeVideo(video.id)}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                        title="Remove from history"
                      >
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                      </button>
                      <div className="relative dropdown-container">
                        <button 
                          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                          onClick={(e) => handleDropdownToggle(video.id, e)}
                        >
                          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                          </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {openDropdown === video.id && (
                          <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                            <div className="py-1">
                              {dropdownOptions.map((option) => (
                                <button
                                  key={option.action}
                                  onClick={() => handleDropdownAction(option.action, video.id)}
                                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-3"
                                >
                                  <i className={`${option.icon} w-4 h-4 text-gray-500`}></i>
                                  {option.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 p-6">
          {/* Search History */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search watch history"
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </div>
          </div>

          {/* History Controls */}
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <button 
                onClick={handleClearHistory}
                className="flex items-center gap-3 w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-8v6h8V7zm-2 4h-4V9h4v2zm4-12H3C1.9 1 1 1.9 1 3v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H3V5h18v14z"/>
                </svg>
                <span className="text-sm text-gray-700">Clear all watch history</span>
              </button>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <button className="flex items-center gap-3 w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
                <span className="text-sm text-gray-700">Pause watch history</span>
              </button>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <button className="flex items-center gap-3 w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                </svg>
                <span className="text-sm text-gray-700">Manage all history</span>
              </button>
            </div>

            {/* Other Links */}
            <div className="space-y-2">
              <button className="flex items-center gap-3 w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-sm text-gray-700">Comments</span>
              </button>
              <button className="flex items-center gap-3 w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-sm text-gray-700">Posts</span>
              </button>
              <button className="flex items-center gap-3 w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-sm text-gray-700">Live chat</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Clear History Modal */}
      {showClearModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="p-6">
              {/* Modal Header */}
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Clear watch history?
              </h2>
              
              {/* User Info */}
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  Demo User (demo@example.com)
                </p>
              </div>
              
              {/* Warning Message */}
              <div className="mb-6">
                <p className="text-sm text-gray-700 mb-3">
                  Your Essence Of Me watch history will be cleared from all Essence Of Me apps on all devices.
                </p>
                <p className="text-sm text-gray-700">
                  Your video recommendations will be reset, but may still be influenced by activity on other Google products. To learn more, visit{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    My Activity
                  </a>.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  onClick={cancelClearHistory}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmClearHistory}
                  className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Clear watch history
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default History
