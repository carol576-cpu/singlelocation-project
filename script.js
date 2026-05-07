function updateClock() {
  let johannesburgTime = moment().tz("Africa/Johannesburg");

  let date = johannesburgTime.format("dddd, MMMM D, YYYY");

  let time = johannesburgTime.format("h:mm:ss A");

  document.querySelector("#date").innerHTML = date;

  document.querySelector("#time").innerHTML = time;
}

updateClock();

setInterval(updateClock, 1000);
