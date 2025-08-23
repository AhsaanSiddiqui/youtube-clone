import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VideoPlay from './pages/VideoPlay'

// Centralized routing configuration
const AppRoutes = ({ sidebarExpanded }) => {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<Home sidebarExpanded={sidebarExpanded} />} />
      
      {/* Video Play Route - Dynamic routing for future */}
      <Route path="/video/:videoId" element={<VideoPlay />} />
      
      {/* Future Routes - Ready for expansion */}
      {/* <Route path="/channel/:channelId" element={<Channel />} /> */}
      {/* <Route path="/search" element={<SearchResults />} /> */}
      {/* <Route path="/library" element={<Library />} /> */}
      {/* <Route path="/subscriptions" element={<Subscriptions />} /> */}
      {/* <Route path="/trending" element={<Trending />} /> */}
      {/* <Route path="/shorts" element={<Shorts />} /> */}
      
      {/* 404 Route */}
      <Route path="*" element={
        <div className="flex-1 min-h-screen bg-brown-950 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">404</h1>
            <p className="text-gray-300 text-lg">Page not found</p>
          </div>
        </div>
      } />
    </Routes>
  )
}

export default AppRoutes
