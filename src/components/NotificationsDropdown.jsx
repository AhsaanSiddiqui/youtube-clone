import React, { useState } from 'react'

const NotificationsDropdown = ({ isOpen, onClose }) => {
  const [showContextMenu, setShowContextMenu] = useState(null)

  const notifications = [
    {
      id: 1,
      type: 'upload',
      channel: 'DesignCourse',
      channelAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      title: 'I built an AI App for my Wife\'s Business (with Replit)',
      time: '9 hours ago',
      thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=45&fit=crop',
      isImportant: true
    },
    {
      id: 2,
      type: 'upload',
      channel: 'Kevin Powell',
      channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      title: 'HTML & CSS form tutorial / Frontend Mentor',
      time: '9 hours ago',
      thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=80&h=45&fit=crop',
      isImportant: true
    },
    {
      id: 3,
      type: 'live',
      channel: 'Kevin Powell',
      channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      title: '1000 video spectacular',
      time: '1 day ago',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=80&h=45&fit=crop',
      isImportant: false
    },
    {
      id: 4,
      type: 'live',
      channel: 'DesignCourse',
      channelAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      title: 'Building an AI Chat System in Cursor - LIVE',
      time: '1 day ago',
      thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=80&h=45&fit=crop',
      isImportant: false
    },
    {
      id: 5,
      type: 'upload',
      channel: 'developedbyed',
      channelAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
      title: 'Ranking The Most Popular Terminals',
      time: '2 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=80&h=45&fit=crop',
      isImportant: false
    },
    {
      id: 6,
      type: 'upload',
      channel: 'CodeWithHarry',
      channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      title: 'Python Tutorial for Beginners - Complete Course',
      time: '3 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=80&h=45&fit=crop',
      isImportant: false
    },
    {
      id: 7,
      type: 'upload',
      channel: 'Wormono Music',
      channelAvatar: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=40&h=40&fit=crop&crop=face',
      title: 'Lofi Hip Hop Mix - Study Music',
      time: '4 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=80&h=45&fit=crop',
      isImportant: false
    },
    {
      id: 8,
      type: 'upload',
      channel: 'ABID FAROOQ BHUTTA',
      channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      title: 'Data Structures and Algorithms Explained',
      time: '5 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=80&h=45&fit=crop',
      isImportant: false
    },
    {
      id: 9,
      type: 'upload',
      channel: 'Virtual University of Pakistan',
      channelAvatar: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=40&h=40&fit=crop&crop=face',
      title: 'Computer Science Course - Lecture 1',
      time: '6 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=80&h=45&fit=crop',
      isImportant: false
    },
    {
      id: 10,
      type: 'upload',
      channel: 'DesignCourse',
      channelAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      title: 'UI/UX Design Principles - Complete Guide',
      time: '1 week ago',
      thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=45&fit=crop',
      isImportant: false
    }
  ]

  const importantNotifications = notifications.filter(n => n.isImportant)
  const otherNotifications = notifications.filter(n => !n.isImportant)

  const handleContextMenu = (e, notificationId) => {
    e.preventDefault()
    e.stopPropagation()
    setShowContextMenu(notificationId)
  }

  const handleCloseContextMenu = () => {
    setShowContextMenu(null)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
      />
      
      {/* Dropdown */}
      <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-128 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Important Notifications */}
          {importantNotifications.length > 0 && (
            <div className="p-4">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Important</h4>
              <div className="space-y-3">
                {importantNotifications.map((notification) => (
                  <div key={notification.id} className="relative">
                    <div 
                      className="flex gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                      onContextMenu={(e) => handleContextMenu(e, notification.id)}
                    >
                      {/* Channel Avatar */}
                      <div className="flex-shrink-0">
                        <img
                          src={notification.channelAvatar}
                          alt={notification.channel}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>

                      {/* Notification Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex gap-2 mb-1">
                          <span className="text-sm font-medium text-gray-900 truncate">
                            {notification.channel}
                          </span>
                          <span className="text-sm text-gray-500">
                            {notification.type === 'upload' ? 'uploaded:' : 'is live:'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 line-clamp-2 mb-1">
                          {notification.title}
                        </p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>

                      {/* Thumbnail */}
                      <div className="flex-shrink-0">
                        <img
                          src={notification.thumbnail}
                          alt={notification.title}
                          className="w-16 h-9 rounded object-cover"
                        />
                      </div>
                    </div>

                    {/* Context Menu */}
                    {showContextMenu === notification.id && (
                      <div className="absolute top-0 left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        <div className="py-1">
                          <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            Hide this notification
                          </button>
                          <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                            Show fewer from {notification.channel}
                          </button>
                          <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                            </svg>
                            Turn off all from {notification.channel}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* More Notifications */}
          {otherNotifications.length > 0 && (
            <div className="p-4 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-700 mb-3">More notifications</h4>
              <div className="space-y-3">
                {otherNotifications.map((notification) => (
                  <div key={notification.id} className="flex gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                    {/* Channel Avatar */}
                    <div className="flex-shrink-0">
                      <img
                        src={notification.channelAvatar}
                        alt={notification.channel}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>

                    {/* Notification Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex gap-2 mb-1">
                        <span className="text-sm font-medium text-gray-900 truncate">
                          {notification.channel}
                        </span>
                        <span className="text-sm text-gray-500">
                          {notification.type === 'upload' ? 'uploaded:' : 'is live:'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 line-clamp-2 mb-1">
                        {notification.title}
                      </p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>

                    {/* Thumbnail */}
                    <div className="flex-shrink-0">
                      <img
                        src={notification.thumbnail}
                        alt={notification.title}
                        className="w-16 h-9 rounded object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 text-center flex-shrink-0">
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View all notifications
          </button>
        </div>
      </div>
    </>
  )
}

export default NotificationsDropdown
