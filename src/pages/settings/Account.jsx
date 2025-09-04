import React from 'react'
import SettingsLayout from '../../components/SettingsLayout'

const Account = ({ sidebarExpanded }) => {
  return (
    <SettingsLayout sidebarExpanded={sidebarExpanded}>
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Account</h1>
          <p className="text-lg text-gray-600">Choose how you appear and what you see on YouTube</p>
          <p className="text-sm text-gray-500 mt-2">Signed in as suryawachid77@gmail.com</p>
        </div>
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Your YouTube channel section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your YouTube channel</h2>
        <p className="text-gray-600 mb-6">This is your public presence on YouTube. You need a channel to upload your own videos, comment on videos, or create playlists.</p>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">S</span>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Suryawachid</h3>
          </div>
        </div>
        
        <div className="space-y-2">
          <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">Channel status and features</a>
          <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">Add or manage your channel(s)</a>
          <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">View advanced settings</a>
        </div>
      </div>

      {/* Your account section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your account</h2>
        <p className="text-gray-600 mb-6">You sign in to YouTube with your Google Account</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Google Account</h3>
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">View or change your Google Account settings</a>
            <p className="text-gray-500 text-sm mt-1">You will be redirected to your Google Account page</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Family Center</h3>
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Manage kids profiles and features for teens</a>
            <p className="text-gray-500 text-sm mt-1">Tools to connect parents, kids, and teens on YouTube</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Membership</h3>
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm">No membership</span>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Get YouTube Premium</a>
            </div>
            <p className="text-gray-500 text-sm mt-1">YouTube Premium offers uninterrupted music, ad-free videos, and more</p>
          </div>
        </div>
      </div>
    </SettingsLayout>
  )
}

export default Account
