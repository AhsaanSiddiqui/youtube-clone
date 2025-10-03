import React from 'react'
import CreateButtonPopup from './CreateButtonPopup'

const StudioLayout = ({ children, sidebarExpanded, onUploadClick }) => {

  return (
    <div className={`flex-1 bg-gray-50 min-h-screen ${sidebarExpanded ? 'ml-0' : 'ml-0'}`}>
      <div className="p-6">
        {/* Simple Header with Create Button - Only show if onUploadClick is provided */}
        {onUploadClick && (
          <div className="flex justify-end mb-6">
            <CreateButtonPopup 
              onUploadClick={onUploadClick}
              buttonText="+ Create"
              buttonStyle="default"
            />
          </div>
        )}

        {/* Page Content */}
        {children}
      </div>
    </div>
  )
}

export default StudioLayout
