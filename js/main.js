const target = document.getElementById("menu");
target.addEventListener('click', () => {
  const target = document.getElementById("menu");
  target.classList.toggle('open');
  const nav = document.getElementById("nav");
  nav.classList.toggle('in');
});


  function showBalloon(){ var wObjballoon = document.getElementById("makelmg");
    if(wObjballoon.className == "balloonl"){
      wObjballoon.className = "balloon";
    }else{
      wObjballoon.className = "balloonl";
    }
  }

  

  $(document).ready(function(){
    
    $('#example').darkTooltip();

    $('#light').darkToolp({
      animation:'flipin',
      gravity:'west',
      confirm:true,
      theme:'light',
      trigger:'click'
    });
  });