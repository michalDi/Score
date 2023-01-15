let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let bh1 = 0  // bh1 = add 1 to home score

let bg1 = 0

let sH = 0   // sh = home score
scoreHome.textContent = 0
scoreGuest.textContent = 0

function reset() { window.location.reload(); 
}
function bCh1() {  // bCh1 = button clicked add 1 to home score
    bh1 += 1;
    sH = bh1;
    scoreHome.textContent = sH;
}
function bCh2() {  // bCh1 = button clicked add 2 to home score
        bh1 += 2;
        sH = bh1;
        scoreHome.textContent = sH;
}
function bCh3() {  // bCh1 = button clicked add 3 to guest score
    bh1 += 3;
    sH = bh1;
    scoreHome.textContent = sH;
}
function bCg1() {  // bCh1 = button clicked add 1 to home score
    bg1 += 1;
    sH = bg1;
    scoreGuest.textContent = sH;
}
function bCg2() {  // bCh1 = button clicked add 2 to guest score
    bg1 += 2;
    sH = bg1;
    scoreGuest.textContent = sH;
}
function bCg3() {  // bCh1 = button clicked add 3 to guest score
    bg1 += 3;
    sH = bg1;
    scoreGuest.textContent = sH;
}
// <div id="txt"></div>

/* <script>
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
</script> */