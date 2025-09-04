import React, { useState } from 'react'
import SettingsLayout from '../../components/SettingsLayout'

const Privacy = ({ sidebarExpanded }) => {
  const [settings, setSettings] = useState({
    privateSubscriptions: true,
    allowMentions: true,
    leaderboardParticipation: false,
    superChatCelebrations: false
  })

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <SettingsLayout sidebarExpanded={sidebarExpanded}>
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy</h1>
          <p className="text-lg text-gray-600">Manage what you share on YouTube</p>
          <p className="text-sm text-gray-500 mt-2">Choose who can see your subscriptions</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Review YouTube Terms of Service</a>
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Google Privacy Policy</a>
          </div>
        </div>
        <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-teal-200 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Subscriptions Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-2">Keep all my subscriptions private</h2>
            <p className="text-sm text-gray-600">
              Your subscriptions won't be visible to others, unless you use features that make them public. 
              <a href="#" className="text-blue-600 hover:text-blue-800 ml-1">Learn more</a> about what could make your subscriptions visible or 
              <a href="#" className="text-blue-600 hover:text-blue-800 ml-1">manage your subscriptions here</a>.
            </p>
          </div>
          <button 
            onClick={() => handleToggle('privateSubscriptions')}
            className={`relative inline-flex h-6 w-[72px] items-center rounded-full transition-colors ml-2 ${
              settings.privateSubscriptions ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.privateSubscriptions ? 'translate-x-6' : 'translate-x-1'
            }`} />
          </button>
        </div>
      </div>

      {/* Mentions Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-2">Allow users to mention me</h2>
            <p className="text-sm text-gray-600">
              Anyone can mention you in video titles, video descriptions, posts, and comments. 
              <a href="#" className="text-blue-600 hover:text-blue-800 ml-1">Manage notifications settings for mentions here</a>.
            </p>
          </div>
          <button 
            onClick={() => handleToggle('allowMentions')}
            className={`relative inline-flex h-6 w-[50px] items-center ml-2 rounded-full transition-colors ${
              settings.allowMentions ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.allowMentions ? 'translate-x-6' : 'translate-x-1'
            }`} />
          </button>
        </div>
      </div>

      {/* Live Chat Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Live Chat</h2>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Turn off leaderboard participation</h3>
              <p className="text-sm text-gray-600">
                Your channel will no longer be ranked in live chat leaderboards or receive points. Your participation in previous leaderboards will also be permanently removed. 
                <a href="#" className="text-blue-600 hover:text-blue-800 ml-1">Learn more</a>.
              </p>
            </div>
            <button 
              onClick={() => handleToggle('leaderboardParticipation')}
              className={`relative inline-flex h-6 w-16 items-center ml-2 rounded-full transition-colors ${
                settings.leaderboardParticipation ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.leaderboardParticipation ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Turn off Super Chat and Super Stickers celebrations</h3>
              <p className="text-sm text-gray-600">
                Super Chat and Super Stickers purchase milestones will not be publicly announced in live chat. 
                <a href="#" className="text-blue-600 hover:text-blue-800 ml-1">Learn more</a>.
              </p>
            </div>
            <button 
              onClick={() => handleToggle('superChatCelebrations')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.superChatCelebrations ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.superChatCelebrations ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* Ads on YouTube Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Ads on YouTube</h2>
        <p className="text-sm text-gray-600">
          You may see ads on YouTube based on general factors, like the topic of a video. The ads you see may also depend on your choices on 
          <a href="#" className="text-blue-600 hover:text-blue-800 ml-1">My Ad Center</a>. To learn more about how ads work for family accounts with kids, visit the 
          <a href="#" className="text-blue-600 hover:text-blue-800 ml-1">Google for Families Help Center</a>.
        </p>
      </div>
    </SettingsLayout>
  )
}

export default Privacy
