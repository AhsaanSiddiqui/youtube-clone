import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PlaylistStackCard from '../components/PlaylistStackCard'
import { Play } from "lucide-react";

const Playlists = ({ sidebarExpanded }) => {
  const [activeFilter, setActiveFilter] = useState('Recently added')
  const navigate = useNavigate()

  const playlists = [
    {
      id: 1,
      title: "Watch later",
      description: "Private • Playlist",
      videoCount: 1,
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=160&fit=crop",
      overlayText: "NESCAFE Basement 5",
      overlaySubtext: "AADAT INSTRUMENTAL BHANWARAY feat. Goher Mumtaz",
      isDefault: true
    },
    {
      id: 2,
      title: "Liked videos",
      description: "Private • Playlist",
      videoCount: 1,
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=160&fit=crop",
      overlayText: "",
      overlaySubtext: "",
      isDefault: true
    },
    {
      id: 3,
      title: "My Favorites",
      description: "Private • Playlist",
      videoCount: 5,
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=160&fit=crop",
      overlayText: "Web Development Tutorial",
      overlaySubtext: "Complete Course for Beginners",
      isDefault: false
    },
    {
      id: 4,
      title: "Study Music",
      description: "Private • Playlist",
      videoCount: 12,
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=320&h=180&fit=crop",
      overlayText: "Lofi Hip Hop Mix",
      overlaySubtext: "Chill Beats for Focus",
      isDefault: false
    },
    {
      id: 5,
      title: "Comedy Collection",
      description: "Private • Playlist",
      videoCount: 8,
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=160&fit=crop",
      overlayText: "Stand-up Special",
      overlaySubtext: "Live Performance",
      isDefault: false
    },
    {
      id: 6,
      title: "Sports Highlights",
      description: "Private • Playlist",
      videoCount: 15,
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=160&fit=crop",
      overlayText: "Championship Finals",
      overlaySubtext: "Expert Analysis",
      isDefault: false
    }
  ]

  const filters = [
    { label: 'Recently added', hasDropdown: true },
    { label: 'Playlists', hasDropdown: false },
    { label: 'Music', hasDropdown: false },
    { label: 'Owned', hasDropdown: false }
  ]

  const handlePlaylistClick = (playlist) => {
    navigate(`/playlist/${playlist.id}`)
  }

  return (
    <div className={`flex-1 bg-white min-h-screen ${sidebarExpanded ? 'ml-0' : 'ml-0'}`}>
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Playlists</h1>
          
          {/* Filter Buttons */}
          <div className="flex gap-2">
            {filters.map((filter) => (
              <button
                key={filter.label}
                onClick={() => setActiveFilter(filter.label)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.label
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span>{filter.label}</span>
                {filter.hasDropdown && activeFilter === filter.label && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Playlists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {playlists.map((playlist) => (
            <PlaylistStackCard
              key={playlist.id}
              playlist={playlist}
              onClick={handlePlaylistClick}
            />
          ))}
        </div>

        {/* Empty State (if no playlists) */}
        {playlists.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No playlists yet</h3>
            <p className="text-gray-500 mb-4">Create your first playlist to get started</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Create playlist
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Playlists
