import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SettingsLayout = ({ children, sidebarExpanded }) => {
  const location = useLocation()

  const navigationItems = [
    { path: '/settings/account', label: 'Account' },
    { path: '/settings/notifications', label: 'Notifications' },
    { path: '/settings/playback', label: 'Playback and Performance' },
    { path: '/settings/privacy', label: 'Privacy' },
    { path: '/settings/advanced', label: 'Advanced settings' }
  ]

  return (
    <div className={`flex-1 bg-white min-h-screen ${sidebarExpanded ? 'ml-0' : 'ml-0'}`}>
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Settings</h2>
            <nav className="space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    location.pathname === item.path
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsLayout
