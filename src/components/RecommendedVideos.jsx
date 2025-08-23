import React from 'react'

const RecommendedVideos = ({ videos = [] }) => {
  return (
    <div className="lg:col-span-1">
      <h3 className="text-lg font-semibold text-white mb-4">Recommended</h3>
      <div className="space-y-4">
        {videos.map((video) => (
          <RecommendedVideoItem key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}

// Individual Recommended Video Item
const RecommendedVideoItem = ({ video }) => {
  return (
    <div className="flex space-x-3 cursor-pointer group">
      <div className="flex-shrink-0">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-32 h-20 rounded-lg object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-white text-sm leading-tight line-clamp-2 mb-1 group-hover:text-gray-300 transition-colors duration-200">
          {video.title}
        </h4>
        <p className="text-gray-400 text-xs mb-1">{video.channel}</p>
        <div className="text-gray-400 text-xs">
          {video.views} • {video.time}
        </div>
      </div>
    </div>
  )
}

export default RecommendedVideos
