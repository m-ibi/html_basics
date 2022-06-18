let colors = ['blue', 'red', 'green', 'yellow', 'darkcyan', 'coral', 'chocolate', 'grey', 'aliceblue', 'darkgreen', 'pink', 'violet', 'aqua', 'brown', 'orange','purple']

let genNew = document.getElementById('genNew');
let boxes = document.getElementsByClassName('box');

genNew.addEventListener('click', function () {

    let counter = 0;
    for (const box in boxes) {
        if (Object.hasOwnProperty.call(boxes, box)) {
            var randomColor = colors[Math.floor(Math.random() * colors.length)]
            const element = boxes[box];
            // console.log(element);
            // element.style.background = randomColor;
            // change color
            
            var elementColor = element.style.background;
            cindex = colors.indexOf(elementColor);
            if (cindex == -1 ) {
                console.log('first run done');
                var myc = colors[counter];
            } else if (cindex == colors.length-1){
                console.log('here');
                counter=0;
                var myc = colors[counter];
            } else {
                var myc = colors[cindex+1];
            }
            element.style.background = myc;


            // just adding to counter so it works
            counter += 1;
            // console.log(counter);
        }

    }
});

// assign colors on start
genNew.click();