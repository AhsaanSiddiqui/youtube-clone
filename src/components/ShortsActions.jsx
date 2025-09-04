import React from 'react'

const ShortsActions = ({ short }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Like Button */}
      <div className="flex flex-col items-center gap-1">
        <button className="w-12 h-12 bg-gray-800 bg-opacity-80 rounded-full flex items-center justify-center text-white hover:bg-opacity-100 transition-all">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
        </button>
        <span className="text-white text-sm font-medium">{short.likes}</span>
      </div>

      {/* Dislike Button */}
      <div className="flex flex-col items-center gap-1">
        <button className="w-12 h-12 bg-gray-800 bg-opacity-80 rounded-full flex items-center justify-center text-white hover:bg-opacity-100 transition-all">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
          </svg>
        </button>
        <span className="text-white text-sm font-medium">Dislike</span>
      </div>

      {/* Comments Button */}
      <div className="flex flex-col items-center gap-1">
        <button className="w-12 h-12 bg-gray-800 bg-opacity-80 rounded-full flex items-center justify-center text-white hover:bg-opacity-100 transition-all">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.233C2.493 12.064 2 11.106 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        </button>
        <span className="text-white text-sm font-medium">{short.comments}</span>
      </div>

      {/* Share Button */}
      <div className="flex flex-col items-center gap-1">
        <button className="w-12 h-12 bg-gray-800 bg-opacity-80 rounded-full flex items-center justify-center text-white hover:bg-opacity-100 transition-all">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
        </button>
        <span className="text-white text-sm font-medium">Share</span>
      </div>

      {/* More Options Button */}
      <div className="flex flex-col items-center gap-1">
        <button className="w-12 h-12 bg-gray-800 bg-opacity-80 rounded-full flex items-center justify-center text-white hover:bg-opacity-100 transition-all">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      {/* Sponsor Logo (Smaller version) */}
      <div className="mt-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          short.id === 1 ? 'bg-purple-600' : 
          short.id === 2 ? 'bg-blue-600' : 'bg-green-600'
        }`}>
          <span className="text-white font-bold text-xs">
            {short.id === 1 ? 'H' : short.id === 2 ? 'J' : 'R'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ShortsActions
