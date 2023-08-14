import React from 'react';
import './App.css';
import Dots from './components/Dots/Dots';
import Rocket from './components/Rocket/Rocket';
import DownloadButton from './components/DownloadButton/DownloadButton';
import Logo from './components/Logo/Logo';
import TrailerButton from './components/TrailerButton/TrailerButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rocket />
        <Dots />
        <Logo />

        <TrailerButton />
        <DownloadButton />
        
        
      </header>
    </div>
  );
}

export default App;
