import getData from './modules/weather';
import fetchImage from './modules/giphy';
import {
  addImage, addHourCard, addWeatherCard, clearWeather,
} from './modules/dom';
import convertTime from './modules/helperFuncs';
// eslint-disable-next-line no-unused-vars
import Style from './style.css';

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearWeather();
  getData(input.value)
    .then((data) => {
      console.log(data);
      data.hours.forEach((hour) => {
        if (convertTime(data.currentTime) === convertTime(hour.time)) {
          addHourCard(hour, true);
        } else {
          addHourCard(hour);
        }
      });
      addHourCard(data.hours[0]);
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
