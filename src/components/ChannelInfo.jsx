import React from 'react'

const ChannelInfo = ({ 
  channel, 
  description, 
  isSubscribed, 
  onSubscribe 
}) => {
  return (
    <div className="bg-white/5 rounded-xl p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <img 
            src={channel.avatar} 
            alt={channel.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-lg font-semibold text-white">{channel.name}</h3>
              {channel.verified && (
                <i className="fas fa-check-circle text-blue-400"></i>
              )}
            </div>
            <p className="text-gray-300 text-sm mb-3">{channel.subscribers}</p>
            <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
        
        <button 
          onClick={onSubscribe}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
            isSubscribed 
              ? 'bg-gray-600 text-white' 
              : 'bg-white text-black hover:bg-gray-200'
          }`}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    </div>
  )
}

export default ChannelInfo
