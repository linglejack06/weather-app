const API_KEY = '2db864c7cf004874a79172657230205';

export async function fetchData (location = 'New York') {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
    return await response.json();
}
export async function formatData () {
    const data = await fetchData();
    return {temperature: data.current.temp_f};
}
