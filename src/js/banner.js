export default () => {
  var falling = true;
  const confetti = [document.querySelector('#squiggle'),
                    document.querySelector('#half-circle'), document.querySelector('#circle')]
  const colors = ["#c9caca", "#feef5c", "#ff9b69", "#fb3e34", "#05b051"]
  // TweenLite.set("#anim-container",{perspective:600})
  // TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})
  
  const total = 60;
  const container = document.querySelector("#anim-container")
  const width = container.innerWidth
  const height = window.innerHeight
   
  for (let i=0; i<total; i++){ 
    let dot = confetti[Math.round(random(0, 2))].cloneNode(true)
    dot.querySelector('path, circle').style.fill = colors[Math.round(random(0, 4))]
    dot.id = ""
    container.appendChild(dot);
    TweenLite.set(dot,{
      attr:{class:'dot'},
      x:random(0,width),
      y: -450,
    });
    animate(dot);
  }   
  function random(min,max) {return min+Math.random()*(max-min)};
  function animate(el){   
    TweenMax.to(el,random(6,15),{
      y:height+100,
      ease:Linear.easeNone,
      repeat:-1,
      delay:-15
    });
    TweenMax.to(el,random(2,8),{
      rotation:random(0,360),
    //  rotationY:random(0,360),
      repeat:-1,
      yoyo:true,
      ease:Sine.easeInOut,
      delay:-5
    });
  };
        
}
