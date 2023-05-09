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
  const currentTemp = `${data.current.temp_f}\u00B0 F`;
  const currentCondition = data.current.condition;
  const currentTime = data.current.last_updated;
  const currentUV = data.current.uv;
  const currentWind = `${data.current.wind_mph}mph`;
  const currentGust = `${data.current.gust_mph}mph`;
  const currentHumidity = `${data.current.humidity}%`;
  const currentPrecip = `${data.current.precip_in}in`;
  const maxTemp = `${data.forecast.forecastday[0].day.maxtemp_f}\u00B0 F`;
  const minTemp = `${data.forecast.forecastday[0].day.mintemp_f}\u00B0 F`;
  const location = `${data.location.name}, ${data.location.region}`;
  const hours = [];
  data.forecast.forecastday[0].hour.forEach((val) => {
    const temp = `${val.temp_f}\u00B0 F`;
    const { time } = val;
    const feelsLike = `${val.feelslike_f}\u00B0 F`;
    const gust = `${val.gust_mph}mph`;
    const rainChance = `${val.chance_of_rain}%`;
    const snowChance = `${val.chance_of_snow}%`;
    const { condition } = val;
    const humidity = `${val.humidity}%`;
    const { uv } = val;
    const wind = `${val.wind_mph}mph`;
    hours.push({
      temp, time, feelsLike, gust, rainChance, snowChance, condition, humidity, uv, wind,
    });
  });
  const days = [];
  data.forecast.forecastday.forEach((day) => {
    const { date } = day;
    const minDayTemp = `${day.day.mintemp_f}\u00B0 F`;
    const maxDayTemp = `${day.day.maxtemp_f}\u00B0 F`;
    const condition = day.day.condition.text;
    days.push({
      date, minDayTemp, maxDayTemp, condition,
    });
  });
  return {
    // eslint-disable-next-line max-len
    location, currentTemp, currentCondition, currentTime, currentUV, currentWind, currentGust, currentHumidity, currentPrecip, maxTemp, minTemp, hours, days,
  };
}
export default async function getData(location = 'New York') {
  try {
    const data = await fetchData(location);
    console.log(data);
    return formatData(data);
  } catch (err) {
    console.log(err);
  }
}
