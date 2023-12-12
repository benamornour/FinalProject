import React, { useState } from 'react';
import "./button.css"

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <button className="button" onClick={ handleClick }>
      <span className="button">{ `Like | ${likes}` }</span>
    </button>
  );
};

export default LikeButton;