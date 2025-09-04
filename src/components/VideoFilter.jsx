import React from 'react'

const VideoFilter = ({ 
  categories = [], 
  activeFilter, 
  onFilterChange 
}) => {
  return (
    <div className="flex space-x-3 mb-8 overflow-x-auto pb-2 scrollbar-hide px-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 mx-2 border ${
            activeFilter === category
              ? 'bg-white text-black shadow-lg scale-105'
              : 'text-white hover:bg-white hover:text-black hover:scale-105'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default VideoFilter
