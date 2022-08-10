let smallBar = document.querySelector(".small-bar-holder");
let largeBar = document.querySelector(".large-bar-holder");
// console.log(smallBar);
let dial = document.querySelector(".dial");
let angle = 6;
let button = document.querySelector(".button");

for(let i=2;i<=30;i++){
    angle=angle+6
    var newBar = document.createElement("div");

    if(i%5==0){
     newBar.setAttribute("class","large-bar-holder");
    //  console.log(newBar)
     newBar.innerHTML = largeBar.innerHTML;
    //  console.log(newBar)
     newBar.style.transform="rotate("+angle+"deg)";
     dial.appendChild(newBar)
    }else{
    newBar.setAttribute("class","small-bar-holder");
// console.log(newBar)
    newBar.innerHTML = smallBar.innerHTML;
// console.log(newBar)
    newBar.style.transform="rotate("+angle+"deg)";
    dial.appendChild(newBar)
    }
}
let minHand = document.querySelector(".min-hand-holder");
let hourHand = document.querySelector(".hour-hand-holder");

function action(){
    var min = Math.floor(Math.random()*60);
    // console.log(min);
    let minAngle = (min*6);
    minHand.style.transform = "rotate("+minAngle+"deg)"

    var hour = Math.floor(Math.random()*12);
    // console.log(hour);
    var hourAngle = ((hour*60)+min)*0.5;
    hourHand.style.transform = "rotate("+hourAngle+"deg)"
    
}

button.addEventListener("click",action);


