let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let sc = document.getElementById("sc");

setInterval(() => {
  let Day = new Date();
  let hh = Day.getHours() * 30;
  let mm = Day.getMinutes() * 6;
  let ss = Day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  let hours = document.getElementById("hour");
  let minute = document.getElementById("minutes");
  let second = document.getElementById("seconds");
  let pmam = document.getElementById("pmam");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let am = h >= 12 ? 'PM' : 'AM'

  if(h > 12){
    h = h - 12
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minute.innerHTML = m;
  second.innerHTML = s;
  pmam.innerHTML = am;
});

// digital clock
