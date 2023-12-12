import React, { useEffect, useState } from 'react';
import "./video.css"


const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlists";
//const playlistId="PLUitXL66pnO9WHzogRGp9XGn5roQIzcY6";
const YOUTUBE_API_KEY = "AIzaSyA6pebSeFmrUVrzkvbZOOSFJt99RihDuos";

export default function VideoDisplays() {
    const [data, setData] = useState({ items: [] });

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&channelId=UCtlcIZVBdFPSAtCoNZsTusg&maxResults=50&key=${YOUTUBE_API_KEY}`);
          const result = await res.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
  return (
<div>
<h1 style={{textAlign:"center"}}>My Videos</h1>
<ul>
{data.items.map((item) => {
  console.log('item', item);
  const { id, snippet = {}} = item;
  const { title, thumbnails = {}} = snippet;
  const { medium = {} } = thumbnails;


  return (

    <li style={{textDecoration:"none"}} key={id}>
    <div className="scroller" data-direction="right" data-speed="slow">
        <div className="scroller__inner">
            <img width={medium.width} height={medium.height} src={medium.url} alt={title} />
        </div>
    </div> 
    <div className="scroller" data-speed="fast">
        <ul class="tag-list scroller__inner">
             <li style={{textDecoration: "none"}}><h3>{title}</h3></li>
        </ul>
    </div> 
    </li>
  );
})}
</ul>
</div>

);

}


const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

