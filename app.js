let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let sc = document.getElementById("sc");

let hours = document.getElementById("hour");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");
let pmam = document.getElementById("pmam");

function updateClock() {
  let now = new Date();
  let milliseconds = now.getMilliseconds();
  let seconds = now.getSeconds() + milliseconds / 1000;
  let minutes = now.getMinutes() + seconds / 60;
  let hoursValue = (now.getHours() % 12) + minutes / 60;

  let ssDeg = seconds * 6;
  let mmDeg = minutes * 6;
  let hhDeg = hoursValue * 30;

  sc.style.transform = `rotateZ(${ssDeg}deg)`;
  mn.style.transform = `rotateZ(${mmDeg}deg)`;
  hr.style.transform = `rotateZ(${hhDeg}deg)`;

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let amPm = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h -= 12;
  }

  hours.innerHTML = h < 10 ? "0" + h : h;
  minute.innerHTML = m < 10 ? "0" + m : m;
  second.innerHTML = s < 10 ? "0" + s : s;
  pmam.innerHTML = amPm;

  requestAnimationFrame(updateClock);
}

updateClock();
