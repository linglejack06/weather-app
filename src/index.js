import {fetchData, formatData} from './modules/weather';

formatData().then(obj => console.log(obj.temperature))