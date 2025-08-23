import React from 'react'

const ShortsNavigation = ({ 
  canScrollLeft, 
  canScrollRight, 
  onScrollLeft, 
  onScrollRight, 
  onScrollToStart, 
  onScrollToEnd 
}) => {
  return (
    <div className="flex space-x-2">
      {/* Scroll to Start/End buttons */}
      <button 
        onClick={onScrollToStart}
        className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all duration-200 text-xs hover:scale-110"
        title="Go to start"
      >
        <i className="fas fa-angle-double-left"></i>
      </button>
      
      <button 
        onClick={onScrollLeft}
        disabled={!canScrollLeft}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
          canScrollLeft 
            ? 'bg-gray-700 hover:bg-gray-600 cursor-pointer hover:scale-110' 
            : 'bg-gray-800 text-gray-500 cursor-not-allowed'
        }`}
      >
        <i className="fas fa-chevron-left text-sm"></i>
      </button>
      
      <button 
        onClick={onScrollRight}
        disabled={!canScrollRight}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
          canScrollRight 
            ? 'bg-gray-700 hover:bg-gray-600 cursor-pointer hover:scale-110' 
            : 'bg-gray-800 text-gray-500 cursor-not-allowed'
        }`}
      >
        <i className="fas fa-chevron-right text-sm"></i>
      </button>
      
      <button 
        onClick={onScrollToEnd}
        className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all duration-200 text-xs hover:scale-110"
        title="Go to end"
      >
        <i className="fas fa-angle-double-right"></i>
      </button>
    </div>
  )
}

export default ShortsNavigation
