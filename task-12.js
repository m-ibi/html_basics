

var canvas = new fabric.Canvas('canvas');

function newObject(){
var rect = new fabric.Rect({

left:100,
top:Math.random()*canvas.height, 
fill:'#'+ Math.round(0xffffff * Math.random()).toString(16),
width:Math.random()*canvas.width ,
height:Math.random()*80+20,
})

canvas.add(rect);


canvas.on('mouse:over', function(e) {
    e.target.set('fill', 'red');
    canvas.renderAll();
  });

  canvas.on('mouse:out', function(e) {
    e.target.set('fill', 'green');
    canvas.renderAll();
  });


}


document.getElementById('btn').addEventListener('click',newObject);

newObject()
mouseOver()
document.getElementById('clear').addEventListener('click', function clear () {
    ctx.clearRect(0, 0, grid.width, grid.height);
}, false);

