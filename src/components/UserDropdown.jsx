import React, { useState, useRef, useEffect } from 'react'

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const userMenuItems = [
    { icon: 'fas fa-user', label: 'Your Channel', action: () => console.log('Your Channel clicked') },
    { icon: 'fas fa-cog', label: 'Settings', action: () => console.log('Settings clicked') },
    { icon: 'fas fa-question-circle', label: 'Help', action: () => console.log('Help clicked') },
    { icon: 'fas fa-sign-out-alt', label: 'Sign Out', action: () => console.log('Sign Out clicked') }
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <div 
        className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 p-2 rounded-lg transition-colors"
        onClick={toggleDropdown}
      >
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
        <span className="font-medium">Suryawachid.77</span>
        <i className={`fas fa-chevron-down text-sm text-gray-400 transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`}></i>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-2 z-50">
          {/* User Info Section */}
          <div className="px-4 py-3 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
              <div>
                <p className="text-white font-medium">Suryawachid.77</p>
                <p className="text-gray-400 text-sm">suryawachid@email.com</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-1">
            {userMenuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.action()
                  setIsOpen(false)
                }}
                className="w-full flex items-center space-x-3 px-4 py-2 text-left text-gray-300 hover:bg-gray-700 transition-colors"
              >
                <i className={`${item.icon} w-5 text-center`}></i>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserDropdown 