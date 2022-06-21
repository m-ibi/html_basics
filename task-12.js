var canvas = new fabric.Canvas('canvas');

function newObject(){
var rect = new fabric.Rect({

left:100,
top:Math.random()*canvas.height, 
fill:'#'+ Math.round(0xffffff * Math.random()).toString(16),
width:Math.random()*canvas.height ,
height:Math.random()*80+20,
})

canvas.add(rect);
}


document.getElementById('btn').addEventListener('click',newObject);

newObject()