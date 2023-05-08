import getData from './modules/weather';
import fetchImage from './modules/giphy';
import {
  addImage, createHourCard, addWeatherCard, clearWeather, renderCards,
} from './modules/dom';
import { convertTime, filterHourCards } from './modules/helperFuncs';
// eslint-disable-next-line no-unused-vars
import Style from './style.css';

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearWeather();
  const cards = [];
  getData(input.value)
    .then((data) => {
      console.log(data);
      data.hours.forEach((hour) => {
        if (convertTime(data.currentTime) === convertTime(hour.time)) {
          cards.push(createHourCard(hour, true));
        } else {
          cards.push(createHourCard(hour));
        }
      });
      const hourCards = filterHourCards(cards);
      renderCards(hourCards);
      addWeatherCard(data);
      return data.currentCondition.text;
    })
    .then((condition) => {
      fetchImage(condition).then((url) => {
        addImage(url);
      });
    })
    .catch((err) => {
      console.error(err);
    });
});
