import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VideoPlay from './pages/VideoPlay'
import Shorts from './pages/Shorts'
import Subscriptions from './pages/Subscriptions'
import AllSubscriptions from './pages/AllSubscriptions'
import History from './pages/History'
import Playlists from './pages/Playlists'
import WatchLater from './pages/WatchLater'
import StudioDashboard from './pages/studio/StudioDashboard'
import StudioContent from './pages/studio/StudioContent'
import StudioSettings from './pages/studio/StudioSettings'
import { Account, Notifications, Playback, Privacy, Settings, AdvancedSettings } from './pages/settings'
import About from './pages/About'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import PoliciesSafety from './pages/PoliciesSafety'
import Copyright from './pages/Copyright'

// Centralized routing configuration
const AppRoutes = ({ sidebarExpanded }) => {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<Home sidebarExpanded={sidebarExpanded} />} />
      
      {/* Video Play Route - Dynamic routing for future */}
      <Route path="/video/:videoId" element={<VideoPlay />} />
      
      {/* Shorts Route */}
      <Route path="/shorts" element={<Shorts sidebarExpanded={sidebarExpanded} />} />
      
      {/* Subscriptions Route */}
      <Route path="/subscriptions" element={<Subscriptions sidebarExpanded={sidebarExpanded} />} />
      
      {/* All Subscriptions Route */}
      <Route path="/subscriptions/manage" element={<AllSubscriptions sidebarExpanded={sidebarExpanded} />} />
      
      {/* History Route */}
      <Route path="/history" element={<History sidebarExpanded={sidebarExpanded} />} />
      
      {/* Playlists Route */}
      <Route path="/playlists" element={<Playlists sidebarExpanded={sidebarExpanded} />} />
      
      {/* Watch Later Route */}
      <Route path="/watch-later" element={<WatchLater sidebarExpanded={sidebarExpanded} />} />
      
      {/* Studio Routes */}
      <Route path="/studio/dashboard" element={<StudioDashboard sidebarExpanded={sidebarExpanded} />} />
      <Route path="/studio/content" element={<StudioContent sidebarExpanded={sidebarExpanded} />} />
      <Route path="/studio/settings" element={<StudioSettings sidebarExpanded={sidebarExpanded} />} />
      
      {/* Settings Routes */}
      <Route path="/settings" element={<Settings />} />
      <Route path="/settings/account" element={<Account sidebarExpanded={sidebarExpanded} />} />
      <Route path="/settings/notifications" element={<Notifications sidebarExpanded={sidebarExpanded} />} />
      <Route path="/settings/playback" element={<Playback sidebarExpanded={sidebarExpanded} />} />
      <Route path="/settings/privacy" element={<Privacy sidebarExpanded={sidebarExpanded} />} />
      <Route path="/settings/advanced" element={<AdvancedSettings sidebarExpanded={sidebarExpanded} />} />
      
      {/* Legacy Settings Routes - Redirect to new structure */}
      <Route path="/account" element={<Account sidebarExpanded={sidebarExpanded} />} />
      <Route path="/notifications" element={<Notifications sidebarExpanded={sidebarExpanded} />} />
      <Route path="/playback" element={<Playback sidebarExpanded={sidebarExpanded} />} />
      <Route path="/privacy" element={<Privacy sidebarExpanded={sidebarExpanded} />} />
      
      {/* Future Routes - Ready for expansion */}
      {/* <Route path="/channel/:channelId" element={<Channel />} /> */}
      {/* <Route path="/search" element={<SearchResults />} /> */}
      {/* <Route path="/library" element={<Library />} /> */}
      {/* <Route path="/subscriptions" element={<Subscriptions />} /> */}
      {/* <Route path="/trending" element={<Trending />} /> */}
      
      {/* About Route */}
      <Route path="/about" element={<About sidebarExpanded={sidebarExpanded} />} />
      
      {/* Legal/Policy Routes */}
      <Route path="/terms" element={<TermsOfService sidebarExpanded={sidebarExpanded} />} />
      <Route path="/privacy" element={<PrivacyPolicy sidebarExpanded={sidebarExpanded} />} />
      <Route path="/policies" element={<PoliciesSafety sidebarExpanded={sidebarExpanded} />} />
      <Route path="/copyright" element={<Copyright sidebarExpanded={sidebarExpanded} />} />
      
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
