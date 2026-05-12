function updateClock() {
  let johannesburgElement = document.querySelector("#johannesburg-time");
  let johannesburgDateElement = document.querySelector("#johannesburg-date");

  let johannesburgTime = moment().tz("Africa/Johannesburg");

  johannesburgDateElement.innerHTML =
    johannesburgTime.format("dddd, MMMM D, YYYY");

  johannesburgElement.innerHTML = johannesburgTime.format("h:mm:ss A");

  let londonElement = document.querySelector("#london-time");
  let londonDateElement = document.querySelector("#london-date");

  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("dddd, MMMM D, YYYY");

  londonElement.innerHTML = londonTime.format("h:mm:ss A");

  let newYorkElement = document.querySelector("#newyork-time");
  let newYorkDateElement = document.querySelector("#newyork-date");

  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("dddd, MMMM D, YYYY");

  newYorkElement.innerHTML = newYorkTime.format("h:mm:ss A");
}

updateClock();

setInterval(updateClock, 1000);
