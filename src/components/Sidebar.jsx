import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoWhite from '/assets/logo-white.png'

const Sidebar = ({ expanded }) => {
  const location = useLocation()
  
  const navigationItems = [
    { icon: 'fas fa-home', label: 'Home', path: '/', active: location.pathname === '/' },
    { icon: 'fas fa-play', label: 'Shorts', path: '/shorts', active: location.pathname === '/shorts' },
    { icon: 'fa-solid fa-photo-film', label: 'Subscriptions', path: '/subscriptions', active: location.pathname === '/subscriptions' },
  ]

  const youSectionItems = [
    { icon: 'fas fa-history', label: 'History', path: '/history', active: location.pathname === '/history' },
    { icon: 'fas fa-list', label: 'Playlists', path: '/playlists', active: location.pathname === '/playlists' },
    { icon: 'fas fa-video', label: 'Your videos' },
    { icon: 'fas fa-clock', label: 'Watch Later', path: '/watch-later', active: location.pathname === '/watch-later' },
    { icon: 'fas fa-thumbs-up', label: 'Liked videos' },
    { icon: 'fas fa-download', label: 'Downloads' },
    { icon: 'fas fa-cog', label: 'Settings', path: '/settings/account', active: location.pathname.startsWith('/settings') }
  ]

  const subscriptionChannels = [
    { 
      name: 'Hello World', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      hasNotification: true
    },
    { 
      name: 'Tea With Code', 
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      hasNotification: true
    },
    { 
      name: 'JavaScript Mastery', 
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
      hasNotification: false
    },
    { 
      name: 'Learning Code Online', 
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      hasNotification: true
    }
  ]

  return (
    <aside className={`bg-brown-950 border-r border-gray-500 pt-6 transition-all duration-500 ease-in-out flex-shrink-0 ${
      expanded ? 'w-56' : 'w-16'
    }`}>

      {/* Main Navigation Section */}
      <div className="space-y-1 px-2">
        {navigationItems.map((item, index) => (
          <Link key={index} to={item.path} className={`flex cursor-pointer items-center rounded-lg px-3 py-2 ${
            item.active ? 'bg-white/20' : 'hover:bg-white/10'
          }`}>
            <div className="w-10 h-10 flex items-center justify-center">
              <i className={`${item.icon} text-lg text-white`}></i>
            </div>
            {expanded && (
              <span className="text-sm text-white font-medium ml-3">
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </div>
      
      {/* You Section */}
      <div className="mt-6 pt-6 border-t border-gray-600">
        <div className={`px-4 mb-4 ${expanded ? 'flex items-center justify-between' : 'text-center'}`}>
          <span className="text-sm text-white font-medium">You</span>
          {expanded && <i className="fas fa-chevron-right text-white text-sm"></i>}
        </div>
        <div className="space-y-1 px-2">
          {youSectionItems.map((item, index) => (
            <Link 
              to={item.path || '#'} 
              key={index} 
              className={`flex cursor-pointer items-center rounded-lg px-3 py-2 ${
                item.active ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <i className={`${item.icon} text-lg text-white`}></i>
              </div>
              {expanded && (
                <span className="text-sm text-white ml-3">{item.label}</span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Subscriptions Section */}
      <div className="mt-6 pt-6 border-t border-gray-600">
        <div className={`px-4 mb-4 ${expanded ? 'text-left' : 'text-center'}`}>
          <span className="text-sm text-white font-bold">Subscriptions</span>
        </div>
        <div className="space-y-1 px-2">
          {subscriptionChannels.map((channel, index) => (
            <div key={index} className="flex cursor-pointer items-center rounded-lg px-3 py-2 hover:bg-white/10">
              <div className="relative">
                <img 
                  src={channel.image} 
                  alt={channel.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                {channel.hasNotification && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
              {expanded && (
                <span className="text-sm text-white ml-3">{channel.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar 