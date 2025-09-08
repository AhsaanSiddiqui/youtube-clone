import React, { useState } from "react";
import { Play } from "lucide-react";

const PlaylistStackCard = ({
  playlist,
  onClick,
  className = "",
  showVideoCount = true,
  showOverlay = true,
}) => {
  const {
    id,
    title,
    description = "Private • Playlist",
    videoCount = 0,
    thumbnail,
    overlayText = "",
    overlaySubtext = "",
    isDefault = false,
  } = playlist;

  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    console.log('PlaylistStackCard clicked:', title); // Temporary debug
    if (onClick) {
      onClick(playlist);
    }
  };

  return (
    <div
      className={`cursor-pointer group ${className}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Stacked Thumbnails */}
      <div className="relative mb-4 h-40 w-full">
        {/* Back layers (use the same thumbnail) */}
        {thumbnail && (
          <>
            <div className="absolute inset-0 translate-x-2 translate-y-2 scale-[0.97] rounded-lg overflow-hidden -z-10">
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover opacity-70"
              />
            </div>
            <div className="absolute inset-0 translate-x-4 translate-y-4 scale-[0.94] rounded-lg overflow-hidden -z-20">
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover opacity-50"
              />
            </div>
          </>
        )}

        {/* Front Thumbnail */}
        <div className="relative w-full h-full bg-gray-200 rounded-lg shadow-lg overflow-hidden">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="bg-gray-300 rounded-lg px-6 py-3 flex items-center gap-2">
                <Play className="w-5 h-5 text-gray-600" />
                <span className="text-gray-600 font-medium">Play all</span>
              </div>
            </div>
          )}

          {/* Hover Overlay with Play Button */}
          {isHovered && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition">
              <div className="bg-white/20 rounded-lg px-4 py-2 flex items-center gap-2">
                <Play className="w-6 h-6 text-white" />
                <span className="text-white font-medium">Play all</span>
              </div>
            </div>
          )}

          {/* Video Count Badge */}
          {showVideoCount && videoCount > 0 && (
            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
              <span>
                {videoCount} video{videoCount !== 1 ? "s" : ""}
              </span>
            </div>
          )}

          {/* Overlay Text */}
          {showOverlay && overlayText && (
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="absolute top-2 left-2 text-white text-sm font-medium">
                {overlayText}
              </div>
              {overlaySubtext && (
                <div className="absolute bottom-8 left-2 text-white text-xs">
                  {overlaySubtext}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Playlist Info */}
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
          {title}
        </h3>
        <p className="text-xs text-gray-500">{description}</p>
        <button className="text-xs text-gray-500 hover:text-gray-700 font-medium">
          View full playlist
        </button>
      </div>
    </div>
  );
};

export default PlaylistStackCard;
