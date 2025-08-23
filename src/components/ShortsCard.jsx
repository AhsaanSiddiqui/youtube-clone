import React from 'react'
import { useNavigate } from 'react-router-dom'

const ShortsCard = ({ short }) => {
  const navigate = useNavigate()

  const handleShortClick = () => {
    console.log('Short clicked:', short.title)
    // Navigate to video play page with short ID
    navigate(`/video/${short.id}`)
  }

  // Dummy images for different short types
  const getDummyImage = (id) => {
    const images = [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=356&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=356&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200&h=356&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=356&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=356&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=356&fit=crop&crop=center'
    ]
    return images[id % images.length]
  }

  return (
    <div 
      className="w-full bg-brown-950 overflow-hidden transition-all duration-200 cursor-pointer hover:scale-105"
      onClick={handleShortClick}
    >
      <div className="aspect-[9/16] relative overflow-hidden border rounded-lg">
        <img 
          src={getDummyImage(short.id)} 
          alt={short.title}
          className="w-full h-full object-cover"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <i className="fas fa-play text-white text-sm ml-1"></i>
          </div>
        </div>
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
          0:45
        </div>
      </div>
      <div className="p-2">
        <h3 className="font-semibold text-[20px] mb-1 line-clamp-2">{short.title}</h3>
        <p className="text-xs text-gray-400">{short.views} • {short.time}</p>
      </div>
    </div>
  )
}

export default ShortsCard 