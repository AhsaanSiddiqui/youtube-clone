import React from 'react'

const VideoPlayer = ({ videoUrl, title }) => {
  return (
    <div className="bg-black rounded-xl overflow-hidden">
      <div className="aspect-video relative">
        <img 
          src={videoUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
            <i className="fas fa-play text-white text-3xl ml-2"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
