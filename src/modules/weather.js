const API_KEY = '2db864c7cf004874a79172657230205';

export default async function fetchData (location = 'New York') {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
    const json = await response.json();
    console.log(json);
}