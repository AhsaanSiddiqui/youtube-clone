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
      className="bg-brown-950 overflow-hidden transition-all duration-200 cursor-pointer hover:scale-105"
      onClick={handleVideoClick}
    >
      <div className="aspect-video relative overflow-hidden border rounded-lg">
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
      <div className="py-4">
        <h3 className="font-medium text-[20px] text-base mb-3 line-clamp-2 text-white leading-tight">{video.title}</h3>
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face" 
              alt="Creator" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center space-x-2'>
              <span className="text-md text-white font-medium">{video.creator}</span>
              <i className="fas fa-check-circle text-white text-md"></i>
            </div>
            <p className="text-sm text-gray-400">{video.views} • {video.time}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard 