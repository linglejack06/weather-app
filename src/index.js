import getData from './modules/weather';
import fetchImage from './modules/giphy';
import {
  createHourCard, addWeatherCard, clearWeather, renderCards, renderSidebar,
} from './modules/dom';
import { convertTime, filterHourCards } from './modules/helperFuncs';
// eslint-disable-next-line no-unused-vars
import Style from './style.css';

const form = document.querySelector('form');
const input = document.querySelector('input');
let cards = [];
function renderPage(data) {
  data.hours.forEach((hour) => {
    if (convertTime(data.currentTime) === convertTime(hour.time)) {
      cards.push(createHourCard(hour, true));
    } else {
      cards.push(createHourCard(hour));
    }
  });
  const hourCards = filterHourCards(cards);
  renderCards(hourCards);
  fetchImage(data.currentCondition.text).then((url) => {
    addWeatherCard(data, url);
  });
}
const savedLocations = {};
form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearWeather();
  cards = [];
  getData(input.value)
    .then((data) => {
      savedLocations[data.location] = data;
      renderSidebar(savedLocations);
      console.log(savedLocations);
      renderPage(data);
    })
    .then(() => {
      const sidebarLinks = document.querySelectorAll('.sidebar-item');
      console.log(sidebarLinks);
      sidebarLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
          clearWeather();
          renderPage(savedLocations[event.target.dataset.location]);
        });
      });
    })
    .catch((err) => {
      console.error(err);
    });
});
