import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Shuffle, Repeat } from 'lucide-react';

const Player = ({ 
  currentTrack, 
  isPlaying, 
  currentTime, 
  volume, 
  likedTracks, 
  isShuffling, 
  isRepeating, 
  progressPercentage, 
  togglePlay, 
  nextTrack, 
  prevTrack, 
  toggleLike, 
  setIsShuffling, 
  setIsRepeating, 
  formatTime 
}) => {
  return (
    <div className="bg-gray-900 border-t border-gray-800 p-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-4 flex-1">
          {currentTrack && (
            <>
              <img
                src={currentTrack.cover}
                alt={currentTrack.title}
                className="w-14 h-14 object-cover rounded"
              />
              <div className="min-w-0">
                <h4 className="text-white font-medium truncate">{currentTrack.title}</h4>
                <p className="text-sm text-gray-400 truncate">{currentTrack.artist}</p>
              </div>
              <button
                onClick={() => toggleLike(currentTrack.id)}
                className="p-1 hover:scale-110 transition-transform"
              >
                <Heart
                  size={20}
                  className={likedTracks.has(currentTrack.id) ? 'fill-green-400 text-green-400' : 'text-gray-400'}
                />
              </button>
            </>
          )}
        </div>
        
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center justify-center space-x-4 mb-2">
            <button
              onClick={() => setIsShuffling(!isShuffling)}
              className={`p-2 rounded-full hover:bg-gray-800 transition-colors ${
                isShuffling ? 'text-green-400' : 'text-gray-400'
              }`}
            >
              <Shuffle size={20} />
            </button>
            <button
              onClick={prevTrack}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-400"
            >
              <SkipBack size={20} />
            </button>
            <button
              onClick={togglePlay}
              className="bg-white text-black p-3 rounded-full hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button
              onClick={nextTrack}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-400"
            >
              <SkipForward size={20} />
            </button>
            <button
              onClick={() => setIsRepeating(!isRepeating)}
              className={`p-2 rounded-full hover:bg-gray-800 transition-colors ${
                isRepeating ? 'text-green-400' : 'text-gray-400'
              }`}
            >
              <Repeat size={20} />
            </button>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-xs text-gray-400 w-10 text-right">
              {formatTime(currentTime)}
            </span>
            <div className="flex-1 bg-gray-600 rounded-full h-1">
              <div
                className="bg-white h-1 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-xs text-gray-400 w-10">
              {currentTrack ? currentTrack.duration : '0:00'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 flex-1 justify-end">
          <Volume2 size={20} className="text-gray-400" />
          <div className="w-20 bg-gray-600 rounded-full h-1">
            <div
              className="bg-white h-1 rounded-full"
              style={{ width: `${volume}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;