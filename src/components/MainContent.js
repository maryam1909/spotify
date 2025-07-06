import React from 'react';
import SearchPage from '../pages/SearchPage';
import LibraryPage from '../pages/LibraryPage';
import PlaylistPage from '../pages/PlaylistPage';
import HomePage from '../pages/HomePage';

const MainContent = ({ 
  activeView, 
  tracks, 
  playlists, 
  currentTrack, 
  isPlaying, 
  likedTracks, 
  searchTerm, 
  setSearchTerm, 
  selectedGenre, 
  setSelectedGenre, 
  filteredTracks, 
  genres, 
  playTrack, 
  toggleLike, 
  setActiveView 
}) => {
  if (activeView === 'search') {
    return (
      <SearchPage 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        genres={genres}
        filteredTracks={filteredTracks}
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        likedTracks={likedTracks}
        playTrack={playTrack}
        toggleLike={toggleLike}
      />
    );
  }
  
  if (activeView === 'library') {
    return (
      <LibraryPage 
        tracks={tracks}
        playlists={playlists}
        likedTracks={likedTracks}
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        playTrack={playTrack}
        toggleLike={toggleLike}
        setActiveView={setActiveView}
      />
    );
  }
  
  if (activeView.startsWith('playlist-')) {
    const playlistId = parseInt(activeView.split('-')[1]);
    return (
      <PlaylistPage 
        playlistId={playlistId}
        tracks={tracks}
        playlists={playlists}
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        likedTracks={likedTracks}
        playTrack={playTrack}
        toggleLike={toggleLike}
      />
    );
  }
  
  // Home view (default)
  return (
    <HomePage 
      tracks={tracks}
      playlists={playlists}
      currentTrack={currentTrack}
      isPlaying={isPlaying}
      playTrack={playTrack}
      setActiveView={setActiveView}
    />
  );
};

export default MainContent;