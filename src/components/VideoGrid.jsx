import React from 'react'
import VideoCard from './VideoCard'

const VideoGrid = ({ videos = [], title, showNoResults = true, activeFilter = '' }) => {
  return (
    <section className="mb-8 px-6">
      <h2 className="text-3xl font-medium mb-6 text-white">{title}</h2>
      
      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      
      {/* No Results Message */}
      {showNoResults && videos.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-400 text-lg">No videos found for "{activeFilter}"</p>
          <p className="text-gray-500 text-sm">Try selecting a different category</p>
        </div>
      )}
    </section>
  )
}

export default VideoGrid
