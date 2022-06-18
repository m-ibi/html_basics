var cnv=document.getElementById("grid");
var ctx = cnv.getContext("2d" ) ;

//hello im wasting time because im already done with work hahaah im a straight up villain is it a reallly a surprise a if im playing with your mind 
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
   document.getElementById('clear').addEventListener('click', function () {
    ctx.clearRect(0, 0, grid.width, grid.height);
}, false);


var body = document.getElementsByTagName("body")[0];
var canvas = document.createElement("canvas");

body.appendChild(canvas);
function create() {
//  Opacity
    ctx.globalAlpha=0.7;
    var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
    ctx.fillStyle = color;

    //Each rectangle's size is (20 ~ 100, 20 ~ 100)     
    ctx.fillRect(Math.random()*canvas.width, Math.random()*canvas.width, Math.random()*80+20, Math.random()*80+20);

}
 document.getElementById('buttonxD').addEventListener('click', create);