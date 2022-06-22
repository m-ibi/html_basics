var canvas = new fabric.Canvas('canvas');
var r = undefined;

 function mouseOver(e) {
  e.target.set('fill', 'red');
  canvas.renderAll();
};

function mouseOut(e) {
  e.target.set('fill', 'green');
  canvas.renderAll();
}


function newObject(){
var rect = new fabric.Rect({

left:100,
top:Math.random()*canvas.height, 
fill:'#'+ Math.round(0xffffff * Math.random()).toString(16),
width:Math.random()*canvas.width ,
height:Math.random()*80+20,
})

canvas.add(rect);

rect.on('mouseover',mouseOver) ;
rect.on('mouseout',mouseOut) ;
rect.on('mouseup',mouseclick);
canvas.renderAll()
}


function newObjectCircle(){
  var circle = new fabric.Circle({
  
  left:100,
  top:Math.random()*canvas.height, 
  fill:'#'+ Math.round(0xffffff * Math.random()).toString(16),
  radius:Math.random()*canvas.height,
  })
  
  canvas.add(circle);
  circle.on('mouseover',mouseOver) 
  circle.on('mouseout',mouseOut) 
  circle.on('mouseup',mouseclick);
canvas.renderAll()

}

function mouseclick(e) {
  allObjects = canvas.getObjects()
  r = allObjects[2]
  console.log("here") ;
   
  if (allObjects.length > 1) {
     console.log(allObjects[2])
    //  e.target.set('left', 20)
    allObjects[2].set('left', e.target.get('left'))
   }
     
    
};

document.getElementById('btn').addEventListener('click',newObject);
document.getElementById('btn2').addEventListener('click',newObjectCircle);
newObject()
