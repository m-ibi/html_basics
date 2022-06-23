var canvas = new fabric.Canvas('canvas');
var r = undefined;

var car = undefined;

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

function addCar(){

    // approach 1 ( failing, as data loading confirmation error)
    // car = new fabric.Image.fromURL('library/car1.png');
    // canvas.add(car);
    // canvas.renderAll()
    // approach 2 ( hopefully will work)
    fabric.Image.fromURL('library/car1.png', function (img){
        canvas.add(img);
        console.log(canvas.getObjects());
        // console.log(car);
        // return img;
    });
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

window.addEventListener("onload", onload);

function onload(){
    console.log("testing");
}



// safe init..
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 

docReady(function() {
    console.log("Doc Ready function..");
    // now adding btn events
    document.getElementById('btn1').addEventListener('click',newObject);
    document.getElementById('btn2').addEventListener('click',newObjectCircle);
    document.getElementById('btn3').addEventListener('click',addCar);
    // keyboard events are best done in window level (below is failing)
    // canvas.on('keydown', checkKeyPress,false);

});
//--------------------------//
//---------KEYBOARD EVENTS  //
//--------------------------//


// op1
// window.addEventListener('keydown',(event) => {     
//     console.log(event)
// });

// op2 (better because function with name is separate thing)
window.addEventListener('keydown', checkKeyPress,false);

function checkKeyPress(key){
    console.log(key);
    // if (key.keycode == "87"){
    //     alert("the key w has been pressed")
    // }
    //if (key.keycode == "65"){
       // alert("the key a has been pressed")
   // }
    //if (key.keycode == "83"){
        //alert("the key s has been pressed")
    //}
    //if (key.keycode == "68"){
       // alert("the key d has been pressed")
    //}


}


