import getData from './modules/weather';
import fetchImage from './modules/giphy';
import { addImage, addHourCard, addWeatherCard } from './modules/dom';
import convertTime from './modules/helperFuncs';

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getData(input.value)
    .then((data) => {
      console.log(data);
      addHourCard(data.hours[0]);
      addWeatherCard(data);
      console.log(convertTime(data.hours[14].time));
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
