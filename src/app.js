function search (event) {
event.preventDefault();
let searchFieldInput = document.querySelector("#search-field");
let cityInputElement = document.querySelector ("#city-input");
cityInputElement.innerHTML = searchFieldInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener ("submit", search);