import React from 'react'

const CreatorInsider = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Creator Insider</h3>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-sm text-gray-500">1/2</span>
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Video Thumbnail */}
      <div className="relative mb-4">
        <img
          src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=225&fit=crop"
          alt="Creator Insider"
          className="w-full h-32 object-cover rounded-lg"
        />
        <div className="absolute top-2 left-2 text-white text-xs font-bold bg-black/70 px-2 py-1 rounded">
          THIS WEEK AT YOUTUBE
        </div>
        <div className="absolute top-2 right-2">
          <div className="bg-black/70 text-white text-xs px-2 py-1 rounded">
            CREATOR INSIDER
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h4 className="font-medium text-gray-900 text-sm">
          This Week at YouTube
        </h4>
        <p className="text-xs text-gray-600 leading-relaxed">
          Today topics: Made on YouTube event, additional features like AI and Image Stickers, and new gifts for National Video Games Day
        </p>
        <div className="flex items-center justify-between">
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-xs font-medium">
            Watch on YouTube
          </button>
          <div className="text-xs text-gray-400">
            BLACKBOX
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatorInsider
