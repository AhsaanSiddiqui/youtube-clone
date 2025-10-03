import React, { useState } from 'react'
import StudioLayout from '../../components/studio/StudioLayout'

const StudioContent = ({ sidebarExpanded }) => {
  const [activeTab, setActiveTab] = useState('videos')
  const [showFilter, setShowFilter] = useState(false)
  const [activeFilters, setActiveFilters] = useState([])
  const [showFilterDropdown, setShowFilterDropdown] = useState(false)

  const filterOptions = [
    { id: 'brand-linking', label: 'Brand linking' },
    { id: 'copyright', label: 'Copyright' },
    { id: 'description', label: 'Description' },
    { id: 'made-for-kids', label: 'Made for kids' },
    { id: 'title', label: 'Title' },
    { id: 'views', label: 'Views' },
    { id: 'visibility', label: 'Visibility' }
  ]

  const removeFilter = (filterId) => {
    console.log('Removing filter:', filterId)
    console.log('Active filters before:', activeFilters)
    const updatedFilters = activeFilters.filter(filter => filter.id !== filterId)
    console.log('Active filters after:', updatedFilters)
    setActiveFilters(updatedFilters)
  }

  const addFilter = (filterOption) => {
    const newFilter = {
      id: filterOption.id,
      label: `${filterOption.label}: Any`,
      type: filterOption.id
    }
    setActiveFilters([...activeFilters, newFilter])
    setShowFilterDropdown(false)
  }

  // Render different content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'inspiration':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspirationContent.map((item) => (
              <div key={item.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        )
      
      case 'shorts':
        return (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Short
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Visibility
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Views
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sampleShorts.map((short) => (
                    <tr key={short.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" className="rounded border-gray-300" />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-28 bg-gray-200 rounded flex items-center justify-center">
                            <span className="text-xs text-gray-500">Short</span>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">{short.title}</h3>
                            <p className="text-xs text-gray-500">{short.duration}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{short.visibility}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{short.date}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{short.views.toLocaleString()}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      
      case 'live':
        return (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stream
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sampleLiveStreams.map((stream) => (
                    <tr key={stream.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" className="rounded border-gray-300" />
                      </td>
                      <td className="px-6 py-4">
                        <h3 className="text-sm font-medium text-gray-900">{stream.title}</h3>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          {stream.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{stream.date}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{stream.time}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      
      case 'posts':
        return (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Post
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Engagement
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {samplePosts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" className="rounded border-gray-300" />
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">{post.title}</h3>
                          <p className="text-xs text-gray-500 mt-1">{post.content}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{post.date}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{post.engagement}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      
      case 'playlists':
        return (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Playlist
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Videos
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Visibility
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {samplePlaylists.map((playlist) => (
                    <tr key={playlist.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" className="rounded border-gray-300" />
                      </td>
                      <td className="px-6 py-4">
                        <h3 className="text-sm font-medium text-gray-900">{playlist.title}</h3>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{playlist.videoCount}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{playlist.visibility}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{playlist.date}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      
      case 'podcasts':
      case 'promotions':
      case 'collaborations':
        return (
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {activeTab === 'podcasts' ? 'Podcasts' : activeTab === 'promotions' ? 'Promotions' : 'Collaborations'}
            </h3>
            <p className="text-gray-600">No {activeTab} content yet</p>
          </div>
        )
      
      default: // videos
        return (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Video
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Visibility
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Restrictions
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                      <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Comments
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Likes (vs. dislikes)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sampleVideos.map((video) => (
                    <tr key={video.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" className="rounded border-gray-300" />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-start space-x-4">
                          <div className="relative flex-shrink-0">
                            <div className="w-32 h-18 bg-gray-200 rounded flex items-center justify-center">
                              <span className="text-xs text-gray-500">Thumbnail</span>
                            </div>
                            <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1 py-0.5 rounded">
                              {video.duration}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-medium text-gray-900 mb-1">
                              {video.title}
                            </h3>
                            <p className="text-xs text-gray-500 line-clamp-2">
                              {video.description}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-1">
                          <span>{video.visibilityIcon}</span>
                          <span className="text-sm text-gray-900">{video.visibility}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{video.restrictions}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm text-gray-900">{video.date}</div>
                          <div className="text-xs text-gray-500">{video.status}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{video.views.toLocaleString()}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{video.comments.toLocaleString()}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{video.likes}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
    }
  }

  // Get available filter options (not already selected)
  const getAvailableFilters = () => {
    const activeFilterIds = activeFilters.map(filter => filter.id)
    return filterOptions.filter(option => !activeFilterIds.includes(option.id))
  }

  // Sample data for different content types
  const sampleVideos = [
    {
      id: 1,
      title: "Test Video",
      description: "Test Video Test Video Test Video Test Video Test Video Test Video Test Video Test Video Test Video...",
      thumbnail: "/api/placeholder/120/68",
      duration: "1:17",
      visibility: "Public",
      visibilityIcon: "🌍",
      restrictions: "None",
      date: "Sep 30, 2025",
      status: "Published",
      views: 0,
      comments: 0,
      likes: "-"
    }
  ]

  const sampleShorts = [
    {
      id: 1,
      title: "Quick Tutorial",
      duration: "0:45",
      visibility: "Public",
      views: 1250,
      date: "Oct 1, 2025"
    }
  ]

  const sampleLiveStreams = [
    {
      id: 1,
      title: "Live Gaming Session",
      status: "Scheduled",
      date: "Oct 2, 2025",
      time: "7:00 PM"
    }
  ]

  const samplePosts = [
    {
      id: 1,
      title: "Community Update",
      content: "Thanks for all your support!",
      engagement: 45,
      date: "Sep 29, 2025"
    }
  ]

  const samplePlaylists = [
    {
      id: 1,
      title: "My Favorite Videos",
      videoCount: 12,
      visibility: "Public",
      date: "Sep 25, 2025"
    }
  ]

  const inspirationContent = [
    {
      id: 1,
      title: "Trending Topics",
      description: "See what's trending in your niche",
      icon: "📈"
    },
    {
      id: 2,
      title: "Creator Tips",
      description: "Best practices from successful creators",
      icon: "💡"
    },
    {
      id: 3,
      title: "Video Ideas",
      description: "Get inspired with fresh content ideas",
      icon: "🎬"
    }
  ]

  const tabs = [
    { id: 'inspiration', label: 'Inspiration' },
    { id: 'videos', label: 'Videos' },
    { id: 'shorts', label: 'Shorts' },
    { id: 'live', label: 'Live' },
    { id: 'posts', label: 'Posts' },
    { id: 'playlists', label: 'Playlists' },
    { id: 'podcasts', label: 'Podcasts' },
    { id: 'promotions', label: 'Promotions' },
    { id: 'collaborations', label: 'Collaborations' }
  ]

  return (
    <>
      <StudioLayout 
        sidebarExpanded={sidebarExpanded}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-normal text-gray-900 mb-6">Channel content</h1>
            
            {/* Tabs Navigation */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="mb-4">
            <div className="flex items-center space-x-3">
              {/* Filter Button */}
              <button 
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md border border-gray-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
                </svg>
                <span>Filter</span>
              </button>

              {/* Active Filter Chips */}
              {activeFilters.length > 0 && (
                <div className="flex items-center space-x-2">
                  {activeFilters.map((filter) => (
                    <div key={filter.id} className="flex items-center bg-blue-50 border border-blue-200 rounded-full px-3 py-1">
                      <span className="text-sm text-blue-700">{filter.label}</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          removeFilter(filter.id)
                        }}
                        className="ml-2 text-blue-500 hover:text-blue-700"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Filter Dropdown */}
            {showFilterDropdown && (
              <div className="absolute z-50 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg">
                <div className="py-1">
                  {getAvailableFilters().map((option) => (
                    <button
                      key={option.id}
                      onClick={() => addFilter(option)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {option.label}
                    </button>
                  ))}
                  {getAvailableFilters().length === 0 && (
                    <div className="px-4 py-2 text-sm text-gray-500">
                      No more filters available
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Dynamic Tab Content */}
          {renderTabContent()}

          {/* Pagination - Only show for table views */}
          {(activeTab === 'videos' || activeTab === 'shorts' || activeTab === 'live' || activeTab === 'posts' || activeTab === 'playlists') && (
            <div className="bg-white px-6 py-4 border-t border-gray-200 flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Rows per page:</span>
                <select className="text-sm border border-gray-300 rounded px-2 py-1">
                  <option>30</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">1-1 of 1</span>
                <div className="flex space-x-1">
                  <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50" disabled>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50" disabled>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50" disabled>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50" disabled>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </StudioLayout>
    </>
  )
}

export default StudioContent
