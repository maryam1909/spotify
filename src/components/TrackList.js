import React from 'react';
import { Heart } from 'lucide-react';

const TrackList = ({ 
  tracks, 
  showAlbum = true, 
  currentTrack, 
  isPlaying, 
  likedTracks, 
  playTrack, 
  toggleLike 
}) => {
  return (
    <div className="space-y-2">
      {tracks.map((track, index) => (
        <div
          key={track.id}
          className={`flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer ${
            currentTrack?.id === track.id ? 'bg-gray-800' : ''
          }`}
          onClick={() => playTrack(track)}
        >
          <div className="w-8 text-center text-gray-400">
            {currentTrack?.id === track.id && isPlaying ? (
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse mx-auto"></div>
            ) : (
              <span className="text-sm">{index + 1}</span>
            )}
          </div>
          
          <img
            src={track.cover}
            alt={track.title}
            className="w-12 h-12 rounded object-cover"
          />
          
          <div className="flex-1 min-w-0">
            <h3 className={`font-medium truncate ${
              currentTrack?.id === track.id ? 'text-green-400' : 'text-white'
            }`}>
              {track.title}
            </h3>
            <p className="text-sm text-gray-400 truncate">{track.artist}</p>
          </div>
          
          {showAlbum && (
            <div className="flex-1 min-w-0 hidden md:block">
              <p className="text-sm text-gray-400 truncate">{track.album}</p>
            </div>
          )}
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleLike(track.id);
            }}
            className="p-1 hover:scale-110 transition-transform"
          >
            <Heart
              size={16}
              className={likedTracks.has(track.id) ? 'fill-green-400 text-green-400' : 'text-gray-400'}
            />
          </button>
          
          <div className="w-12 text-right">
            <span className="text-sm text-gray-400">{track.duration}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;