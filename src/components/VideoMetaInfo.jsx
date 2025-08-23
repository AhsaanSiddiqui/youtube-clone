import React from 'react'

const VideoMetaInfo = ({ title, views, uploadDate }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-xl lg:text-2xl font-medium text-white leading-tight">
        {title}
      </h1>
      
      <div className="flex items-center space-x-4 text-gray-300">
        <span>{views}</span>
        <span>•</span>
        <span>{uploadDate}</span>
      </div>
    </div>
  )
}

export default VideoMetaInfo
