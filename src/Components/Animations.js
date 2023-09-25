import React from 'react'
import './animations.css'

function Animations() {
    const f = document.getElementById("foo");
document.addEventListener(
  "click",
  (ev) => {
    f.style.transform = `translateY(${ev.clientY - 25}px)`;
    f.style.transform += `translateX(${ev.clientX - 25}px)`;
  },
  false,
);



  return (
    <div>

    
    
<div class="container"> <img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F443446%2Fpexels-photo-443446.jpeg%3Fcs%3Dsrgb%26dl%3Ddaylight-forest-glossy-443446.jpg%26fm%3Djpg&f=1&nofb=1&ipt=a85f18e041d85ce44d297ebe6fff7600cd56498cf9d1563a350f40565217f841&ipo=images" width ="300px" /> </div>
<h2>Click anywhere to move the ball </h2>
<div id="foo" class="ball"> </div> 
<p>Click anywhere to move the ball</p>
<div id="foo" class="ball"></div>
<nav>
  <a href="#">Home </a>
  <a href="#">About </a>
  <a href="#">Projects </a>
  <a href="#">SKills </a>
</nav>

<div class="spinner">
  <h2>Animations Playground </h2>
  <div class="spinner-content">
      <div class="spinner-inner-content-eye-lid"> </div>
    <div class="spinner-inner-content"> 
      <div class="spinner-inner-content-eye"> </div>
    </div>
  </div>
  <div class="spinner-content1"> </div>
  <div class="spinner-content2"> </div>
  <div class="spinner-content3"> </div>
  
</div>
    
    
    </div>
  )
}

export default Animations