var timer = 60;
var score = 0;
var hitrn;

function scoreUpdate() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function makeBubble() {
 var clutter = "";
 for (var i = 1; i <= 161; i++) {
  var rn = Math.floor(Math.random() * 10);
  clutter += `<div class="bubble"> ${rn} </div>`;
 }
 document.querySelector("#pbtm").innerHTML = clutter;
}

function updateTime() {
 var timerInterval = setInterval(function () {
  if (timer > 0) {
   timer--;
   document.querySelector("#timeVal").textContent = timer;
  } else {
      clearInterval(timerInterval);
      document.querySelector("#pbtm").innerHTML = `<p id="over">GAME OVER</p>`;
  }
 }, 1000);
}

function getnewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitNum").textContent = hitrn;
    
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickedNum = (Number(dets.target.textContent));
    if (clickedNum === hitrn) {
        scoreUpdate();
        getnewHit();
        makeBubble();
    }
})


scoreUpdate(); 
updateTime();
makeBubble();
getnewHit();