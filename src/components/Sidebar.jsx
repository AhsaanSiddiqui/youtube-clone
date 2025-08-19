import React from 'react'

const Sidebar = ({ expanded }) => {
  const navigationItems = [
    { icon: 'fas fa-home', label: 'Home', active: true },
    { icon: 'fas fa-envelope', label: 'Messages' },
    { icon: 'fas fa-bell', label: 'Alerts' },
    { icon: 'fas fa-calendar', label: 'Calendar' },
    { icon: 'fas fa-users', label: 'Users' },
    { icon: 'fas fa-cog', label: 'Settings' },
    { icon: 'fas fa-upload', label: 'Upload' }
  ]

  const followingUsers = [
    { 
      name: 'Alex', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      verified: true,
      online: true
    },
    { 
      name: 'Sarah', 
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      verified: false,
      online: true
    },
    { 
      name: 'Mike', 
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
      verified: true,
      online: false
    },
    { 
      name: 'Emma', 
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      verified: false,
      online: true
    },
    { 
      name: 'John', 
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      verified: false,
      online: false
    },
    { 
      name: 'Lisa', 
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face',
      verified: true,
      online: true
    }
  ]

  return (
    <aside className={`bg-gray-800 border-r border-gray-700 pt-6 transition-all duration-500 ease-in-out flex-shrink-0 ${
      expanded ? 'w-56' : 'w-14'
    }`}>
      {/* Top Icons Section */}
      <div className="space-y-4">
        {navigationItems.map((item, index) => (
          <div key={index} className={`${expanded ? 'flex items-center' : 'flex items-center justify-center'}`}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 ${
              item.active 
                ? 'bg-gray-700' 
                : 'bg-gray-800 hover:bg-gray-700'
            }`}>
              <i className={`${item.icon} text-lg transition-all duration-300 ${
                item.active ? 'text-purple-400' : 'text-gray-400'
              }`}></i>
            </div>
            {expanded && (
              <span className="text-sm text-gray-300 ml-2 transition-all duration-500 opacity-100 transform translate-x-0">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
      
      {/* Following Section */}
      <div className="mt-8 pt-6 border-t border-gray-700">
        <div className={`mb-4 transition-all duration-500 ${expanded ? 'text-left px-4 opacity-100' : 'text-center opacity-70'}`}>
          <span className="text-xs text-gray-400 font-medium">
            {expanded ? 'Following Channels' : 'Following'}
          </span>
        </div>
        <div className="space-y-3 ml-2">
          {followingUsers.map((user, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="relative">
                {/* Profile Image */}
                <img 
                  src={user.image} 
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-600 transition-all duration-300"
                />
                {/* Online Status - Green dot positioned on bottom left */}
                {user.online && (
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800 transition-all duration-300"></div>
                )}
                {/* Verified Badge - Blue checkmark on top right */}
                {user.verified && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                )}
              </div>
              {expanded && (
                <span className="text-sm text-gray-300 transition-all duration-500 opacity-100 transform translate-x-0">
                  {user.name}
                </span>
              )}
            </div>
          ))}
          
          {/* More Arrow */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-300 cursor-pointer">
              <i className="fas fa-chevron-down text-gray-400"></i>
            </div>
            {expanded && (
              <span className="text-sm text-gray-300 transition-all duration-500 opacity-100 transform translate-x-0">
                Show more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div className="mt-8 pt-6 border-t border-gray-700 px-4 transition-all duration-500 opacity-100 transform translate-y-0">
          <div className="space-y-4">
            <div className="text-sm text-gray-400 font-medium">Quick Actions</div>
            <div className="space-y-2">
              <button className="w-full text-left text-sm text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded transition-all duration-200">
                <i className="fas fa-plus mr-2"></i>
                Create Channel
              </button>
              <button className="w-full text-left text-sm text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded transition-all duration-200">
                <i className="fas fa-download mr-2"></i>
                Download App
              </button>
              <button className="w-full text-left text-sm text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded transition-all duration-200">
                <i className="fas fa-star mr-2"></i>
                Premium Features
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}

export default Sidebar 