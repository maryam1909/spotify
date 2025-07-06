import React from 'react';
import { Search } from 'lucide-react';
import TrackList from '../components/TrackList';

const SearchPage = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedGenre, 
  setSelectedGenre, 
  genres, 
  filteredTracks, 
  currentTrack, 
  isPlaying, 
  likedTracks, 
  playTrack, 
  toggleLike 
}) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-white mb-6">Search</h2>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="What do you want to listen to?"
          className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-3">Genres</h3>
        <div className="flex flex-wrap gap-2">
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedGenre === genre
                  ? 'bg-green-400 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          {searchTerm ? `Results for "${searchTerm}"` : 'All Songs'}
        </h3>
        <TrackList 
          tracks={filteredTracks}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          likedTracks={likedTracks}
          playTrack={playTrack}
          toggleLike={toggleLike}
        />
      </div>
    </div>
  );
};

export default SearchPage;