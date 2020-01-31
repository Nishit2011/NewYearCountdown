const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const year = document.getElementById("year");

const loading = document.getElementById("loading");
const time = document.getElementById("time");

function countdownTimer() {
  const currentTime = new Date();
  const currentYear = new Date().getFullYear();
  const newYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

  const diff = newYear - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
  year.innerHTML = currentYear + 1;
}

setTimeout(() => {
  loading.remove();
  time.style.display = "flex";
}, 1000);

setInterval(countdownTimer, 1000);
