import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Subscriptions = ({ sidebarExpanded }) => {
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const navigate = useNavigate()

  const subscriptionVideos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop",
      title: "Everyone is Lying - Dark Sides of Vibe Coding",
      channel: "CodeWithHarry",
      views: "18K views",
      time: "4 hours ago",
      duration: "15:15",
      description: "Checkout Clerk: https://go.clerk.com/YaEOB3e Checkout Data Science The Ultimate Job Ready Data Science Course: https://www.codewithharry.com/courses/the-ultimate-job-ready-data-science-cou..."
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=225&fit=crop",
      title: "The Number 1 Mistake People Make in Cursor",
      channel: "DesignCourse",
      views: "1.2K views",
      time: "1 day ago",
      duration: "9:06",
      description: "https://bit.ly/4bTD5zu Design & code like me. Use \"UI2024\" for 25% Off! Level up your coding skills: https://scrimba.com?via=designcourse (Get 20% off using this link!) -- Today, I'm going..."
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop",
      title: "How AI & Online Education Are Transforming the Future Education System | VU Podcast",
      channel: "DesignCourse",
      views: "791 views",
      time: "1 day ago",
      duration: "1:01:28",
      description: "Future Education System with AI and Online Learning is here! In this podcast, we explore how AI, Online Learning, and Online Education in Pakistan are transforming the way students learn and..."
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225&fit=crop",
      title: "HTML & CSS form tutorial / Frontend Mentor",
      channel: "Kevin Powell",
      views: "2.8K views",
      time: "11 hours ago",
      duration: "1:01:28",
      description: "Learn how to build responsive forms with HTML and CSS using Frontend Mentor challenges."
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=225&fit=crop",
      title: "1000 video spectacular",
      channel: "Kevin Powell",
      views: "4.2K views",
      time: "Streamed 1 day ago",
      duration: "3:46:55",
      description: "Celebrating 1000 videos with special content and highlights from the channel."
    },
    {
      id: 6,
      thumbnail: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=225&fit=crop",
      title: "BUILD AN AI CHAT",
      channel: "developedbyed",
      views: "1.5K views",
      time: "2 hours ago",
      duration: "1:59:44",
      isLive: true,
      description: "Build a complete AI chat application from scratch using modern web technologies."
    }
  ]

  return (
    <div className={`flex-1 bg-white min-h-screen ${sidebarExpanded ? 'ml-0' : 'ml-0'}`}>
      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Latest</h1>
          <div className="flex items-center gap-4">
            <span 
              className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
              onClick={() => navigate('/subscriptions/manage')}
            >
              Manage
            </span>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-gray-200 text-gray-900' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                </svg>
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-gray-200 text-gray-900' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Video Display */}
        {viewMode === 'grid' ? (
          /* Grid Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {subscriptionVideos.map((video) => (
              <div key={video.id} className="cursor-pointer group">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-3">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  {/* Live Badge */}
                  {video.isLive && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold">
                      LIVE
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600">
                    {video.title}
                  </h3>
                  <div className="text-xs text-gray-600">
                    <p className="hover:text-gray-900">{video.channel}</p>
                    <p>{video.views} • {video.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List Layout */
          <div className="space-y-4">
            {subscriptionVideos.map((video) => (
              <div key={video.id} className="flex gap-4 cursor-pointer group hover:bg-gray-50 p-3 rounded-lg transition-colors">
                {/* Thumbnail */}
                <div className="relative w-48 h-32 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  {/* Live Badge */}
                  {video.isLive && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold">
                      LIVE
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2 mb-2">
                    {video.title}
                  </h3>
                  <div className="text-sm text-gray-600 mb-2">
                    <p className="hover:text-gray-900 font-medium">{video.channel}</p>
                    <p>{video.views} • {video.time}</p>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors">
            Load more
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscriptions
