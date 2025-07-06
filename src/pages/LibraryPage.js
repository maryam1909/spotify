import React from 'react';
import TrackList from '../components/TrackList';

const LibraryPage = ({ 
  tracks, 
  playlists, 
  likedTracks, 
  currentTrack, 
  isPlaying, 
  playTrack, 
  toggleLike, 
  setActiveView 
}) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-white mb-6">Your Library</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">Liked Songs</h3>
        <TrackList 
          tracks={tracks.filter(track => likedTracks.has(track.id))}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          likedTracks={likedTracks}
          playTrack={playTrack}
          toggleLike={toggleLike}
        />
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Your Playlists</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {playlists.map(playlist => (
            <div
              key={playlist.id}
              className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
              onClick={() => setActiveView(`playlist-${playlist.id}`)}
            >
              <img
                src={playlist.cover}
                alt={playlist.name}
                className="w-full aspect-square object-cover rounded-lg mb-3"
              />
              <h4 className="text-white font-medium">{playlist.name}</h4>
              <p className="text-sm text-gray-400">{playlist.tracks.length} songs</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;