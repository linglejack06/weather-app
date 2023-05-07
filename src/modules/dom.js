import convertTime from './helperFuncs';

let weatherActive = false;
const weatherContainer = document.querySelector('.weather-container');
const cardContainer = document.querySelector('.card-container');
export function addImage(url) {
  if (document.querySelector('img')) {
    const oldImage = document.querySelector('img');
    document.body.removeChild(oldImage);
  }
  const image = new Image();
  image.src = url;
  document.body.appendChild(image);
}
export function addHourCard(hour, current) {
  const container = document.createElement('div');
  container.classList.add('hour-card');
  if (current) container.classList.add('current-hour');
  container.textContent = convertTime(hour.time);
  cardContainer.appendChild(container);
}
export function addWeatherCard(data) {
  weatherActive = true;
  const tempContainer = document.createElement('div');
  tempContainer.classList.add('temp');
  tempContainer.textContent = data.currentTemp;
  weatherContainer.appendChild(tempContainer);
}
export function clearWeather() {
  if (weatherActive) {
    weatherContainer.innerHTML = '';
    cardContainer.innerHTML = '';
  }
}
