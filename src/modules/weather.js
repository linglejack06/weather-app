const API_KEY = '2db864c7cf004874a79172657230205';

export async function fetchData (location = 'New York') {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=7`);
    return await response.json();
}
export async function formatData () {
    const data = await fetchData();
    let currentTemp = data.current.temp_f;
    let currentCondition = data.current.condition;
    let maxTemp = data.forecast.forecastday[0].day.maxtemp_f;
    let minTemp = data.forecast.forecastday[0].day.mintemp_f;
    let hours = []
    data.forecast.forecastday[0].hour.map(val => {
        let temp = val.temp_f;
        let time = val.time;
        let feelsLike = val.feelslike_f;
        let gust = val.gust_mph;
        let rainChance = val.chance_of_rain;
        let snowChance = val.chance_of_snow;
        let condition = val.condition;
        let humidity = val.humidity;
        let uv = val.uv;
        let wind = val.wind_mph;
        hours.push({ temp, time, feelsLike, gust, rainChance, snowChance, condition, humidity, uv, wind })
    })
    return {currentTemp, currentCondition, maxTemp, minTemp, hours}
}
