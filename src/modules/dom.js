import { convertTime } from './helperFuncs';

let weatherActive = false;
const weatherContainer = document.querySelector('.weather-container');
const cardContainer = document.querySelector('.card-container');
const sidebar = document.querySelector('.sidebar');
function addImage(url, container) {
  if (document.querySelector('.weather-image')) {
    const oldImage = document.querySelector('.weather-image');
    weatherContainer.removeChild(oldImage);
  }
  const image = new Image();
  image.src = url;
  image.classList.add('weather-image');
  container.appendChild(image);
}
export function createHourCard(hour, current) {
  const container = document.createElement('div');
  container.classList.add('hour-card');
  if (current) container.classList.add('current-hour');
  const timeCond = document.createElement('div');
  timeCond.classList.add('time-and-condition');
  const time = document.createElement('h2');
  time.textContent = convertTime(hour.time);
  timeCond.appendChild(time);
  const cond = document.createElement('div');
  cond.classList.add('cond-img');
  const image = new Image();
  image.src = hour.condition.icon;
  image.classList.add('hour-cond-img');
  cond.appendChild(image);
  timeCond.appendChild(cond);
  container.appendChild(timeCond);
  const temp = document.createElement('h4');
  temp.classList.add('hour-temp');
  temp.textContent = hour.temp;
  container.appendChild(temp);
  const cOfR = document.createElement('h4');
  cOfR.classList.add('hour-rain-chance');
  cOfR.textContent = `Rain: ${hour.rainChance}`;
  container.appendChild(cOfR);
  return container;
}
export function renderCards(hourCards) {
  hourCards.forEach((card) => {
    cardContainer.appendChild(card);
  });
}
export function addWeatherCard(data, url) {
  weatherActive = true;
  const headContainer = document.createElement('div');
  headContainer.classList.add('weather-head');
  addImage(url, headContainer);
  const innerContainer = document.createElement('div');
  innerContainer.classList.add('loc-and-condition');
  const location = document.createElement('h1');
  location.classList.add('weather-location');
  location.textContent = data.location;
  innerContainer.appendChild(location);
  const condition = document.createElement('h4');
  condition.classList.add('weather-condition');
  condition.textContent = data.currentCondition.text;
  innerContainer.appendChild(condition);
  headContainer.appendChild(innerContainer);
  weatherContainer.appendChild(headContainer);
  const bodyContainer = document.createElement('div');
  bodyContainer.classList.add('body-container');
  const tempAndUvContainer = document.createElement('div');
  tempAndUvContainer.classList.add('temp-and-uv-container', 'weather-widget');
  const temp = document.createElement('h4');
  temp.classList.add('current-temp', 'weather-module');
  temp.textContent = `Currently: ${data.currentTemp}`;
  tempAndUvContainer.appendChild(temp);
  const uv = document.createElement('h4');
  uv.classList.add('weather-uv', 'weather-module');
  uv.textContent = `UV Index: ${data.currentUV}`;
  tempAndUvContainer.appendChild(uv);
  bodyContainer.appendChild(tempAndUvContainer);
  const highLowContainer = document.createElement('div');
  highLowContainer.classList.add('high-low-container', 'weather-widget');
  const lowTemp = document.createElement('h4');
  lowTemp.classList.add('low-temp', 'weather-module');
  lowTemp.textContent = `Low: ${data.minTemp}`;
  highLowContainer.appendChild(lowTemp);
  const highTemp = document.createElement('h4');
  highTemp.classList.add('high-temp', 'weather-module');
  highTemp.textContent = `High: ${data.maxTemp}`;
  highLowContainer.appendChild(highTemp);
  bodyContainer.appendChild(highLowContainer);
  const windContainer = document.createElement('div');
  windContainer.classList.add('wind-container', 'weather-widget');
  const wind = document.createElement('h4');
  wind.classList.add('wind', 'weather-module');
  wind.textContent = `Wind: ${data.currentWind}`;
  windContainer.appendChild(wind);
  const gust = document.createElement('h4');
  gust.classList.add('gust', 'weather-module');
  gust.textContent = `Gust: ${data.currentGust}`;
  windContainer.appendChild(gust);
  bodyContainer.appendChild(windContainer);
  const rainContainer = document.createElement('div');
  rainContainer.classList.add('rain-and-humidity-container', 'weather-widget');
  const rain = document.createElement('h4');
  rain.classList.add('rain', 'weather-module');
  rain.textContent = `Precipitation: ${data.currentPrecip}`;
  rainContainer.appendChild(rain);
  const humidity = document.createElement('h4');
  humidity.classList.add('humidity', 'weather-module');
  humidity.textContent = `Humidity: ${data.currentHumidity}`;
  rainContainer.appendChild(humidity);
  bodyContainer.appendChild(rainContainer);
  weatherContainer.appendChild(bodyContainer);
}
export function clearWeather() {
  if (weatherActive) {
    weatherContainer.innerHTML = '';
    cardContainer.innerHTML = '';
  }
}
export function renderSidebar(locations, location) {
  sidebar.innerHTML = '';
  // eslint-disable-next-line no-restricted-syntax, no-unused-vars
  for (const [key] of Object.entries(locations)) {
    const sidebarBtn = document.createElement('button');
    sidebarBtn.textContent = key;
    sidebarBtn.classList.add('sidebar-item');
    if (key === location) {
      sidebarBtn.classList.add('active');
    }
    sidebarBtn.dataset.location = key;
    sidebar.appendChild(sidebarBtn);
  }
}
