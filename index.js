const city = document.querySelector("#city");
const container = document.querySelector(".weather-container");

check.addEventListener("click", (e) => {
  dataCoor(city.value);
});

const dataCoor = async (inputValue) => {
  let arrayCoor = [];

  await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=1&appid=d3e4cb63dc0fb8b3d3446d63411efe7c`
  )
    .then((res) => res.json())
    .then((data) => arrayCoor.push([data[0].lat, data[0].lon]));
  dataWeather(arrayCoor[0]);
};

const dataWeather = async (param) => {
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${param[0]}&lon=${param[1]}&appid=ea8857ec42341eefef3f0d04e77c8d50`
  )
    .then((res) => res.json())
    .then((data) => displayWeather(data));
};

const displayWeather = (data) => {
  container.innerHTML = `
          <div class="content">
              <h2>Ville : ${data.name}</h2>
              <ul>
                <li>Température : ${Math.round(data.main.temp - 273.15)}</li>
                <li>Pression : ${data.main.pressure}</li>
                <li>Vitesse Vent : ${data.wind.speed}</li>
              </ul>
          </div>
      `;
};
