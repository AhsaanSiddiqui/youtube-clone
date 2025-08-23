import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import VideoPlayer from '../components/VideoPlayer'
import VideoMetaInfo from '../components/VideoMetaInfo'
import VideoActions from '../components/VideoActions'
import ChannelInfo from '../components/ChannelInfo'
import CommentSection from '../components/CommentSection'
import RecommendedVideos from '../components/RecommendedVideos'

const VideoPlay = () => {
  const { videoId } = useParams()
  const navigate = useNavigate()
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleGoBack = () => {
    navigate('/')
  }

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false)
    } else {
      setIsLiked(true)
      setIsDisliked(false)
    }
  }

  const handleDislike = () => {
    if (isDisliked) {
      setIsDisliked(false)
    } else {
      setIsDisliked(true)
      setIsLiked(false)
    }
  }

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed)
  }

  // Mock video data
  const videoData = {
    id: videoId || '1',
    title: 'Epic Adventures in League of Darkness: Live Gameplay - Complete Walkthrough',
    description: 'Join me on an epic journey through the mystical world of League of Darkness. This complete walkthrough covers all the secrets, boss battles, and hidden treasures you need to discover. Perfect for both beginners and experienced players looking to master this incredible game.',
    views: '127K views',
    uploadDate: '2 days ago',
    likes: '12.5K',
    dislikes: '234',
    channel: {
      name: 'Selly durinto',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      subscribers: '2.1M subscribers',
      verified: true
    },
    videoUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1280&h=720&fit=crop&crop=center'
  }

  // Mock comments data
  const comments = [
    {
      id: 0,
      user: 'Selly durinto',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      text: 'Thanks everyone for watching! Don\'t forget to like and subscribe for more gaming content. Leave a comment below with your thoughts on the game!',
      time: '1 day ago',
      likes: 156,
      pinned: true,
      replies: [
        {
          id: 1,
          user: 'GamingFan',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
          text: 'Amazing video! When is the next one coming?',
          time: '12 hours ago',
          likes: 23
        },
        {
          id: 2,
          user: 'GameReviewer',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
          text: 'This walkthrough helped me so much!',
          time: '8 hours ago',
          likes: 18
        }
      ]
    },
    {
      id: 1,
      user: 'GamingMaster123',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
      text: 'Amazing gameplay! I learned so many new strategies from this video.',
      time: '2 hours ago',
      likes: 45,
      replies: [
        {
          id: 101,
          user: 'StrategyGamer',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
          text: 'Which strategy did you find most useful?',
          time: '1 hour ago',
          likes: 12
        },
        {
          id: 102,
          user: 'DarknessExplorer',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
          text: 'The boss fight strategy at 15:30 was incredible!',
          time: '45 minutes ago',
          likes: 8
        }
      ]
    },
    {
      id: 2,
      user: 'DarknessExplorer',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      text: 'The boss fight at 15:30 was incredible! How did you manage to dodge all those attacks?',
      time: '5 hours ago',
      likes: 23,
      replies: [
        {
          id: 201,
          user: 'BossFighter',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
          text: 'Timing is everything! You need to watch the attack patterns.',
          time: '3 hours ago',
          likes: 15
        }
      ]
    },
    {
      id: 3,
      user: 'LeaguePlayer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      text: 'Great tutorial! I\'ve been stuck on this level for weeks. Thanks for the help!',
      time: '1 day ago',
      likes: 67,
      replies: []
    }
  ]

  // Mock recommended videos
  const recommendedVideos = [
    {
      id: 2,
      title: 'League of Darkness: Hidden Boss Locations Revealed',
      channel: 'DarknessGaming',
      views: '89K views',
      time: '3 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=320&h=180&fit=crop&crop=center'
    },
    {
      id: 3,
      title: 'Top 10 Tips for League of Darkness Beginners',
      channel: 'GamingTips',
      views: '156K views',
      time: '1 week ago',
      thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=320&h=180&fit=crop&crop=center'
    },
    {
      id: 4,
      title: 'League of Darkness: Speedrun World Record Attempt',
      channel: 'SpeedRunner',
      views: '203K views',
      time: '2 weeks ago',
      thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=320&h=180&fit=crop&crop=center'
    },
    {
      id: 5,
      title: 'League of Darkness: Multiplayer Strategy Guide',
      channel: 'TeamPlayer',
      views: '78K views',
      time: '1 month ago',
      thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=320&h=180&fit=crop&crop=center'
    }
  ]

  return (
    <div className="min-h-screen bg-brown-950 w-full">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Back Button */}
        <div className="mb-6">
          <button 
            onClick={handleGoBack}
            className="flex items-center space-x-2 px-4 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-200"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Back to Home</span>
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left Column - Main Video Content */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Video Player */}
            <VideoPlayer 
              videoUrl={videoData.videoUrl} 
              title={videoData.title} 
            />

            {/* Video Meta Info */}
            <VideoMetaInfo 
              title={videoData.title}
              views={videoData.views}
              uploadDate={videoData.uploadDate}
            />

            {/* Video Actions */}
            <div className="flex justify-end">
              <VideoActions 
                likes={videoData.likes}
                dislikes={videoData.dislikes}
                isLiked={isLiked}
                isDisliked={isDisliked}
                onLike={handleLike}
                onDislike={handleDislike}
              />
            </div>

            {/* Channel Info */}
            <ChannelInfo 
              channel={videoData.channel}
              description={videoData.description}
              isSubscribed={isSubscribed}
              onSubscribe={handleSubscribe}
            />

            {/* Comments Section */}
            <CommentSection comments={comments} />
          </div>

          {/* Right Column - Recommended Videos */}
          <RecommendedVideos videos={recommendedVideos} />
        </div>
      </div>
    </div>
  )
}

export default VideoPlay
