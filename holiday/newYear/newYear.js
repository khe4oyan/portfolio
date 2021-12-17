let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;;
canvas.width = window.innerWidth;

let snows = [];

ctx.fillStyle = 'white';
ctx.shadowColor = 'white';
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;

// =========================
createSnow(20);
showSnow();
// =========================

function showSnow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < snows.length; i++) {
    ctx.beginPath();
    ctx.arc(snows[i][1],snows[i][0], snows[i][2],0,Math.PI*2,true);
    ctx.fill();
    let toDown = 1 + Math.floor(Math.random() * 3);
    let toSide = -1 + Math.floor(Math.random() * 3);
    snows[i][0] += (snows[i][2] + toDown) / 3;
    snows[i][1] += toSide;
    if (snows[i][0] >= canvas.height + snows[i][2]) {
      snows[i] = null;
      snows = snows.filter(snow => snow != null);
      createSnow(1);
    }
  }
  setTimeout(() => {
    showSnow();
  }, 30);
}

function createSnow(count) {
  let w = window.innerWidth;
  let rand = Math.floor(Math.random() * w);
  let size = 3 + Math.floor(Math.random() * 5);
  let snow = [-100, rand, size];
  snows.push(snow);
  setTimeout(() =>{
    if(count != 1){
      createSnow(count - 1);
    }
  }, 500);
}


let lastTop = 0;
window.addEventListener("scroll", function(scrol){
  if(lastTop > window.pageYOffset){
    // up
    console.log();
    for(let i = 0; i < snows.length; i++){
      snows[i][0] += lastTop - window.pageYOffset;
    }
  }else{
    //  down
    console.log();
    for(let i = 0; i < snows.length; i++){
      snows[i][0] += lastTop - window.pageYOffset;
    }
  }
  lastTop = window.pageYOffset;
});