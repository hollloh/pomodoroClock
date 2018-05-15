
let body = document.querySelector('body');
let alarm = document.querySelector('#alarm');
let setPomo = document.querySelector('#setPomo');
let setBreak = document.querySelector('#setBreak');
let btn = document.querySelector('#btn');
let demo = document.querySelector('#demo');
let milRaw = document.querySelector('#milRaw');
let h14 = document.querySelector('.h14');
let h13 = document.querySelector('.h13');
let h12 = document.querySelector('.h12');
let h11 = document.querySelector('.h11');
let h4 = document.querySelector('.h4');
let h3 = document.querySelector('.h3');
let h2 = document.querySelector('.h2');
let h1 = document.querySelector('.h1');
let m14 = document.querySelector('.m14');
let m13 = document.querySelector('.m13');
let m12 = document.querySelector('.m12');
let m11 = document.querySelector('.m11');
let m4 = document.querySelector('.m4');
let m3 = document.querySelector('.m3');
let m2 = document.querySelector('.m2');
let m1 = document.querySelector('.m1');
let s14 = document.querySelector('.s14');
let s13 = document.querySelector('.s13');
let s12 = document.querySelector('.s12');
let s11 = document.querySelector('.s11');
let s4 = document.querySelector('.s4');
let s3 = document.querySelector('.s3');
let s2 = document.querySelector('.s2');
let s1 = document.querySelector('.s1');

btn.onclick = startPomo;

let intervalID;
function startPomo() {
  btn.onclick = stopPomo;
  backCol();
  btn.textContent = 'POMO';
  if (isNaN(setPomo.value) || isNaN(setBreak.value)) {
    stopPomo();
    btn.textContent = 'KETCHUP'
    return;
  }
  let pomo = Date.now();
  pomo += 1000 * 60 * setPomo.value;
  pomo = new Date(pomo);
  let flipFlop = pomo;
  layer();
  function layer() {
    intervalID = setInterval(function () {
      let now = Date.now();
      let dif = flipFlop - now;
      let h = Math.floor(dif / (1000 * 60 * 60));
      let m = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
      let s = Math.floor((dif % (1000 * 60)) / 1000);
      let deciS = Math.floor((dif % 1000) / 10); // display every hundredth millisecond
      if (h < 10) {
        h = '0' + h;
      }
      if (m < 10) {
        m = '0' + m;
      }
      if (s < 10) {
        s = '0' + s;
      }
      if (deciS < 10) {
        deciS = '0' + deciS;
      }
      demo.style.padding = '5px';
      demo.style.border = '1px solid #00ffaa';
      demo.innerHTML = h + ':' + m + ':' + s + ':' + deciS;

      let sds = Math.floor((dif % 10000) / 1000); // singleDigitSecond
      let dds = Math.floor((dif % (1000 * 60)) / 10000); // doubleDigitSecond
      let sdm = Math.floor((dif % (10000 * 60)) / (1000 * 60)); // singleDigitMinute
      let ddm = Math.floor((dif % (1000 * 60 * 60)) / (10000 * 60)); // doubleDigitMinute
      let sdh = Math.floor(dif % (10000 * 60 * 60) / (1000 * 60 * 60)); // singleDigitHour
      let ddh = Math.floor(dif % (100000*60*60) / (10000*60*60)); // doubleDigitHour

      // obviously can be simplified
      // just haven't thought of HOW just yet
      // will condense to one line FOR NOW
      // i think the solution will be making those cell classes (m14, s3 ...)
      // more flexible; e.g. someVariable.style = 

      if (ddh === 9) { h14.style.backgroundColor = '#00ffaa'; h13.style.backgroundColor = 'transparent'; h12.style.backgroundColor = 'transparent'; h11.style.backgroundColor = '#00ffaa'; h14.style.boxShadow = '0px 0px 3px #00ffaa'; h13.style.boxShadow = '0px 0px 3px transparent'; h12.style.boxShadow = '0px 0px 3px transparent'; h11.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (ddh === 8) { h14.style.backgroundColor = '#00ffaa'; h13.style.backgroundColor = 'transparent'; h12.style.backgroundColor = 'transparent'; h11.style.backgroundColor = 'transparent'; h14.style.boxShadow = '0px 0px 3px #00ffaa'; h13.style.boxShadow = '0px 0px 3px transparent'; h12.style.boxShadow = '0px 0px 3px transparent'; h11.style.boxShadow = '0px 0px 3px transparent'; }
      if (ddh === 7) { h14.style.backgroundColor = 'transparent'; h13.style.backgroundColor = '#00ffaa'; h12.style.backgroundColor = '#00ffaa'; h11.style.backgroundColor = '#00ffaa'; h14.style.boxShadow = '0px 0px 3px transparent'; h13.style.boxShadow = '0px 0px 3px #00ffaa'; h12.style.boxShadow = '0px 0px 3px #00ffaa'; h11.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (ddh === 6) { h14.style.backgroundColor = 'transparent'; h13.style.backgroundColor = '#00ffaa'; h12.style.backgroundColor = '#00ffaa'; h11.style.backgroundColor = 'transparent'; h14.style.boxShadow = '0px 0px 3px transparent'; h13.style.boxShadow = '0px 0px 3px #00ffaa'; h12.style.boxShadow = '0px 0px 3px #00ffaa'; h11.style.boxShadow = '0px 0px 3px transparent'; }
      if (ddh === 5) { h14.style.backgroundColor = 'transparent'; h13.style.backgroundColor = '#00ffaa'; h12.style.backgroundColor = 'transparent'; h11.style.backgroundColor = '#00ffaa'; h14.style.boxShadow = '0px 0px 3px transparent'; h13.style.boxShadow = '0px 0px 3px #00ffaa'; h12.style.boxShadow = '0px 0px 3px transparent'; h11.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (ddh === 4) { h14.style.backgroundColor = 'transparent'; h13.style.backgroundColor = '#00ffaa'; h12.style.backgroundColor = 'transparent'; h11.style.backgroundColor = 'transparent'; h14.style.boxShadow = '0px 0px 3px transparent'; h13.style.boxShadow = '0px 0px 3px #00ffaa'; h12.style.boxShadow = '0px 0px 3px transparent'; h11.style.boxShadow = '0px 0px 3px transparent'; }
      if (ddh === 3) { h14.style.backgroundColor = 'transparent'; h13.style.backgroundColor = 'transparent'; h12.style.backgroundColor = '#00ffaa'; h11.style.backgroundColor = '#00ffaa'; h14.style.boxShadow = '0px 0px 3px transparent'; h13.style.boxShadow = '0px 0px 3px transparent'; h12.style.boxShadow = '0px 0px 3px #00ffaa'; h11.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (ddh === 2) { h14.style.backgroundColor = 'transparent'; h13.style.backgroundColor = 'transparent'; h12.style.backgroundColor = '#00ffaa'; h11.style.backgroundColor = 'transparent'; h14.style.boxShadow = '0px 0px 3px transparent'; h13.style.boxShadow = '0px 0px 3px transparent'; h12.style.boxShadow = '0px 0px 3px #00ffaa'; h11.style.boxShadow = '0px 0px 3px transparent'; }
      if (ddh === 1) { h14.style.backgroundColor = 'transparent'; h13.style.backgroundColor = 'transparent'; h12.style.backgroundColor = 'transparent'; h11.style.backgroundColor = '#00ffaa'; h14.style.boxShadow = '0px 0px 3px transparent'; h13.style.boxShadow = '0px 0px 3px transparent'; h12.style.boxShadow = '0px 0px 3px transparent'; h11.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (ddh === 0) { h14.style.backgroundColor = 'transparent'; h13.style.backgroundColor = 'transparent'; h12.style.backgroundColor = 'transparent'; h11.style.backgroundColor = 'transparent'; h14.style.boxShadow = '0px 0px 3px transparent'; h13.style.boxShadow = '0px 0px 3px transparent'; h12.style.boxShadow = '0px 0px 3px transparent'; h11.style.boxShadow = '0px 0px 3px transparent'; }

      if (sdh === 9) { h4.style.backgroundColor = '#00ffaa'; h3.style.backgroundColor = 'transparent'; h2.style.backgroundColor = 'transparent'; h1.style.backgroundColor = '#00ffaa'; h4.style.boxShadow = '0px 0px 3px #00ffaa'; h3.style.boxShadow = '0px 0px 3px transparent'; h2.style.boxShadow = '0px 0px 3px transparent'; h1.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (sdh === 8) { h4.style.backgroundColor = '#00ffaa'; h3.style.backgroundColor = 'transparent'; h2.style.backgroundColor = 'transparent'; h1.style.backgroundColor = 'transparent'; h4.style.boxShadow = '0px 0px 3px #00ffaa'; h3.style.boxShadow = '0px 0px 3px transparent'; h2.style.boxShadow = '0px 0px 3px transparent'; h1.style.boxShadow = '0px 0px 3px transparent'; }
      if (sdh === 7) { h4.style.backgroundColor = 'transparent'; h3.style.backgroundColor = '#00ffaa'; h2.style.backgroundColor = '#00ffaa'; h1.style.backgroundColor = '#00ffaa'; h4.style.boxShadow = '0px 0px 3px transparent'; h3.style.boxShadow = '0px 0px 3px #00ffaa'; h2.style.boxShadow = '0px 0px 3px #00ffaa'; h1.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (sdh === 6) { h4.style.backgroundColor = 'transparent'; h3.style.backgroundColor = '#00ffaa'; h2.style.backgroundColor = '#00ffaa'; h1.style.backgroundColor = 'transparent'; h4.style.boxShadow = '0px 0px 3px transparent'; h3.style.boxShadow = '0px 0px 3px #00ffaa'; h2.style.boxShadow = '0px 0px 3px #00ffaa'; h1.style.boxShadow = '0px 0px 3px transparent'; }
      if (sdh === 5) { h4.style.backgroundColor = 'transparent'; h3.style.backgroundColor = '#00ffaa'; h2.style.backgroundColor = 'transparent'; h1.style.backgroundColor = '#00ffaa'; h4.style.boxShadow = '0px 0px 3px transparent'; h3.style.boxShadow = '0px 0px 3px #00ffaa'; h2.style.boxShadow = '0px 0px 3px transparent'; h1.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (sdh === 4) { h4.style.backgroundColor = 'transparent'; h3.style.backgroundColor = '#00ffaa'; h2.style.backgroundColor = 'transparent'; h1.style.backgroundColor = 'transparent'; h4.style.boxShadow = '0px 0px 3px transparent'; h3.style.boxShadow = '0px 0px 3px #00ffaa'; h2.style.boxShadow = '0px 0px 3px transparent'; h1.style.boxShadow = '0px 0px 3px transparent'; }
      if (sdh === 3) { h4.style.backgroundColor = 'transparent'; h3.style.backgroundColor = 'transparent'; h2.style.backgroundColor = '#00ffaa'; h1.style.backgroundColor = '#00ffaa'; h4.style.boxShadow = '0px 0px 3px transparent'; h3.style.boxShadow = '0px 0px 3px transparent'; h2.style.boxShadow = '0px 0px 3px #00ffaa'; h1.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (sdh === 2) { h4.style.backgroundColor = 'transparent'; h3.style.backgroundColor = 'transparent'; h2.style.backgroundColor = '#00ffaa'; h1.style.backgroundColor = 'transparent'; h4.style.boxShadow = '0px 0px 3px transparent'; h3.style.boxShadow = '0px 0px 3px transparent'; h2.style.boxShadow = '0px 0px 3px #00ffaa'; h1.style.boxShadow = '0px 0px 3px transparent'; }
      if (sdh === 1) { h4.style.backgroundColor = 'transparent'; h3.style.backgroundColor = 'transparent'; h2.style.backgroundColor = 'transparent'; h1.style.backgroundColor = '#00ffaa'; h4.style.boxShadow = '0px 0px 3px transparent'; h3.style.boxShadow = '0px 0px 3px transparent'; h2.style.boxShadow = '0px 0px 3px transparent'; h1.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (sdh === 0) { h4.style.backgroundColor = 'transparent'; h3.style.backgroundColor = 'transparent'; h2.style.backgroundColor = 'transparent'; h1.style.backgroundColor = 'transparent'; h4.style.boxShadow = '0px 0px 3px transparent'; h3.style.boxShadow = '0px 0px 3px transparent'; h2.style.boxShadow = '0px 0px 3px transparent'; h1.style.boxShadow = '0px 0px 3px transparent'; }

      if (ddm === 5) { m14.style.backgroundColor = 'transparent'; m13.style.backgroundColor = '#00ffaa'; m12.style.backgroundColor = 'transparent'; m11.style.backgroundColor = '#00ffaa'; m14.style.boxShadow = '0px 0px 3px transparent'; m13.style.boxShadow = '0px 0px 3px #00ffaa'; m12.style.boxShadow = '0px 0px 3px transparent'; m11.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (ddm === 4) { m14.style.backgroundColor = 'transparent'; m13.style.backgroundColor = '#00ffaa'; m12.style.backgroundColor = 'transparent'; m11.style.backgroundColor = 'transparent'; m14.style.boxShadow = '0px 0px 3px transparent'; m13.style.boxShadow = '0px 0px 3px #00ffaa'; m12.style.boxShadow = '0px 0px 3px transparent'; m11.style.boxShadow = '0px 0px 3px transparent'; }
      if (ddm === 3) { m14.style.backgroundColor = 'transparent'; m13.style.backgroundColor = 'transparent'; m12.style.backgroundColor = '#00ffaa'; m11.style.backgroundColor = '#00ffaa'; m14.style.boxShadow = '0px 0px 3px transparent'; m13.style.boxShadow = '0px 0px 3px transparent'; m12.style.boxShadow = '0px 0px 3px #00ffaa'; m11.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (ddm === 2) { m14.style.backgroundColor = 'transparent'; m13.style.backgroundColor = 'transparent'; m12.style.backgroundColor = '#00ffaa'; m11.style.backgroundColor = 'transparent'; m14.style.boxShadow = '0px 0px 3px transparent'; m13.style.boxShadow = '0px 0px 3px transparent'; m12.style.boxShadow = '0px 0px 3px #00ffaa'; m11.style.boxShadow = '0px 0px 3px transparent'; }
      if (ddm === 1) { m14.style.backgroundColor = 'transparent'; m13.style.backgroundColor = 'transparent'; m12.style.backgroundColor = 'transparent'; m11.style.backgroundColor = '#00ffaa'; m14.style.boxShadow = '0px 0px 3px transparent'; m13.style.boxShadow = '0px 0px 3px transparent'; m12.style.boxShadow = '0px 0px 3px transparent'; m11.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (ddm === 0) { m14.style.backgroundColor = 'transparent'; m13.style.backgroundColor = 'transparent'; m12.style.backgroundColor = 'transparent'; m11.style.backgroundColor = 'transparent'; m14.style.boxShadow = '0px 0px 3px transparent'; m13.style.boxShadow = '0px 0px 3px transparent'; m12.style.boxShadow = '0px 0px 3px transparent'; m11.style.boxShadow = '0px 0px 3px transparent'; }

      if (sdm === 9) { m4.style.backgroundColor = '#00ffaa'; m3.style.backgroundColor = 'transparent'; m2.style.backgroundColor = 'transparent'; m1.style.backgroundColor = '#00ffaa'; m4.style.boxShadow = '0px 0px 3px #00ffaa'; m3.style.boxShadow = '0px 0px 3px transparent'; m2.style.boxShadow = '0px 0px 3px transparent'; m1.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (sdm === 8) { m4.style.backgroundColor = '#00ffaa'; m3.style.backgroundColor = 'transparent'; m2.style.backgroundColor = 'transparent'; m1.style.backgroundColor = 'transparent'; m4.style.boxShadow = '0px 0px 3px #00ffaa'; m3.style.boxShadow = '0px 0px 3px transparent'; m2.style.boxShadow = '0px 0px 3px transparent'; m1.style.boxShadow = '0px 0px 3px transparent'; }
      if (sdm === 7) { m4.style.backgroundColor = 'transparent'; m3.style.backgroundColor = '#00ffaa'; m2.style.backgroundColor = '#00ffaa'; m1.style.backgroundColor = '#00ffaa'; m4.style.boxShadow = '0px 0px 3px transparent'; m3.style.boxShadow = '0px 0px 3px #00ffaa'; m2.style.boxShadow = '0px 0px 3px #00ffaa'; m1.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (sdm === 6) { m4.style.backgroundColor = 'transparent'; m3.style.backgroundColor = '#00ffaa'; m2.style.backgroundColor = '#00ffaa'; m1.style.backgroundColor = 'transparent'; m4.style.boxShadow = '0px 0px 3px transparent'; m3.style.boxShadow = '0px 0px 3px #00ffaa'; m2.style.boxShadow = '0px 0px 3px #00ffaa'; m1.style.boxShadow = '0px 0px 3px transparent'; }
      if (sdm === 5) { m4.style.backgroundColor = 'transparent'; m3.style.backgroundColor = '#00ffaa'; m2.style.backgroundColor = 'transparent'; m1.style.backgroundColor = '#00ffaa'; m4.style.boxShadow = '0px 0px 3px transparent'; m3.style.boxShadow = '0px 0px 3px #00ffaa'; m2.style.boxShadow = '0px 0px 3px transparent'; m1.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (sdm === 4) { m4.style.backgroundColor = 'transparent'; m3.style.backgroundColor = '#00ffaa'; m2.style.backgroundColor = 'transparent'; m1.style.backgroundColor = 'transparent'; m4.style.boxShadow = '0px 0px 3px transparent'; m3.style.boxShadow = '0px 0px 3px #00ffaa'; m2.style.boxShadow = '0px 0px 3px transparent'; m1.style.boxShadow = '0px 0px 3px transparent'; }
      if (sdm === 3) { m4.style.backgroundColor = 'transparent'; m3.style.backgroundColor = 'transparent'; m2.style.backgroundColor = '#00ffaa'; m1.style.backgroundColor = '#00ffaa'; m4.style.boxShadow = '0px 0px 3px transparent'; m3.style.boxShadow = '0px 0px 3px transparent'; m2.style.boxShadow = '0px 0px 3px #00ffaa'; m1.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (sdm === 2) { m4.style.backgroundColor = 'transparent'; m3.style.backgroundColor = 'transparent'; m2.style.backgroundColor = '#00ffaa'; m1.style.backgroundColor = 'transparent'; m4.style.boxShadow = '0px 0px 3px transparent'; m3.style.boxShadow = '0px 0px 3px transparent'; m2.style.boxShadow = '0px 0px 3px #00ffaa'; m1.style.boxShadow = '0px 0px 3px transparent'; }
      if (sdm === 1) { m4.style.backgroundColor = 'transparent'; m3.style.backgroundColor = 'transparent'; m2.style.backgroundColor = 'transparent'; m1.style.backgroundColor = '#00ffaa'; m4.style.boxShadow = '0px 0px 3px transparent'; m3.style.boxShadow = '0px 0px 3px transparent'; m2.style.boxShadow = '0px 0px 3px transparent'; m1.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (sdm === 0) { m4.style.backgroundColor = 'transparent'; m3.style.backgroundColor = 'transparent'; m2.style.backgroundColor = 'transparent'; m1.style.backgroundColor = 'transparent'; m4.style.boxShadow = '0px 0px 3px transparent'; m3.style.boxShadow = '0px 0px 3px transparent'; m2.style.boxShadow = '0px 0px 3px transparent'; m1.style.boxShadow = '0px 0px 3px transparent'; }

      if (dds === 5) { s14.style.backgroundColor = 'transparent'; s13.style.backgroundColor = '#00ffaa'; s12.style.backgroundColor = 'transparent'; s11.style.backgroundColor = '#00ffaa'; s14.style.boxShadow = '0px 0px 3px transparent'; s13.style.boxShadow = '0px 0px 3px #00ffaa'; s12.style.boxShadow = '0px 0px 3px transparent'; s11.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (dds === 4) { s14.style.backgroundColor = 'transparent'; s13.style.backgroundColor = '#00ffaa'; s12.style.backgroundColor = 'transparent'; s11.style.backgroundColor = 'transparent'; s14.style.boxShadow = '0px 0px 3px transparent'; s13.style.boxShadow = '0px 0px 3px #00ffaa'; s12.style.boxShadow = '0px 0px 3px transparent'; s11.style.boxShadow = '0px 0px 3px transparent'; }
      if (dds === 3) { s14.style.backgroundColor = 'transparent'; s13.style.backgroundColor = 'transparent'; s12.style.backgroundColor = '#00ffaa'; s11.style.backgroundColor = '#00ffaa'; s14.style.boxShadow = '0px 0px 3px transparent'; s13.style.boxShadow = '0px 0px 3px transparent'; s12.style.boxShadow = '0px 0px 3px #00ffaa'; s11.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (dds === 2) { s14.style.backgroundColor = 'transparent'; s13.style.backgroundColor = 'transparent'; s12.style.backgroundColor = '#00ffaa'; s11.style.backgroundColor = 'transparent'; s14.style.boxShadow = '0px 0px 3px transparent'; s13.style.boxShadow = '0px 0px 3px transparent'; s12.style.boxShadow = '0px 0px 3px #00ffaa'; s11.style.boxShadow = '0px 0px 3px transparent'; }
      if (dds === 1) { s14.style.backgroundColor = 'transparent'; s13.style.backgroundColor = 'transparent'; s12.style.backgroundColor = 'transparent'; s11.style.backgroundColor = '#00ffaa'; s14.style.boxShadow = '0px 0px 3px transparent'; s13.style.boxShadow = '0px 0px 3px transparent'; s12.style.boxShadow = '0px 0px 3px transparent'; s11.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (dds === 0) { s14.style.backgroundColor = 'transparent'; s13.style.backgroundColor = 'transparent'; s12.style.backgroundColor = 'transparent'; s11.style.backgroundColor = 'transparent'; s14.style.boxShadow = '0px 0px 3px transparent'; s13.style.boxShadow = '0px 0px 3px transparent'; s12.style.boxShadow = '0px 0px 3px transparent'; s11.style.boxShadow = '0px 0px 3px transparent'; }

      if (sds === 9) { s4.style.backgroundColor = '#00ffaa'; s3.style.backgroundColor = 'transparent'; s2.style.backgroundColor = 'transparent'; s1.style.backgroundColor = '#00ffaa'; s4.style.boxShadow = '0px 0px 3px #00ffaa'; s3.style.boxShadow = '0px 0px 3px transparent'; s2.style.boxShadow = '0px 0px 3px transparent'; s1.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (sds === 8) { s4.style.backgroundColor = '#00ffaa'; s3.style.backgroundColor = 'transparent'; s2.style.backgroundColor = 'transparent'; s1.style.backgroundColor = 'transparent'; s4.style.boxShadow = '0px 0px 3px #00ffaa'; s3.style.boxShadow = '0px 0px 3px transparent'; s2.style.boxShadow = '0px 0px 3px transparent'; s1.style.boxShadow = '0px 0px 3px transparent'; }
      if (sds === 7) { s4.style.backgroundColor = 'transparent'; s3.style.backgroundColor = '#00ffaa'; s2.style.backgroundColor = '#00ffaa'; s1.style.backgroundColor = '#00ffaa'; s4.style.boxShadow = '0px 0px 3px transparent'; s3.style.boxShadow = '0px 0px 3px #00ffaa'; s2.style.boxShadow = '0px 0px 3px #00ffaa'; s1.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (sds === 6) { s4.style.backgroundColor = 'transparent'; s3.style.backgroundColor = '#00ffaa'; s2.style.backgroundColor = '#00ffaa'; s1.style.backgroundColor = 'transparent'; s4.style.boxShadow = '0px 0px 3px transparent'; s3.style.boxShadow = '0px 0px 3px #00ffaa'; s2.style.boxShadow = '0px 0px 3px #00ffaa'; s1.style.boxShadow = '0px 0px 3px transparent'; }
      if (sds === 5) { s4.style.backgroundColor = 'transparent'; s3.style.backgroundColor = '#00ffaa'; s2.style.backgroundColor = 'transparent'; s1.style.backgroundColor = '#00ffaa'; s4.style.boxShadow = '0px 0px 3px transparent'; s3.style.boxShadow = '0px 0px 3px #00ffaa'; s2.style.boxShadow = '0px 0px 3px transparent'; s1.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (sds === 4) { s4.style.backgroundColor = 'transparent'; s3.style.backgroundColor = '#00ffaa'; s2.style.backgroundColor = 'transparent'; s1.style.backgroundColor = 'transparent'; s4.style.boxShadow = '0px 0px 3px transparent'; s3.style.boxShadow = '0px 0px 3px #00ffaa'; s2.style.boxShadow = '0px 0px 3px transparent'; s1.style.boxShadow = '0px 0px 3px transparent'; }
      if (sds === 3) { s4.style.backgroundColor = 'transparent'; s3.style.backgroundColor = 'transparent'; s2.style.backgroundColor = '#00ffaa'; s1.style.backgroundColor = '#00ffaa'; s4.style.boxShadow = '0px 0px 3px transparent'; s3.style.boxShadow = '0px 0px 3px transparent'; s2.style.boxShadow = '0px 0px 3px #00ffaa'; s1.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (sds === 2) { s4.style.backgroundColor = 'transparent'; s3.style.backgroundColor = 'transparent'; s2.style.backgroundColor = '#00ffaa'; s1.style.backgroundColor = 'transparent'; s4.style.boxShadow = '0px 0px 3px transparent'; s3.style.boxShadow = '0px 0px 3px transparent'; s2.style.boxShadow = '0px 0px 3px #00ffaa'; s1.style.boxShadow = '0px 0px 3px transparent'; }
      if (sds === 1) { s4.style.backgroundColor = 'transparent'; s3.style.backgroundColor = 'transparent'; s2.style.backgroundColor = 'transparent'; s1.style.backgroundColor = '#00ffaa'; s4.style.boxShadow = '0px 0px 3px transparent'; s3.style.boxShadow = '0px 0px 3px transparent'; s2.style.boxShadow = '0px 0px 3px transparent'; s1.style.boxShadow = '0px 0px 3px #00ffaa'; }
      if (sds === 0) { s4.style.backgroundColor = 'transparent'; s3.style.backgroundColor = 'transparent'; s2.style.backgroundColor = 'transparent'; s1.style.backgroundColor = 'transparent'; s4.style.boxShadow = '0px 0px 3px transparent'; s3.style.boxShadow = '0px 0px 3px transparent'; s2.style.boxShadow = '0px 0px 3px transparent'; s1.style.boxShadow = '0px 0px 3px transparent'; }

      milRaw.innerHTML = dif;
      if (dif < 100) { // not zero to avoid stuttering of timer
        alarm.play();
        if (flipFlop === pomo) {
          clearInterval(intervalID);
          let breakPomo = Date.now();
          breakPomo += 1000 * 60 * setBreak.value;
          breakPomo = new Date(breakPomo);
          flipFlop = breakPomo;
          btn.textContent = 'BREAK';
          layer();
        }
        else {
          clearInterval(intervalID);
          startPomo();
        }
      }
    },1);
  }
}
function stopPomo() {
  clearInterval(intervalID);
  clearInterval(backColIntID);
  body.style.transition = '5s';
  body.style.backgroundColor = '#00ffaa';
  btn.textContent = 'RESET';
  btn.onclick = startPomo;
}

function random(number) {
  return Math.floor(Math.random() * number);
}
function bgChange() {
  let rndCol = 'rgb('+random(50)+','+random(50)+','+random(50)+')';
  return rndCol;
}

let backColIntID;
function backCol() {
  body.style.backgroundColor = bgChange();
  body.style.transition = '55s';
  backColIntID = setInterval(function () {
    body.style.backgroundColor = bgChange();
  },(1000*60));
}
