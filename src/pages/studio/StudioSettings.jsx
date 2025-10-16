import React, { useState } from 'react'
import StudioLayout from '../../components/studio/StudioLayout'

const StudioSettings = ({ sidebarExpanded }) => {
  const [activeSection, setActiveSection] = useState('general')

  const settingsSections = [
    { id: 'general', name: 'General' },
    { id: 'channel', name: 'Channel' },
    { id: 'upload-defaults', name: 'Upload defaults' },
    { id: 'permissions', name: 'Permissions' },
    { id: 'community-moderation', name: 'Community moderation' },
    { id: 'agreements', name: 'Agreements' }
  ]

  const currencyOptions = [
    { value: 'USD', label: 'USD – US Dollar' },
    { value: 'EUR', label: 'EUR – Euro' },
    { value: 'GBP', label: 'GBP – British Pound' },
    { value: 'JPY', label: 'JPY – Japanese Yen' },
    { value: 'CAD', label: 'CAD – Canadian Dollar' }
  ]

  const handleSave = () => {
    // Handle save logic here
    console.log('Settings saved')
  }

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-lg font-medium text-gray-900">Default units</h3>
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
            <div className="relative">
              <select className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                {currencyOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderChannelSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Channel Settings</h3>
        <p className="text-gray-600">Channel-specific settings will be displayed here.</p>
      </div>
    </div>
  )

  const renderUploadDefaults = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Upload Defaults</h3>
        <p className="text-gray-600">Default upload settings will be displayed here.</p>
      </div>
    </div>
  )

  const renderPermissions = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Permissions</h3>
        <p className="text-gray-600">Permission settings will be displayed here.</p>
      </div>
    </div>
  )

  const renderCommunityModeration = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Community Moderation</h3>
        <p className="text-gray-600">Community moderation settings will be displayed here.</p>
      </div>
    </div>
  )

  const renderAgreements = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Agreements</h3>
        <p className="text-gray-600">Agreement settings will be displayed here.</p>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case 'general':
        return renderGeneralSettings()
      case 'channel':
        return renderChannelSettings()
      case 'upload-defaults':
        return renderUploadDefaults()
      case 'permissions':
        return renderPermissions()
      case 'community-moderation':
        return renderCommunityModeration()
      case 'agreements':
        return renderAgreements()
      default:
        return renderGeneralSettings()
    }
  }

  return (
    <StudioLayout sidebarExpanded={sidebarExpanded}>
      <div className="mx-auto">
        <div className="bg-white rounded-lg ">
          <div className="flex min-h-[600px]">
            {/* Left Navigation Panel */}
            <div className="w-64 bg-gray-50 border-r border-gray-200 rounded-l-lg">
              <div className="p-4 h-full">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Settings</h2>
                <nav className="space-y-1">
                  {settingsSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-2 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeSection === section.id
                          ? 'bg-gray-200 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      {section.name}
                    </button>
                  ))}
                  <div className="mt-6">
                    <button className="w-full text-left px-2 py-2 text-sm text-gray-500 hover:text-gray-700">
                      See more
                    </button>
                  </div>
                </nav>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1 p-8">
              {renderContent()}
            </div>
          </div>

          {/* Footer with Action Buttons */}
          <div className="border-t border-gray-200 p-4 flex justify-end gap-3 rounded-b-lg">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-gray-100 text-gray-400 rounded-md cursor-not-allowed font-medium"
              disabled
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </StudioLayout>
  )
}

export default StudioSettings
