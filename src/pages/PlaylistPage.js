
import React from 'react';
import { Play, Heart, MoreHorizontal } from 'lucide-react';
import TrackList from '../components/TrackList';

const PlaylistPage = ({ 
  playlistId, 
  tracks, 
  playlists, 
  currentTrack, 
  isPlaying, 
  likedTracks, 
  playTrack, 
  toggleLike 
}) => {
  const playlist = playlists.find(p => p.id === playlistId);
  
  if (!playlist) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white">Playlist not found</h2>
      </div>
    );
  }
  
  const playlistTracks = tracks.filter(track => playlist.tracks.includes(track.id));
  
  return (
    <div className="p-6">
      <div className="flex items-center space-x-6 mb-8">
        <img
          src={playlist.cover}
          alt={playlist.name}
          className="w-48 h-48 object-cover rounded-lg shadow-lg"
        />
        <div>
          <p className="text-sm text-gray-400 mb-2">PLAYLIST</p>
          <h1 className="text-5xl font-bold text-white mb-4">{playlist.name}</h1>
          <p className="text-gray-400">{playlist.tracks.length} songs</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-6 mb-6">
        <button
          onClick={() => playTrack(playlistTracks[0])}
          className="bg-green-400 text-black p-4 rounded-full hover:scale-105 transition-transform"
        >
          <Play size={24} />
        </button>
        <button className="p-2 hover:scale-110 transition-transform">
          <Heart size={28} className="text-gray-400" />
        </button>
        <button className="p-2 hover:scale-110 transition-transform">
          <MoreHorizontal size={28} className="text-gray-400" />
        </button>
      </div>
      
      <TrackList 
        tracks={playlistTracks}
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        likedTracks={likedTracks}
        playTrack={playTrack}
        toggleLike={toggleLike}
      />
    </div>
  );
};

export default PlaylistPage;