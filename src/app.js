function displayWeatherInfo(response) {
  let currentTemperatureElement = document.querySelector(
    "#current-temperature"
  );
  let temperature = response.data.temperature.current;
  let cityInputElement = document.querySelector("#city-input");
  let temperatureDescription = document.querySelector(
    "#temperature-condition-description"
  );
  let humidityPercentage = document.querySelector("#humidity-percentage");
  let windSpeed = document.querySelector("#wind-speed");
  let iconElement = document.querySelector("#temperature-icon");
  iconElement.innerHTML = `<img src= "${response.data.condition.icon_url}" class="current-temperature-icon"/>`;

  cityInputElement.innerHTML = response.data.city;
  temperatureDescription.innerHTML = response.data.condition.description;
  humidityPercentage.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  currentTemperatureElement.innerHTML = Math.round(temperature);

  retrieveForecastData(response.data.city);
}

function searchForCity(city) {
  //making an api call for the weather info of a searched city and updating interface info
  let apiKey = "e73c4be11o1t827c45e67a30e6f63ea0";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayWeatherInfo);
}

function search(event) {
  event.preventDefault();
  let searchFieldInput = document.querySelector("#search-field");
  searchForCity(searchFieldInput.value);
}


searchForCity("London");


let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDate = document.querySelector("#current-date");
let currentTime = new Date();
let day = currentTime.getDay();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let presentDay = days[day];
currentDate.innerHTML = `${presentDay}, ${hours}:${minutes}`;

function retrieveForecastData (city) {
  let apiKey = "e73c4be11o1t827c45e67a30e6f63ea0";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios(apiUrl).then(displayForecast);
}

function displayForecast(response) {
console.log(response)
  // create an array with the days of the week
  let days = ["Sun", "Tue", "Wed", "Thur", "Fri"];
  //create a forecastHtml variable that has an empty string, which will allow me to inject the forecast HTML 
  let forecastHtml = "";
//loop through the array of days one at a time, then make forecastHTML to equal to the forecast HTML with the day in it e.g., Sun
  days.forEach (function (day) {
  forecastHtml +=  
  `       
  <div class="weather-forecast-day">
    <div class="weather-forecast-date">${day}</div>
    <div class="weather-forecast-icon">🌤️</div>
    <div class="weather-forecast-temperatures">
      <div class="weather-forecast-temperature">
        <strong>15º</strong>
      </div>
      <div class="weather-forecast-temperature">9º</div>
    </div>
  </div>
  `;
});
// the loop above will repeat for the amount of days I've added

let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHtml;

}

displayForecast()

retrieveForecastData("London");