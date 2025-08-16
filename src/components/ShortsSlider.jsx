import React from 'react'
import ShortsCard from './ShortsCard'

const ShortsSlider = () => {
  const shorts = [
    { id: 1, title: 'Do or die', views: '27K views', time: '1 day ago', gradient: 'from-red-500 to-red-600' },
    { id: 2, title: 'Epic Fail Compilation', views: '15K views', time: '2 days ago', gradient: 'from-orange-500 to-orange-600' },
    { id: 3, title: 'Amazing Skills', views: '32K views', time: '1 day ago', gradient: 'from-yellow-500 to-yellow-600' },
    { id: 4, title: 'Funny Moments', views: '18K views', time: '3 days ago', gradient: 'from-green-500 to-green-600' },
    { id: 5, title: 'Gaming Highlights', views: '25K views', time: '1 day ago', gradient: 'from-blue-500 to-blue-600' },
    { id: 6, title: 'Tutorial Tips', views: '12K views', time: '4 days ago', gradient: 'from-purple-500 to-purple-600' }
  ]

  return (
    <section className="mb-8 px-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Shorts</h2>
      </div>
      
      {/* Shorts Row - 6 columns in one row, each taking 1/6 width */}
      <div className="flex gap-4 w-full">
        {shorts.map((short) => (
          <div key={short.id} className="flex-1 min-w-0">
            <ShortsCard short={short} />
          </div>
        ))}
      </div>
      
      {/* Shorts Info */}
      <div className="mt-4 px-4">
        <div className="flex justify-between text-xs text-gray-400">
          <span>6 shorts available</span>
          <span>Equal width distribution</span>
        </div>
      </div>
    </section>
  )
}

export default ShortsSlider 