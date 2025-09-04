import React from 'react'

const ShortsNavigation = ({ onNext, onPrevious }) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Previous Short Button (Up Arrow) */}
      <button 
        onClick={onPrevious}
        className="w-16 h-16 bg-gray-800 bg-opacity-80 rounded-full flex items-center justify-center text-white hover:bg-opacity-100 transition-all shadow-lg"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Next Short Button (Down Arrow) */}
      <button 
        onClick={onNext}
        className="w-16 h-16 bg-gray-800 bg-opacity-80 rounded-full flex items-center justify-center text-white hover:bg-opacity-100 transition-all shadow-lg"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  )
}

export default ShortsNavigation
