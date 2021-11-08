  var tID;
  var    position = 995; //start point
  const  interval = 100; //100 ms interval/time
  tID = setInterval ( () => {
  document.getElementById("image").style.backgroundPosition = `-${position}px 0px`; 
  //change varible "position" statick in dinamic
  if (position < 74625 ) //file info - width.
  { position = position + 995;}
  //plus 1 size width picture
  else
  { position = 995;}
  //reset position when width = 74625
  } 
    , interval ); //speed animation
   


