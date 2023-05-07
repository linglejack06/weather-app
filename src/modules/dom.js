export function addImage(url) {
  if (document.querySelector('img')) {
    const oldImage = document.querySelector('img');
    document.body.removeChild(oldImage);
  }
  const image = new Image();
  image.src = url;
  document.body.appendChild(image);
}
export function addHourCard(hour) {
  const container = document.createElement('div');
  container.classList.add('hour-container');
  container.textContent = hour.time;
  document.body.appendChild(container);
}
export function addWeatherCard(data) {
  const card = document.createElement('div');
  card.classList.add('weather-card');
  card.textContent = data.currentTemp;
  document.body.appendChild(card);
}
