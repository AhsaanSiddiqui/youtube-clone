import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Play, Shuffle, MoreVertical, Clock, Bookmark, Trash2, Download, Share, ArrowUp, ArrowDown } from 'lucide-react'

const WatchLater = ({ sidebarExpanded }) => {
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [sortBy, setSortBy] = useState('Manual')
  const navigate = useNavigate()

  const watchLaterVideos = [
    {
      id: 1,
      title: "INSTRUMENTAL feat. | NESCAFÉ Basement",
      channel: "NESCAFÉ Basement",
      views: "45M views",
      duration: "10:36",
      timeAgo: "6 years ago",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop",
      addedDate: "2022-01-25"
    },
    {
      id: 2,
      title: "Web Development Tutorial - Complete Course for Beginners",
      channel: "developedbyed",
      views: "2.1M views",
      duration: "8:45",
      timeAgo: "2 years ago",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=225&fit=crop",
      addedDate: "2022-01-24"
    },
    {
      id: 3,
      title: "CSS Grid Layout Tutorial - Modern Web Design",
      channel: "Kevin Powell",
      views: "850K views",
      duration: "15:22",
      timeAgo: "1 year ago",
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=225&fit=crop",
      addedDate: "2022-01-23"
    }
  ]

  const sortOptions = [
    { value: 'Manual', label: 'Manual' },
    { value: 'Date added (newest)', label: 'Date added (newest)' },
    { value: 'Date added (oldest)', label: 'Date added (oldest)' },
    { value: 'Most popular', label: 'Most popular' },
    { value: 'Date published (newest)', label: 'Date published (newest)' },
    { value: 'Date published (oldest)', label: 'Date published (oldest)' }
  ]

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`)
  }

  const handleDropdownToggle = (videoId, event) => {
    event.stopPropagation()
    setOpenDropdown(openDropdown === videoId ? null : videoId)
  }

  const handleSortSelect = (option) => {
    setSortBy(option.value)
    setShowSortDropdown(false)
  }

  const handleVideoAction = (action, videoId) => {
    console.log(`${action} for video ${videoId}`)
    setOpenDropdown(null)
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setShowSortDropdown(false)
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={`flex-1 bg-white min-h-screen ${sidebarExpanded ? 'ml-0' : 'ml-0'}`}>
      <div className="flex h-full">
        {/* Left Panel - Watch Later Card */}
        <div className="w-80 bg-gray-800 p-6 flex flex-col">
          {/* Thumbnail */}
          <div className="relative mb-4">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop"
              alt="Watch Later"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg">
              <div className="absolute top-3 left-3 text-white text-sm font-medium">
                NESCAFÉ Basement 5
              </div>
              <div className="absolute bottom-3 left-3 text-white text-xs">
                INSTRUMENTAL feat. | NESCAFÉ Basement
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-white mb-2">Watch later</h1>
          
          {/* Creator */}
          <p className="text-gray-300 text-sm mb-4">Surya Wachid</p>
          
          {/* Stats */}
          <div className="text-gray-300 text-sm space-y-1 mb-6">
            <p>{watchLaterVideos.length} video{watchLaterVideos.length !== 1 ? 's' : ''}</p>
            <p>No views</p>
            <p>Last updated on Jan 25, 2022</p>
          </div>

          {/* More Options */}
          <div className="mb-6">
            <button className="text-gray-300 hover:text-white">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto space-y-3">
            <button 
              onClick={() => handleVideoClick(watchLaterVideos[0]?.id)}
              className="w-full bg-white text-black py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Play all
            </button>
            <button className="w-full bg-gray-700 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-600 transition-colors flex items-center justify-center gap-2">
              <Shuffle className="w-5 h-5" />
              Shuffle
            </button>
          </div>
        </div>

        {/* Right Panel - Video List */}
        <div className="flex-1 p-6">
          {/* Sort Header */}
          <div className="mb-6">
            <div className="relative dropdown-container">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-col gap-0.5">
                  <div className="w-4 h-0.5 bg-gray-600"></div>
                  <div className="w-4 h-0.5 bg-gray-600"></div>
                  <div className="w-4 h-0.5 bg-gray-600"></div>
                </div>
                <span className="text-gray-700 font-medium">Sort</span>
              </button>

              {/* Sort Dropdown */}
              {showSortDropdown && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSortSelect(option)}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        sortBy === option.value ? 'bg-gray-100' : ''
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Video List */}
          <div className="space-y-4">
            {watchLaterVideos.map((video) => (
              <div
                key={video.id}
                className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                onClick={() => handleVideoClick(video.id)}
              >
                {/* Thumbnail */}
                <div className="relative flex-shrink-0">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-40 h-24 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-1 right-1 bg-black text-white text-xs px-1 py-0.5 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{video.channel}</p>
                  <p className="text-sm text-gray-500">
                    {video.views} • {video.timeAgo}
                  </p>
                </div>

                {/* More Options */}
                <div className="relative flex-shrink-0 dropdown-container">
                  <button
                    onClick={(e) => handleDropdownToggle(video.id, e)}
                    className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </button>

                  {/* Video Action Dropdown */}
                  {openDropdown === video.id && (
                    <div className="absolute top-full right-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                      <button
                        onClick={() => handleVideoAction('Add to queue', video.id)}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors flex items-center gap-3"
                      >
                        <Play className="w-4 h-4 text-gray-600" />
                        Add to queue
                      </button>
                      <button
                        onClick={() => handleVideoAction('Save to playlist', video.id)}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors flex items-center gap-3"
                      >
                        <Bookmark className="w-4 h-4 text-gray-600" />
                        Save to playlist
                      </button>
                      <button
                        onClick={() => handleVideoAction('Remove from Watch later', video.id)}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors flex items-center gap-3"
                      >
                        <Trash2 className="w-4 h-4 text-gray-600" />
                        Remove from Watch later
                      </button>
                      <button
                        onClick={() => handleVideoAction('Download', video.id)}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors flex items-center gap-3"
                      >
                        <Download className="w-4 h-4 text-gray-600" />
                        Download
                      </button>
                      <button
                        onClick={() => handleVideoAction('Share', video.id)}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors flex items-center gap-3"
                      >
                        <Share className="w-4 h-4 text-gray-600" />
                        Share
                      </button>
                      
                      {/* Separator */}
                      <div className="border-t border-gray-200 my-1"></div>
                      
                      <button
                        onClick={() => handleVideoAction('Move to top', video.id)}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors flex items-center gap-3"
                      >
                        <ArrowUp className="w-4 h-4 text-gray-600" />
                        Move to top
                      </button>
                      <button
                        onClick={() => handleVideoAction('Move to bottom', video.id)}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors flex items-center gap-3"
                      >
                        <ArrowDown className="w-4 h-4 text-gray-600" />
                        Move to bottom
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {watchLaterVideos.length === 0 && (
            <div className="text-center py-12">
              <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No videos in Watch later</h3>
              <p className="text-gray-500 mb-4">Videos you save to watch later will appear here</p>
              <button 
                onClick={() => navigate('/')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Browse videos
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WatchLater
