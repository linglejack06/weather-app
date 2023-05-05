import {fetchData, formatData} from './modules/weather';

formatData().then(data => console.log(data));