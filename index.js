
document.getElementById("search").addEventListener("click", async () => {
  let city = document.getElementById("city").value;

  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=34f987f46a88c97f70220b670fc353a9`
    );

    if (res.status!==200) {
      return alert("City not found");
    }

    let data = await res.json();
    console.log(data);

    let str = `
    <h2>${data.name}</h2>

      <h3>Coordinates</h3>
      <p><b>Longitude:</b> ${data.coord.lon}</p>
      <p><b>Latitude:</b> ${data.coord.lat}</p>

      <h3>Weather</h3>
      <p><b>Main:</b> ${data.weather[0].main}</p>
      <p><b>Description:</b> ${data.weather[0].description}</p>
      <p><b>Icon:</b> <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].main}"></p>
      <p><b>Weather ID:</b> ${data.weather[0].id}</p>

      <h3>Main Details</h3>
      <p><b>Temperature:</b> ${(data.main.temp - 273.15).toFixed(2)}°C</p>
      <p><b>Feels Like:</b> ${(data.main.feels_like - 273.15).toFixed(2)}°C</p>
      <p><b>Min Temp:</b> ${(data.main.temp_min - 273.15).toFixed(2)}°C</p>
      <p><b>Max Temp:</b> ${(data.main.temp_max - 273.15).toFixed(2)}°C</p>
      <p><b>Pressure:</b> ${data.main.pressure} hPa</p>
      <p><b>Humidity:</b> ${data.main.humidity}%</p>
      <p><b>Sea Level:</b> ${data.main.sea_level || "N/A"}</p>
      <p><b>Ground Level:</b> ${data.main.grnd_level || "N/A"}</p>

      <h3>Wind</h3>
      <p><b>Speed:</b> ${data.wind.speed} m/s</p>
      <p><b>Direction:</b> ${data.wind.deg}°</p>

      <h3>Clouds</h3>
      <p><b>Cloudiness:</b> ${data.clouds.all}%</p>

      <h3>System Info</h3>
      <p><b>Country:</b> ${data.sys.country}</p>
      <p><b>Sunrise:</b> ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
      <p><b>Sunset:</b> ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
      <p><b>System Type:</b> ${data.sys.type || "N/A"}</p>
      <p><b>System ID:</b> ${data.sys.id || "N/A"}</p>

      <h3>Other</h3>
      <p><b>Visibility:</b> ${data.visibility / 1000} km</p>
      <p><b>Timezone:</b> ${data.timezone} seconds</p>
      <p><b>Base:</b> ${data.base}</p>
      <p><b>City ID:</b> ${data.id}</p>
      <p><b>Code:</b> ${data.cod}</p>
      <p><b>Data Time (Unix):</b> ${data.dt}</p>
    `;

    document.getElementById("display").innerHTML = str;

  } catch (error) {
    console.log(error);
    // alert("Something went wrong. Please try again.");
  }
});

