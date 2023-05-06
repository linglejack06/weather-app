const API_KEY = '2db864c7cf004874a79172657230205';

async function fetchData(location) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=7`);
    return response.json();
  } catch (err) {
    console.log(err);
  }
}
function formatData(data) {
  const currentTemp = data.current.temp_f;
  const currentCondition = data.current.condition;
  const maxTemp = data.forecast.forecastday[0].day.maxtemp_f;
  const minTemp = data.forecast.forecastday[0].day.mintemp_f;
  const location = `${data.location.name}, ${data.location.region}`;
  const hours = [];
  data.forecast.forecastday[0].hour.forEach((val) => {
    const temp = val.temp_f;
    const { time } = val;
    const feelsLike = val.feelslike_f;
    const gust = val.gust_mph;
    const rainChance = val.chance_of_rain;
    const snowChance = val.chance_of_snow;
    const { condition } = val;
    const { humidity } = val;
    const { uv } = val;
    const wind = val.wind_mph;
    hours.push({
      temp, time, feelsLike, gust, rainChance, snowChance, condition, humidity, uv, wind,
    });
  });
  return {
    location, currentTemp, currentCondition, maxTemp, minTemp, hours,
  };
}
export default async function getData(location = 'New York') {
  try {
    const data = await fetchData(location);
    return formatData(data);
  } catch (err) {
    console.log(err);
  }
}
