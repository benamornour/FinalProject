import React from 'react';
import "./gamespage.css";
import { Link, Routes, Route } from 'react-router-dom'; // Import Link and Routes
import Game1 from '../Games/Pages/Game1';
import Game2 from '../Games/Pages/Game2';
import Game3 from '../Games/Pages/Game3';
import Game4 from '../Games/Pages/Game4';
import Game5 from '../Games/Pages/Game5';

export default function GamesPage() {
  const gameImages = [
    { id: 0, text: "Drawing Board", url: "http://localhost:3000/paint.png", path: "/Game1" },
    { id: 1, text: "Memory Game", url: "http://localhost:3000/card-games.png", path: "/Game2" },
    { id: 2, text: "SoundBoard", url: 'http://localhost:3000/music.png', path: "/Game3" },
    { id: 3, text: "Sudoku", url: 'http://localhost:3000/calculator.png', path: "/Game4" },
    { id: 4, text: "Wordle", url: 'http://localhost:3000/scrabble.png', path: "/Game5" }
  ];

  return (
    <div className="layer">
      <div className="container">
        {/* Add Links for navigation */}
        <Link to="/Game1" className="box">
          <div className="content">
            <img src={gameImages[0].url} alt={gameImages[0].text} />
            <p></p>
          </div>
        </Link>
        <Link to="/Game2" className="box">
          <div className="content">
            <img src={gameImages[1].url} alt={gameImages[1].text} />
            <p></p>
          </div>
        </Link>
        <Link to="/Game3" className="box">
          <div className="content">
            <img src={gameImages[2].url} alt={gameImages[2].text} />
            <p></p>
          </div>
        </Link>
        <Link to="/Game4" className="box">
          <div className="content">
            <img src={gameImages[3].url} alt={gameImages[3].text} />
            <p></p>
          </div>
        </Link>
        <Link to="/Game5" className="box">
          <div className="content">
            <img src={gameImages[4].url} alt={gameImages[4].text} />
            <p></p>
          </div>
        </Link>

        {/* Use Routes instead of Switch */}
        <Routes>
          <Route path="/Game1" element={<Game1 />} />
          <Route path="/Game2" element={<Game2 />} />
          <Route path="/Game3" element={<Game3 />} />
          <Route path="/Game4" element={<Game4 />} />
          <Route path="/Game5" element={<Game5 />} />
        </Routes>
      </div>
    </div>
  );
}
