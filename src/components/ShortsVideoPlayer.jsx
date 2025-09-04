import React from 'react'

const ShortsVideoPlayer = ({ short }) => {
  // Generate different background colors based on short ID
  const getBackgroundColor = (id) => {
    const colors = [
      'from-teal-400 to-teal-500',
      'from-red-400 to-red-500', 
      'from-cyan-400 to-cyan-500'
    ]
    return colors[(id - 1) % colors.length]
  }

  return (
    <div className="relative w-[400px] h-[700px] rounded-lg overflow-hidden shadow-2xl">
      {/* Video Background with Grid Pattern */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getBackgroundColor(short.id)}`}>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>

      {/* Top Controls */}
      <div className="absolute top-4 left-4 flex items-center gap-3">
        <button className="w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-all">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        </button>
        <button className="w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-all">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.5 13.5H2a1 1 0 01-1-1v-3a1 1 0 011-1h2.5L8.383 3.793A1 1 0 019.383 3.076zM12.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-5.929 9.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 12c0-2.21-.894-4.208-2.343-5.657z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Fullscreen Button */}
      <button className="absolute top-4 right-4 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-all">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Main Content - Title Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
        <h1 className="text-6xl font-bold text-purple-600 mb-4 drop-shadow-lg">
          {short.title}
        </h1>
        
        {/* Repeated Title Text (Layered Effect) */}
        <div className="space-y-2 opacity-60">
          <div className="text-4xl font-bold text-purple-400 outline-text">
            {short.title}
          </div>
          <div className="text-3xl font-bold text-purple-300 outline-text">
            {short.title}
          </div>
          <div className="text-2xl font-bold text-purple-200 outline-text">
            {short.title}
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-8 left-4 right-4">
        {/* Sponsor Logo and Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
            short.id === 1 ? 'bg-purple-600' : 
            short.id === 2 ? 'bg-blue-600' : 'bg-green-600'
          }`}>
            <span className="text-white font-bold text-sm">
              {short.id === 1 ? 'H' : short.id === 2 ? 'J' : 'R'}
            </span>
          </div>
          <div className="text-white">
            <div className="font-semibold text-sm">{short.sponsor}</div>
            <div className="text-xs text-gray-300">Sponsored</div>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-white text-sm leading-relaxed">
          {short.description}
        </p>
      </div>

      {/* Custom CSS for outline text effect */}
      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
          color: transparent;
        }
      `}</style>
    </div>
  )
}

export default ShortsVideoPlayer
