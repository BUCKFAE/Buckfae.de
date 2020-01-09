canvasSizeX = 800
canvasSizeY = 600

logoSizeX = 140
logoSizeY = 140

logoPosX = 0
logoPosY = 0

directionX = 1 //Positive Number: Going right, Negative Number: Going left
directionY = 1 //Positive Number: Going down, Negative Number: Going UP

stepCounter = 0; //Keeps track how many steps we did this cycle

stepsRequiredPerCycle = 0; 



function setup() {
  let canvas = createCanvas(canvasSizeX, canvasSizeY);

  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');


  //Calculates how many steps we need
  stepsRequiredPerCycle = calculateRequiredSteps();

  document.getElementById("LogoX").value = logoSizeX;
  document.getElementById("LogoY").value = logoSizeY;
  document.getElementById("CanvasX").value = canvasSizeX;
  document.getElementById("CanvasY").value = canvasSizeY;
}

function draw() {
  background(0);

  //Updating labels displaying how many moves are left
  document.getElementById("stepsTakenThisCycle").innerHTML = "Steps: " + stepCounter++;
  document.getElementById("stepsRemainingThisCycle").innerHTML = "Remaining " + (stepsRequiredPerCycle - stepCounter); 

  updatePosition();
  
  rect(logoPosX, logoPosY, logoSizeX, logoSizeY);

}


function updatePosition() {

  //Keeps track if we hit X or Y
  hitX = false;
  hitY = false;

  //Updates X and if we hit a wall we bounce back
  if (directionX == 1 && ((logoPosX += directionX) + logoSizeX >= canvasSizeX)) {
    hitX = true;
    directionX = -1; //We will go the other way around
  } else if (directionX == -1 && (logoPosX += directionX) <= 0) {
    directionX = 1;
    hitX = true;
  }

  if (directionY == 1 && ((logoPosY += directionY) + logoSizeY >= canvasSizeY)) {
    directionY = -1;
    hitY = true;
  } else if (directionY == -1 && (logoPosY += directionY) <= 0) {
    directionY = 1;
    hitY = true;
  }

  if(hitX == true && hitY == true){
    stepCounter = 0;
  }
}

function calculateRequiredSteps(){
  return lcm_two_numbers(canvasSizeX - logoSizeX, canvasSizeY - logoSizeY)
}

function lcm_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
   return false;
 return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
 x = Math.abs(x);
 y = Math.abs(y);
 while(y) {
   var t = y;
   y = x % y;
   x = t;
 }
 return x;
}

function restart(){
  stepCounter = 0;

  logoSizeX = document.getElementById("LogoX").value;
  logoSizeY = document.getElementById("LogoY").value;
  canvasSizeX = document.getElementById("CanvasX").value;
  canvasSizeY = document.getElementById("CanvasY").value;

  stepsRequiredPerCycle = calculateRequiredSteps();

  directionX = 1;
  directionY = 1; 
  
  logoPosX = 0;
  logoPosY = 0;

}