let colors = ['blue', 'red', 'green', 'yellow' ]

let genNew = document.getElementById('genNew');
let boxes = document.getElementsByClassName('box');

genNew.addEventListener('click',function(){


for (const box in boxes) {
    if (Object.hasOwnProperty.call(boxes, box)) {
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    const element = boxes[box];
    console.log(element);
    element.style.background = randomColor; 
    
   }
 
    }
})


