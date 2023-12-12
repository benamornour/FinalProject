import React from 'react';
import './clickedvideo.css'
import LikeButton from "../Buttons/LikeButton";

export default function ClickedVideo(videoTitle, videoId){
    const url= `https://www.youtube.com/watch?v=${videoId}`
    return (
    <div>
        <iframe  
        title={videoTitle}
        width="560"
        height="315"
        src={url}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
        </iframe>
        <LikeButton />
    </div>
  )
}