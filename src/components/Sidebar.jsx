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
    { color: 'from-green-400 to-blue-500', name: 'Alex' },
    { color: 'from-pink-400 to-purple-500', name: 'Sarah' },
    { color: 'from-yellow-400 to-orange-500', name: 'Mike' },
    { color: 'from-red-400 to-pink-500', name: 'Emma' },
    { color: 'from-indigo-400 to-purple-500', name: 'John' },
    { color: 'from-teal-400 to-green-500', name: 'Lisa' }
  ]

  return (
    <aside className={`bg-gray-800 border-r border-gray-700 pt-6 transition-all duration-300 ease-in-out flex-shrink-0 ${
      expanded ? 'w-64' : 'w-14'
    }`}>
      {/* Top Icons Section */}
      <div className="space-y-4">
        {navigationItems.map((item, index) => (
          <div key={index} className={`${expanded ? 'flex items-center' : 'flex items-center justify-center'}`}>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 ${
              item.active 
                ? 'bg-gray-700' 
                : 'bg-gray-800 hover:bg-gray-700'
            }`}>
              <i className={`${item.icon} text-lg ${
                item.active ? 'text-purple-400' : 'text-gray-400'
              }`}></i>
            </div>
            {expanded && (
              <span className="text-sm text-gray-300 ml-4 transition-all duration-300 opacity-100">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
      
      {/* Following Section */}
      <div className="mt-8 pt-6 border-t border-gray-700">
        <div className={`mb-4 ${expanded ? 'text-left px-4' : 'text-center'}`}>
          <span className="text-xs text-gray-400 font-medium">
            {expanded ? 'Following Channels' : 'Following'}
          </span>
        </div>
        <div className="space-y-3">
          {followingUsers.map((user, index) => (
            <div key={index} className="flex items-center">
              <div className="relative">
                <div className={`w-10 h-10 bg-gradient-to-br ${user.color} rounded-full`}></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
              </div>
              {expanded && (
                <span className="text-sm text-gray-300 ml-4 transition-all duration-300 opacity-100">
                  {user.name}
                </span>
              )}
            </div>
          ))}
          
          {/* More Arrow */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-200 cursor-pointer">
              <i className="fas fa-chevron-down text-gray-400"></i>
            </div>
            {expanded && (
              <span className="text-sm text-gray-300 ml-4 transition-all duration-300 opacity-100">
                Show more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div className="mt-8 pt-6 border-t border-gray-700 px-4 transition-all duration-300">
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