import React, { useState } from 'react'
import SettingsLayout from '../../components/SettingsLayout'

const AdvancedSettings = ({ sidebarExpanded }) => {
  const [copied, setCopied] = useState({ userId: false, channelId: false })

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(prev => ({ ...prev, [type]: true }))
      setTimeout(() => {
        setCopied(prev => ({ ...prev, [type]: false }))
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <SettingsLayout sidebarExpanded={sidebarExpanded}>
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Advanced settings</h1>
          <p className="text-lg text-gray-600">Set up Essence Of Me exactly how you want it</p>
        </div>
        <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-teal-200 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* User ID Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-2">User ID</h2>
            <div className="flex items-center gap-3">
              <input 
                type="text" 
                value="5coeSwpahO9GD-Xscmj0-A"
                readOnly
                className="px-3 py-2 text-gray-700 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm font-mono"
              />
              <button 
                onClick={() => handleCopy('5coeSwpahO9GD-Xscmj0-A', 'userId')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  copied.userId 
                    ? 'bg-green-600 text-white' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {copied.userId ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Channel ID Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-2">Channel ID</h2>
            <div className="flex items-center gap-3">
              <input 
                type="text" 
                value="UC5coeSwpahO9GD-Xscmj0-A"
                readOnly
                className="px-3 py-2 text-gray-700 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm font-mono"
              />
              <button 
                onClick={() => handleCopy('UC5coeSwpahO9GD-Xscmj0-A', 'channelId')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  copied.channelId 
                    ? 'bg-green-600 text-white' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {copied.channelId ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Move channel Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-2">Move channel</h2>
            <p className="text-sm text-gray-600 mb-3">You can move your channel to a brand account</p>
            <a 
              href="#" 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Move channel to a brand account
            </a>
          </div>
        </div>
      </div>

      {/* Delete channel Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-2">Delete channel</h2>
            <p className="text-sm text-gray-600 mb-3">Deleting your Essence Of Me channel won't close your Google Account</p>
            <a 
              href="#" 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Delete channel
            </a>
          </div>
        </div>
      </div>
    </SettingsLayout>
  )
}

export default AdvancedSettings
