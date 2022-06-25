var canvas = new fabric.Canvas('canvas');
var r = undefined;
var car = null;
var acc = false;
var brake = 0;
var steer = 0;
var speed = 0;
var drag = 0.05;

window.addEventListener("onload", onload);
function onload(){
    console.log("testing");
}

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {

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
    //document.getElementById('btn3').addEventListener('click',addCar);

});

function updateScreen(){
    a = document.getElementById("acc");
    s = document.getElementById("speed");
    b = document.getElementById("brake");
    c = document.getElementById("steer");
    a.innerHTML = "acc:"+String(acc);
    s.innerHTML = "speed:"+String(Math.round(speed * 10) / 10);
    b.innerHTML = "brake:"+String(brake);
    c.innerHTML = "steer:"+String(steer);
}
//-------------------------------------//
//---adding objects---//

function newObject(){
var rect = new fabric.Rect({

left:100,
top:Math.random()*canvas.height, 
fill:'#'+ Math.round(0xffffff * Math.random()).toString(16),
width:50 ,
height:50 ,
angle:-90

})

canvas.add(rect);

rect.on('mouseover',mouseOver) ;
rect.on('mouseout',mouseOut) ;
rect.on('keydown', checkKeyPressDown);
rect.on('keyup', checkKeyPressUp);
canvas.renderAll()
}
newObject();
var car = canvas.getObjects()[0];
//function addCar(){

   
     // car = new fabric.Image.fromURL('library/car1.png', function (img){
       
        
       //  canvas.add(img);
        
        //console.log(canvas.getObjects());
    //});
//}

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

steerLeft();
steerRight();
//updateRect();
canvas.renderAll()
}

//----------------//
//---mouseEvents---//
//-----------------//



function mouseOver(e) {
    e.target.set('fill', 'red');
    canvas.renderAll();
  };
  
  function mouseOut(e) {
    e.target.set('fill', 'green');
    canvas.renderAll();
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


//--------------------------//
//---------KEYBOARD EVENTS  //
//--------------------------//



window.addEventListener('keydown', checkKeyPressDown,false);
function checkKeyPressDown(key){
    console.log(key)
    console.log('keydown');
   
    if (key.key == 'w') {
        acc = true
        //console.log("keyW")
        // updateScreen()
        updateRect()
        // canvas.renderAll()
    }
    if (key.key == 'a') {
        steer = 'left'
        //console.log("keyA")
        // updateScreen()
        steerLeft()
        // canvas.renderAll()
    }
    if (key.key == 's') {
        brake = 1
        //console.log("keyS")
        // updateScreen()
    }
    if (key.key == 'd') {
        steer = 'right'
        //console.log("keyD")
        steerRight()
        // canvas.renderAll()
    }
    updateScreen()


}

window.addEventListener('keyup', checkKeyPressUp,false);

function checkKeyPressUp(key){
    //console.log(key);
    console.log('keylifted');
    if (key.key == "w") {
        acc = 0
       // console.log("keyW")
    //    updateScreen()
    }
    if (key.key == "a") {
        steer = 0;
       // console.log("keyA")
    //    updateScreen()
    }
    if (key.key == "s") {
        brake = 0;
       // console.log("keyS")
    //    updateScreen()
    }
    if (key.key == "d") {
        steer = 0;
        //console.log("keyD")
    }
    updateScreen()



}

//-------------------------------//
//---------car functions---------//
//-------------------------------//

 var d = canvas.getObjects()[0];

  
function steerRight(){
   
   a = canvas.getObjects()[0];
    a.rotate(a.angle+10);
    canvas.renderAll()

}

function steerLeft(){
    
    a = canvas.getObjects()[0];
    a.rotate(a.angle-10);
    canvas.renderAll()
 
 
 }

 function updateRect(){

    
    car.left+= speed * Math.cos(car.angle*Math.PI/180)*drag;
    car.top += speed * Math.sin(car.angle*Math.PI/180)*drag;
    canvas.renderAll()
}

setInterval(onTimerTick,33);


function onTimerTick(){
   
   if(acc==true){
    console.log("increasing speed");
    speed += 1; 
   } else{
    console.log("stopping due to friction/drag");
      speed -= speed * drag;
   }
   updateScreen();
   updateRect();
   //canvas.renderAll();

}

