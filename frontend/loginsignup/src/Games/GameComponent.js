import React from 'react';

const GameComponent = ({ game }) => {
  // You can use the 'game' prop to customize the rendering of each game
  return (
    <div>
      <h1>{game.text}</h1>
      {/* Add your specific game component content here */}
    </div>
  );
};

export default GameComponent;