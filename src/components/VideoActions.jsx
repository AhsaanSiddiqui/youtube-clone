import React from 'react'

const VideoActions = ({ 
  likes, 
  dislikes, 
  isLiked, 
  isDisliked, 
  onLike, 
  onDislike 
}) => {
  return (
    <div className="flex items-center space-x-4">
      {/* Like Button */}
      <button 
        onClick={onLike}
        className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
          isLiked 
            ? 'bg-white text-black' 
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        <i className={`fas fa-thumbs-up ${isLiked ? 'text-black' : 'text-white'}`}></i>
        <span className="font-medium">{likes}</span>
      </button>

      {/* Dislike Button */}
      <button 
        onClick={onDislike}
        className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
          isDisliked 
            ? 'bg-white text-black' 
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        <i className={`fas fa-thumbs-down ${isDisliked ? 'text-black' : 'text-white'}`}></i>
        <span className="font-medium">{dislikes}</span>
      </button>

      {/* Share Button */}
      <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200">
        <i className="fas fa-share"></i>
        <span className="font-medium">Share</span>
      </button>

      {/* Save Button */}
      <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200">
        <i className="fas fa-download"></i>
        <span className="font-medium">Save</span>
      </button>
    </div>
  )
}

export default VideoActions
