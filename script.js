let apiKey = "466ef4685d34153b24ce25e39f641f6a";

// C O D E   F O R   D O I N G   A   R E Q U E S T
//Fetch coordinates for a location
function fetchLocation() {
  let city = "abisko";
  let url =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=1&appid=" +
    apiKey;

  fetch(url)
    //The then() method returns a Promise.
    .then((response) => response.json()) //Returns data as a JSON Object
    .then((data) => fetchWeather(data));
}

//Calling the function
fetchLocation();

// C O D E   F O R   D O I N G   A   R E Q U E S T
//Fetch weather for a location
function fetchWeather(coords) {
  const latitude = coords[0].lat;
  const longitude = coords[0].lon;

  /*unit parameter in API call as Kelvin is used by default.
    Metric could be changed to imperial for Fahrenheit*/
  let celsius = "&units=metric";
  let url =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    latitude +
    "&lon=" +
    longitude +
    celsius +
    "&appid=" +
    apiKey;

  fetch(url)
    .then((response) => response.json())
    .then((data) => renderWeather(data));
}

/*
C O D E   F O R   D I S P L A Y I N G   C O N T E N T   O N   
T H E   P A G E   F R O M   R E Q U E S T   F U N C T I O N 
*/
function renderWeather(forecast) {
  //Referens to the HTML container with the ID weatherData
  let forecastDetails = document.getElementById("weatherData");

  //variables for storing data
  let location = forecast.name;
  let localTemp = Math.round(forecast.main.temp);

  /*What I learned from the variable below is that ${forecast.weather[0].description} 
    will give me undefined wheras storing it in this variable works.*/
  let localWeatherDescription = forecast.weather[0].description;

  forecastDetails.innerHTML = `
  <h2 class="location">${location}</h2>
  <div class="temperature">Temperature: ${localTemp} °C</div>
  <div class="description">Description: ${localWeatherDescription}</div>
  `;
}
