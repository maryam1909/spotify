import React from 'react';
import { Home, Search, Library, Plus } from 'lucide-react';

const Sidebar = ({ activeView, setActiveView, playlists }) => {
  return (
    <div className="w-64 bg-black text-white p-6 flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-green-400">Spotify 2.0</h1>
      </div>
      
      <nav className="flex-1">
        <div className="space-y-4">
          <button
            onClick={() => setActiveView('home')}
            className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
              activeView === 'home' ? 'bg-gray-800' : 'hover:bg-gray-800'
            }`}
          >
            <Home size={20} />
            <span>Home</span>
          </button>
          
          <button
            onClick={() => setActiveView('search')}
            className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
              activeView === 'search' ? 'bg-gray-800' : 'hover:bg-gray-800'
            }`}
          >
            <Search size={20} />
            <span>Search</span>
          </button>
          
          <button
            onClick={() => setActiveView('library')}
            className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
              activeView === 'library' ? 'bg-gray-800' : 'hover:bg-gray-800'
            }`}
          >
            <Library size={20} />
            <span>Your Library</span>
          </button>
        </div>
        
        <div className="mt-8">
          <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-800 transition-colors">
            <Plus size={20} />
            <span>Create Playlist</span>
          </button>
        </div>
        
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-400 mb-3">PLAYLISTS</h3>
          <div className="space-y-2">
            {playlists.map(playlist => (
              <button
                key={playlist.id}
                onClick={() => setActiveView(`playlist-${playlist.id}`)}
                className={`block w-full text-left p-2 rounded hover:bg-gray-800 transition-colors ${
                  activeView === `playlist-${playlist.id}` ? 'bg-gray-800' : ''
                }`}
              >
                {playlist.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;