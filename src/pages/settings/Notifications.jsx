import React, { useState } from 'react'
import SettingsLayout from '../../components/SettingsLayout'

const Notifications = ({ sidebarExpanded }) => {
  const [settings, setSettings] = useState({
    desktopNotifications: false,
    subscriptions: true,
    recommendedVideos: true,
    activityOnChannel: true,
    activityOnComments: true,
    mentions: true,
    othersReusingContent: true,
    promotionalContent: true,
    familyEmails: false,
    permissionEmails: true,
    generalUpdates: false,
    premiumUpdates: false,
    creatorUpdates: false
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
          <p className="text-lg text-gray-600">Select push and email notifications you'd like to receive.</p>
        </div>
        <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* General Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">General</h2>
        <p className="text-gray-600 mb-6">Manage your mobile and desktop notifications.</p>
        
        {/* Desktop notifications */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-900">Get notifications in this browser</span>
            <button 
              onClick={() => handleToggle('desktopNotifications')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.desktopNotifications ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.desktopNotifications ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Receive notifications on your computer, even if you're not watching YouTube.</span>
          </div>
        </div>

        {/* Your preferences */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Your preferences:</h3>
          <div className="space-y-4">
            {[
              { key: 'subscriptions', label: 'Notify me about activity from the channels I\'m subscribed to' },
              { key: 'recommendedVideos', label: 'Notify me of videos I might like based on what I watch' },
              { key: 'activityOnChannel', label: 'Notify me about comments and other activity on my channel or videos' },
              { key: 'activityOnComments', label: 'Notify me about replies, likes, and other activity on my comments, and activity on my posts on other channels' },
              { key: 'mentions', label: 'Notify me when others mention my channel' },
              { key: 'othersReusingContent', label: 'Notify me when others share, remix, or respond to my content on their channels' },
              { key: 'promotionalContent', label: 'Notify me of promotional content and offerings, like members-only perks' }
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-sm text-gray-900">{label}</span>
                <button 
                  onClick={() => handleToggle(key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings[key] ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings[key] ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Email notifications */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Email notifications</h2>
        <p className="text-gray-600 mb-6">Your emails are sent to az3226117@gmail.com. To unsubscribe from an email, click the 'Unsubscribe' link at the bottom of it. Learn more about emails from YouTube.</p>
        
        {/* Your family */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-900">Send me emails about family and product updates for YouTube or YouTube Kids</span>
            <button 
              onClick={() => handleToggle('familyEmails')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.familyEmails ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.familyEmails ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          <p className="text-sm text-gray-500">By turning on this setting, you're opting in to emails with recommended content, tips, and product updates for families</p>
        </div>

        {/* Permission */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-900">Send me emails about my YouTube activity and updates I requested</span>
            <button 
              onClick={() => handleToggle('permissionEmails')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.permissionEmails ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.permissionEmails ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          <p className="text-sm text-gray-500">If this setting is turned off, YouTube may still send you messages regarding your account, required service announcements, legal notifications, and privacy matters</p>
        </div>

        {/* Your preferences */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Your preferences:</h3>
          <div className="space-y-4">
            {[
              { key: 'generalUpdates', label: 'General product updates: Announcements and recommendations' },
              { key: 'premiumUpdates', label: 'YouTube Premium updates: Announcements, updates, and recommendations from YouTube Premium and YouTube Music Premium' },
              { key: 'creatorUpdates', label: 'Creator updates and announcements: Product announcements, creator events, and personalized tips to grow your YouTube channel' }
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-sm text-gray-900">{label}</span>
                <button 
                  onClick={() => handleToggle(key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings[key] ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings[key] ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Language */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Language</h2>
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Email language:</label>
          <select className="w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>English (US)</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
          <p className="text-sm text-gray-500 mt-2">This setting applies to emails only</p>
        </div>
      </div>
    </SettingsLayout>
  )
}

export default Notifications
