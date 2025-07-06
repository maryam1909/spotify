import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Player from './components/Player';
import { tracks, playlists } from './data/musicData';

const App = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [activeView, setActiveView] = useState('home');
  const [likedTracks, setLikedTracks] = useState(new Set());
  const [isShuffling, setIsShuffling] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const audioRef = useRef(null);

  const genres = ['All', 'Pop', 'Rock', 'Electronic', 'Jazz', 'Hip-Hop'];

  const filteredTracks = tracks.filter(track => {
    const matchesSearch = track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         track.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         track.album.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || track.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const currentIndex = filteredTracks.findIndex(track => track.id === currentTrack?.id);
    const nextIndex = (currentIndex + 1) % filteredTracks.length;
    setCurrentTrack(filteredTracks[nextIndex]);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    const currentIndex = filteredTracks.findIndex(track => track.id === currentTrack?.id);
    const prevIndex = currentIndex === 0 ? filteredTracks.length - 1 : currentIndex - 1;
    setCurrentTrack(filteredTracks[prevIndex]);
    setIsPlaying(true);
  };

  const toggleLike = (trackId) => {
    const newLikedTracks = new Set(likedTracks);
    if (newLikedTracks.has(trackId)) {
      newLikedTracks.delete(trackId);
    } else {
      newLikedTracks.add(trackId);
    }
    setLikedTracks(newLikedTracks);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    let interval;
    if (isPlaying && currentTrack) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          if (newTime >= duration) {
            nextTrack();
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrack, duration]);

  useEffect(() => {
    if (currentTrack) {
      const trackDuration = currentTrack.duration.split(':');
      setDuration(parseInt(trackDuration[0]) * 60 + parseInt(trackDuration[1]));
      setCurrentTime(0);
    }
  }, [currentTrack]);

  const appState = {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    searchTerm,
    selectedGenre,
    activeView,
    likedTracks,
    isShuffling,
    isRepeating,
    filteredTracks,
    genres,
    progressPercentage
  };

  const appActions = {
    setCurrentTrack,
    setIsPlaying,
    setCurrentTime,
    setDuration,
    setVolume,
    setSearchTerm,
    setSelectedGenre,
    setActiveView,
    setLikedTracks,
    setIsShuffling,
    setIsRepeating,
    playTrack,
    togglePlay,
    nextTrack,
    prevTrack,
    toggleLike,
    formatTime
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          activeView={activeView}
          setActiveView={setActiveView}
          playlists={playlists}
        />
        <div className="flex-1 overflow-y-auto">
          <MainContent 
            {...appState}
            {...appActions}
            tracks={tracks}
            playlists={playlists}
          />
        </div>
      </div>
      <Player 
        {...appState}
        {...appActions}
      />
    </div>
  );
};

export default App;