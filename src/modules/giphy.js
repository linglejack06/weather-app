const API_KEY = 'kt4Luu8Pd4JcGKajRewfofuDRnYPTpdo';

export default async function fetchImage(condition = 'sunny') {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${condition}&limit=1`);
    const json = await response.json();
    return json.data[0].images.original.url;
  } catch (err) {
    console.log(err);
  }
}
