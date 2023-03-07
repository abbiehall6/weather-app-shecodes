function formatDate(date) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];

  let currentDate = date.getDate();
  let year = date.getFullYear();

  let fullDate = month + " " + currentDate + ", " + year;

  return fullDate;
}

function formatDay(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let hours = date.getHours();

  let day = days[date.getDay()];

  let currentDay = day + "  " + hours + ":" + minutes;

  return currentDay;
}

function searchCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#city-input");
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayTemp);
}

function displayCurrentLocation() {
  navigator.geolocation.getCurrentPosition(getPosition);
}

function getPosition(position) {
  let currentLat = position.coords.latitude;
  let currentLon = position.coords.longitude;
  let apiKey = "1fd8093fa5ff12d796d7de756cc9d6b9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLat}&lon=${currentLon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
}

function displayTemp(response) {
  let currentTemp = Math.round(response.data.main.temp);
  let currentTempDisplay = document.querySelector("#current-temp");
  let h1 = document.querySelector("h1");

  h1.innerHTML = response.data.name;

  currentTempDisplay.innerHTML = currentTemp;

  currentTempDisplay.innerHTML = currentTemp;
}

function showCelsius(event) {
  event.preventDefault();
  let temp = document.querySelector("#current-temp");

  temp.innerHTML = "17";
}

function showFahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector("#current-temp");

  temp.innerHTML = "62.6";
}

let currentDate = new Date();

let displayDay = document.querySelector("#current-day");

let displayDate = document.querySelector("#current-date");

let searchForm = document.querySelector("form");

let tempCelsius = document.querySelector("#celsius");

let tempFarheinheit = document.querySelector("#fahrenheit");

let currentLocation = document.querySelector("#current-location-button");

displayDate.innerHTML = formatDate(currentDate);

displayDay.innerHTML = formatDay(currentDate);

searchForm.addEventListener("click", searchCity);

tempCelsius.addEventListener("click", showCelsius);

tempFarheinheit.addEventListener("click", showFahrenheit);

currentLocation.addEventListener("click", displayCurrentLocation);
