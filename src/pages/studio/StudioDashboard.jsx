import React, { useState } from 'react'
import StudioLayout from '../../components/studio/StudioLayout'
import ChannelAnalytics from '../../components/studio/ChannelAnalytics'
import CreatorInsider from '../../components/studio/CreatorInsider'
import YouTubeIssues from '../../components/studio/YouTubeIssues'
import UploadVideoModal from '../../components/studio/UploadVideoModal'
import CreateButtonPopup from '../../components/studio/CreateButtonPopup'

const StudioDashboard = ({ sidebarExpanded }) => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)

  const handleUploadClick = () => {
    setIsUploadModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsUploadModalOpen(false)
  }

  return (
    <>
      <StudioLayout 
        sidebarExpanded={sidebarExpanded}
        onUploadClick={handleUploadClick}
      >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Dashboard Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">Channel dashboard</h1>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="text-center py-12">
                <div className="w-48 h-48 mx-auto mb-6 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-24 h-24 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Want to see metrics on your recent video?
                </h3>
                <p className="text-gray-600 mb-6">
                  Upload and publish a video to get started.
                </p>
                <CreateButtonPopup 
                  onUploadClick={handleUploadClick}
                  buttonText="Upload videos"
                  buttonStyle="dashboard"
                />
              </div>
            </div>
          </div>

          {/* Right Sidebar Panels */}
          <div className="space-y-6">
            <ChannelAnalytics />
            <YouTubeIssues />
            <CreatorInsider />
          </div>
        </div>
      </div>
      </StudioLayout>

      {/* Upload Modal */}
      <UploadVideoModal 
        isOpen={isUploadModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default StudioDashboard
