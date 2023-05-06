import getData from './modules/weather';
import fetchImage from './modules/giphy';
import addImage from './modules/dom';

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getData(input.value)
    .then((data) => {
      console.log(data);
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
