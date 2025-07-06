import React from 'react';

const HomePage = ({ 
  tracks, 
  playlists, 
  currentTrack, 
  isPlaying, 
  playTrack, 
  setActiveView 
}) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-white mb-6">Good evening</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">Recently Played</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tracks.slice(0, 6).map(track => (
            <div
              key={track.id}
              className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer flex items-center space-x-4"
              onClick={() => playTrack(track)}
            >
              <img
                src={track.cover}
                alt={track.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h4 className="text-white font-medium">{track.title}</h4>
                <p className="text-sm text-gray-400">{track.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Made for You</h3>
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

export default HomePage;