var cnv=document.getElementById("grid");
var ctx = cnv.getContext("2d" ) ;


 //small units

  for(var i=5; i<605; i=i+6)
    {
     //vertical lines
    ctx.moveTo(i,5);
    ctx.lineTo(i,605);
    
     //horizontal lines
    ctx.moveTo(5,i);
    ctx.lineTo(605,i);



    ctx.strokeStyle="#f0f0f0";
    ctx.stroke();
   }

   //major units
  
   for(var i=5; i<605; i=i+30)
   { 

    //vertical lines
    ctx.moveTo(i,5);
    ctx.lineTo(i,605);
    
     //horizontal lines
    ctx.moveTo(5,i);
    ctx.lineTo(605,i);

    ctx.strokeStyle="#c0c0c0";
    ctx.stroke();



   }