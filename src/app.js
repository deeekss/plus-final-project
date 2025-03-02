function displayWeatherInfo (response) {
let currentTemperatureElement = document.querySelector("#current-temperature");
currentTemperatureElement.innerHTML = Math.round (response.data.temperature.current);
console.log(response.data);
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
let cityInputElement = document.querySelector ("#city-input");
cityInputElement.innerHTML = searchFieldInput.value;
searchForCity(searchFieldInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener ("submit", search);