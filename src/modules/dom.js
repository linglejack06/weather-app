import { convertTime } from './helperFuncs';

let weatherActive = false;
const weatherContainer = document.querySelector('.weather-container');
const cardContainer = document.querySelector('.card-container');
export function addImage(url) {
  if (document.querySelector('.weather-image')) {
    const oldImage = document.querySelector('.weather-image');
    document.body.removeChild(oldImage);
  }
  const image = new Image();
  image.src = url;
  image.classList.add('weather-image');
  document.body.appendChild(image);
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
