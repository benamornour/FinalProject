import './slider.css';
import imageSlide from './data';
import React, {useState, useEffect} from 'react';

function Slider(){
const [currentState, setCurrentState]=useState(0);

useEffect(() => {
    const timer = setTimeout(() => {
        if (currentState === 4) {
            setCurrentState(0);
        } else {
            setCurrentState(currentState + 1);
        }
    }, 7000);
    return ()=> clearTimeout(timer)
})

// const bgImageStyle = {
//     backgroundImage: `url(${imageSlide[currentState].src})`
// };


// const goToNext = (currentState)=>{
//     setCurrentState(currentState)
// }

return(
<div className='containers'>
  <div className='cover'>
  <div className='description'>
    <h1>{imageSlide[currentState].title}</h1>
    <p>{imageSlide[currentState].body}</p>
  </div>
  <div className='carousel'>
    <img src={imageSlide[currentState].src} alt="carousel-img"/>
  </div>
  </div>
</div>)
}
export default Slider;