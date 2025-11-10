
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
      <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</p>
      <p>Weather: ${data.weather[0].main}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;

    document.getElementById("display").innerHTML = str;

  } catch (error) {
    console.log(error);
    // alert("Something went wrong. Please try again.");
  }
});

