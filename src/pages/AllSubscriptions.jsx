import React, { useState } from 'react'

const AllSubscriptions = ({ sidebarExpanded }) => {
  const [sortFilter, setSortFilter] = useState('Most relevant')
  const [showSortDropdown, setShowSortDropdown] = useState(false)

  const subscriptions = [
    {
      id: 1,
      name: "Kevin Powell",
      handle: "@KevinPowell",
      subscribers: "989K subscribers",
      description: "Helping you learn how to make the web, and make it look good while you're at it. With weekly videos and shorts, I'll be bringing you How Tos and Tutorials, as well as simple tips and tricks, with a big focus on helping people see",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      isSubscribed: true,
      notifications: "All"
    },
    {
      id: 2,
      name: "DesignCourse",
      handle: "@VirtualUniversity",
      subscribers: "245K subscribers",
      description: "Course Lectures from DesignCourse The Virtual University, Pakistan's first University based completely on modern Information and Communication Technologies, was established by the Government as a",
      avatar: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=80&h=80&fit=crop&crop=face",
      isSubscribed: true,
      notifications: "All"
    },
    {
      id: 3,
      name: "Wormono Music",
      handle: "@AbidFarooqBhutta",
      subscribers: "12.5K subscribers",
      description: "Wormono Music is a computer teacher with strong career in computer sciences. check my profits and description. -M.PHIL in Computer Sciences from VU with 3.47 CGPA. -I am also did MIT from Punjab university. -I",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      isSubscribed: true,
      notifications: "Personalized"
    },
    {
      id: 4,
      name: "Wormono Music",
      handle: "@WormonoMusic",
      subscribers: "8.2K subscribers",
      description: "WORMONO is an Indian producer and musician. He takes Lofi one step further by finding creative uses for plugins",
      avatar: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=80&h=80&fit=crop&crop=face",
      isSubscribed: true,
      notifications: "None"
    },
    {
      id: 5,
      name: "developedbyed",
      handle: "@developedbyed",
      subscribers: "156K subscribers",
      description: "Learn web development with practical projects and tutorials. Building real-world applications step by step.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      isSubscribed: true,
      notifications: "All"
    },
    {
      id: 6,
      name: "DesignCourse",
      handle: "@DesignCourse",
      subscribers: "89.3K subscribers",
      description: "UI/UX Design tutorials and web development courses. Learn to design and code beautiful websites.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      isSubscribed: true,
      notifications: "Personalized"
    },
    {
      id: 7,
      name: "CodeWithHarry",
      handle: "@CodeWithHarry",
      subscribers: "2.1M subscribers",
      description: "Learn programming with Harry. Python, JavaScript, React, and more. Making coding accessible to everyone.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      isSubscribed: true,
      notifications: "All"
    },
    {
      id: 8,
      name: "DesignCourse",
      handle: "@VUPakistan",
      subscribers: "45.7K subscribers",
      description: "Official channel of DesignCourse. Educational content and university updates.",
      avatar: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=80&h=80&fit=crop&crop=face",
      isSubscribed: true,
      notifications: "None"
    }
  ]

  const sortOptions = [
    'Most relevant',
    'Alphabetical (A-Z)',
    'Alphabetical (Z-A)',
    'Most recent activity',
    'Least recent activity'
  ]

  const notificationOptions = [
    'All',
    'Personalized',
    'None'
  ]

  return (
    <div className={`flex-1 bg-white min-h-screen ${sidebarExpanded ? 'ml-0' : 'ml-0'}`}>
      <div className="p-6">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">All subscriptions</h1>
          
          {/* Sort Filter */}
          <div className="relative">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm text-gray-700">{sortFilter}</span>
              <svg className={`w-4 h-4 text-gray-500 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </button>

            {/* Sort Dropdown */}
            {showSortDropdown && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortFilter(option)
                      setShowSortDropdown(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                      sortFilter === option ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Subscriptions List */}
        <div className="space-y-4">
          {subscriptions.map((channel) => (
            <div key={channel.id} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
              {/* Channel Avatar */}
              <div className="flex-shrink-0">
                <img
                  src={channel.avatar}
                  alt={channel.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>

              {/* Channel Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-medium text-gray-900 truncate">{channel.name}</h3>
                  <span className="text-sm text-gray-500">{channel.handle}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{channel.subscribers}</p>
                <p className="text-sm text-gray-700 line-clamp-2">{channel.description}</p>
              </div>

              {/* Subscription Button */}
              <div className="flex-shrink-0">
                <SubscriptionDropdown 
                  channel={channel}
                  notificationOptions={notificationOptions}
                />
              </div>
            </div>
          ))}
        </div>

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

// Subscription Dropdown Component
const SubscriptionDropdown = ({ channel, notificationOptions }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [currentNotification, setCurrentNotification] = useState(channel.notifications)

  // Get the appropriate icon for the current notification setting
  const getNotificationIcon = (setting) => {
    switch (setting) {
      case 'All':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
        )
      case 'Personalized':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
        )
      case 'None':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
            <path d="M2 2l20 20" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
          </svg>
        )
      default:
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
        )
    }
  }

  // Get the appropriate icon for dropdown options
  const getDropdownIcon = (option) => {
    switch (option) {
      case 'All':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
        )
      case 'Personalized':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
        )
      case 'None':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
            <path d="M2 2l20 20" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
          </svg>
        )
      default:
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
        )
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors"
      >
        {getNotificationIcon(currentNotification)}
        <span>Subscribed</span>
        <svg className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </button>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <div className="py-1">
            {/* Notification Settings */}
            <div className="px-3 py-2 border-b border-gray-100">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Notifications</p>
            </div>
            {notificationOptions.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setCurrentNotification(option)
                  setShowDropdown(false)
                }}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 ${
                  currentNotification === option ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                }`}
              >
                {getDropdownIcon(option)}
                {option}
              </button>
            ))}
            
            {/* Divider */}
            <div className="border-t border-gray-100 my-1"></div>
            
            {/* Unsubscribe Option */}
            <button
              onClick={() => setShowDropdown(false)}
              className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
              </svg>
              Unsubscribe
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AllSubscriptions
