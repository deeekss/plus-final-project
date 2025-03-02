function displayWeatherInfo (response) {
let currentTemperatureElement = document.querySelector("#current-temperature");
let temperature = response.data.temperature.current;
let cityInputElement = document.querySelector ("#city-input");
let temperatureDescription = document.querySelector("#temperature-condition-description");
let humidityPercentage = document.querySelector ("#humidity-percentage");
cityInputElement.innerHTML = response.data.city;
temperatureDescription.innerHTML = response.data.condition.description;
humidityPercentage.innerHTML = `${response.data.temperature.humidity}%`;
currentTemperatureElement.innerHTML = Math.round (temperature);
}

function searchForCity (city) {
//making an api call for the weather info of a searched city and updating interface info
let apiKey = "e73c4be11o1t827c45e67a30e6f63ea0";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiURL).then(displayWeatherInfo);
}

function search (event) {
event.preventDefault();
let searchFieldInput = document.querySelector("#search-field");
searchForCity(searchFieldInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener ("submit", search);

//ask Frank on how to show a random city when the page loads