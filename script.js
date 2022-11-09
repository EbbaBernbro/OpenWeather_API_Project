// C O D E   F O R   D I S P L A Y I N G   C O N T E N T   O N   T H E   P A G E   F R O M   R E Q U E S T   F U N C T I O N
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

// C O D E   F O R   D O I N G   T H E   R E Q U E S T
//Fetch weather data for a location - function
function fetchWeather() {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?lat=68.3501695&lon=18.8300059&units=metric&appid=466ef4685d34153b24ce25e39f641f6a";

  //Fetch API guide at:https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  fetch(url)
    .then((response) => response.json())
    .then((data) => renderWeather(data));
}

//Calling the function
fetchWeather();
