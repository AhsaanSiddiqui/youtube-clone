import React from 'react'

const ChannelAnalytics = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Channel analytics</h3>
      
      <div className="space-y-4">
        {/* Current Subscribers */}
        <div>
          <p className="text-sm text-gray-600 mb-1">Current subscribers</p>
          <p className="text-2xl font-bold text-gray-900">0</p>
        </div>

        {/* Summary */}
        <div>
          <p className="text-sm font-medium text-gray-900 mb-2">Summary Last 28 days</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Views</span>
              <span className="text-sm font-medium text-gray-900">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Watch time (hours)</span>
              <span className="text-sm font-medium text-gray-900">0.0</span>
            </div>
          </div>
        </div>

        {/* Top Videos */}
        <div>
          <p className="text-sm font-medium text-gray-900 mb-2">Top videos</p>
          <p className="text-xs text-gray-600 mb-2">Last 48 hours · Views</p>
          <div className="text-center py-4">
            <p className="text-sm text-gray-500">No data available</p>
          </div>
        </div>

        {/* Go to Analytics Button */}
        <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
          Go to channel analytics
        </button>
      </div>
    </div>
  )
}

export default ChannelAnalytics
