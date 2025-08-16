import React from 'react'

const VideoCard = ({ video }) => {
  const handleVideoClick = () => {
    console.log('Video clicked:', video.title)
    // Add video player functionality here
  }

  // Dummy images for different video types
  const getDummyImage = (id) => {
    const images = [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=225&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=225&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=225&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=225&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop&crop=center'
    ]
    return images[id % images.length]
  }

  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all duration-200 cursor-pointer hover:scale-105"
      onClick={handleVideoClick}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={getDummyImage(video.id)} 
          alt={video.title}
          className="w-full h-full object-cover"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <i className="fas fa-play text-white text-xl ml-1"></i>
          </div>
        </div>
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          12:34
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-sm mb-2 line-clamp-2">{video.title}</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <span>{video.creator}</span>
          <i className="fas fa-check-circle text-blue-500 text-xs"></i>
        </div>
        <p className="text-sm text-gray-400 mt-1">{video.views} • {video.time}</p>
      </div>
    </div>
  )
}

export default VideoCard 