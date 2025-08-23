import React, { useState } from 'react'

const CommentSection = ({ comments = [] }) => {
  const [comment, setComment] = useState('')
  const [replyingTo, setReplyingTo] = useState(null)
  const [replyText, setReplyText] = useState('')

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    if (comment.trim()) {
      console.log('Comment submitted:', comment)
      setComment('')
    }
  }

  const handleReplySubmit = (commentId) => {
    if (replyText.trim()) {
      console.log('Reply submitted for comment', commentId, ':', replyText)
      setReplyText('')
      setReplyingTo(null)
    }
  }

  const handleReplyCancel = () => {
    console.log('Reply cancelled')
    setReplyingTo(null)
    setReplyText('')
  }

  const startReply = (commentId) => {
    console.log('Starting reply to comment:', commentId)
    setReplyingTo(commentId)
    setReplyText('')
  }

  // Separate pinned and regular comments
  const pinnedComments = comments.filter(comment => comment.pinned)
  const regularComments = comments.filter(comment => !comment.pinned)

  console.log('Current state:', { replyingTo, replyText, commentsCount: comments.length })

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white">
        Comments ({comments.length})
      </h3>
      
      {/* Comment Input */}
      <form onSubmit={handleCommentSubmit} className="flex space-x-4">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
          alt="Your avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 py-2 focus:outline-none focus:border-white transition-colors duration-200"
          />
        </div>
        <button 
          type="submit"
          disabled={!comment.trim()}
          className="px-4 py-2 bg-white text-black rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors duration-200"
        >
          Comment
        </button>
      </form>

      {/* Pinned Comments */}
      {pinnedComments.length > 0 && (
        <div className="space-y-4">
          {pinnedComments.map((comment) => (
            <div key={comment.id} className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <i className="fas fa-thumbtack text-blue-400 text-sm"></i>
                <span className="text-blue-400 text-sm font-medium">
                  Pinned by @{comment.user}
                </span>
              </div>
              <CommentItem 
                comment={comment}
                isReplying={replyingTo === comment.id}
                replyText={replyText}
                onReplyTextChange={setReplyText}
                onReplySubmit={() => handleReplySubmit(comment.id)}
                onReplyCancel={handleReplyCancel}
                onStartReply={() => startReply(comment.id)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Regular Comments */}
      <div className="space-y-6">
        {regularComments.map((comment) => (
          <CommentItem 
            key={comment.id} 
            comment={comment}
            isReplying={replyingTo === comment.id}
            replyText={replyText}
            onReplyTextChange={setReplyText}
            onReplySubmit={() => handleReplySubmit(comment.id)}
            onReplyCancel={handleReplyCancel}
            onStartReply={() => startReply(comment.id)}
          />
        ))}
      </div>
    </div>
  )
}

// Individual Comment Item Component
const CommentItem = ({ 
  comment, 
  isReplying, 
  replyText, 
  onReplyTextChange, 
  onReplySubmit, 
  onReplyCancel, 
  onStartReply 
}) => {
  const [showReplies, setShowReplies] = useState(false)
  const hasReplies = comment.replies && comment.replies.length > 0

  console.log('CommentItem render:', { commentId: comment.id, isReplying, replyText, showReplies, hasReplies })

  const toggleReplies = () => {
    console.log('Toggling replies for comment:', comment.id, 'Current state:', showReplies)
    setShowReplies(!showReplies)
  }

  return (
    <div className="space-y-4">
      {/* Main Comment */}
      <div className="flex space-x-4">
        <img 
          src={comment.avatar} 
          alt={comment.user}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-medium text-white">{comment.user}</span>
            <span className="text-gray-400 text-sm">{comment.time}</span>
            {comment.edited && (
              <span className="text-gray-400 text-xs">(edited)</span>
            )}
          </div>
          <p className="text-gray-300 mb-2">{comment.text}</p>
          <div className="flex items-center space-x-4 text-sm">
            <button className="text-gray-400 hover:text-white transition-colors duration-200">
              <i className="fas fa-thumbs-up mr-2"></i>
              {comment.likes}
            </button>
            <button className="text-gray-400 hover:text-white transition-colors duration-200">
              <i className="fas fa-thumbs-down"></i>
            </button>
            <button 
              onClick={onStartReply}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Reply
            </button>
            
          </div>
        </div>
      </div>

      {/* Reply Input Field */}
      {isReplying && (
        <div className="ml-14 space-y-3 bg-white/5 p-3 rounded-lg">
          <div className="flex space-x-3">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
              alt="Your avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1">
              <input
                type="text"
                placeholder="Add a reply..."
                value={replyText}
                onChange={(e) => onReplyTextChange(e.target.value)}
                className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 py-2 focus:outline-none focus:border-white transition-colors duration-200"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="far fa-smile text-lg"></i>
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={onReplyCancel}
                className="text-gray-400 hover:text-white transition-colors duration-200 px-3 py-1"
              >
                Cancel
              </button>
              <button 
                onClick={onReplySubmit}
                disabled={!replyText.trim()}
                className="px-4 py-2 bg-white text-black rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors duration-200"
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Replies Section */}
      {hasReplies && (
        <div className="ml-14">
          {/* Debug Info - Remove this later */}
          <div className="text-xs text-gray-500 mb-2">
            Debug: {comment.replies.length} replies found
          </div>
          
          <button 
            onClick={toggleReplies}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 mb-3 cursor-pointer p-2 rounded hover:bg-white/5"
          >
            <i className={`fas fa-chevron-${showReplies ? 'up' : 'down'} text-sm transition-transform duration-200`}></i>
            <span className="text-sm font-medium">{comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}</span>
          </button>
          
          {showReplies && (
            <div className="space-y-4 border-l-2 border-gray-600 pl-4">
              {comment.replies.map((reply) => (
                <ReplyItem 
                  key={reply.id} 
                  reply={reply}
                  isReplying={replyingTo === `reply-${reply.id}`}
                  replyText={replyText}
                  onReplyTextChange={onReplyTextChange}
                  onReplySubmit={() => onReplySubmit(`reply-${reply.id}`)}
                  onReplyCancel={onReplyCancel}
                  onStartReply={() => onStartReply(`reply-${reply.id}`)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// Individual Reply Item Component with Reply Functionality
const ReplyItem = ({ 
  reply, 
  isReplying, 
  replyText, 
  onReplyTextChange, 
  onReplySubmit, 
  onReplyCancel, 
  onStartReply 
}) => {
  return (
    <div className="space-y-3">
      {/* Reply Content */}
      <div className="flex space-x-3">
        <img 
          src={reply.avatar} 
          alt={reply.user}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-medium text-white text-sm">{reply.user}</span>
            <span className="text-gray-400 text-xs">{reply.time}</span>
          </div>
          <p className="text-gray-300 text-sm mb-2">{reply.text}</p>
          <div className="flex items-center space-x-4 text-xs">
            <button className="text-gray-400 hover:text-white transition-colors duration-200">
              <i className="fas fa-thumbs-up mr-1"></i>
              {reply.likes}
            </button>
            <button className="text-gray-400 hover:text-white transition-colors duration-200">
              <i className="fas fa-thumbs-down"></i>
            </button>
            <button 
              onClick={onStartReply}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Reply
            </button>
          </div>
        </div>
      </div>

      {/* Reply to Reply Input Field */}
      {isReplying && (
        <div className="ml-11 space-y-3 bg-white/5 p-3 rounded-lg">
          <div className="flex space-x-3">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
              alt="Your avatar"
              className="w-6 h-6 rounded-full object-cover"
            />
            <div className="flex-1">
              <input
                type="text"
                placeholder="Add a reply..."
                value={replyText}
                onChange={(e) => onReplyTextChange(e.target.value)}
                className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 py-1 focus:outline-none focus:border-white transition-colors duration-200 text-sm"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="far fa-smile text-sm"></i>
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={onReplyCancel}
                className="text-gray-400 hover:text-white transition-colors duration-200 px-2 py-1 text-xs"
              >
                Cancel
              </button>
              <button 
                onClick={onReplySubmit}
                disabled={!replyText.trim()}
                className="px-3 py-1 bg-white text-black rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors duration-200 text-xs"
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CommentSection
