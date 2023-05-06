export default function addImage(url) {
  if (document.querySelector('img')) {
    const oldImage = document.querySelector('img');
    document.body.removeChild(oldImage);
  }
  const image = new Image();
  image.src = url;
  document.body.appendChild(image);
}
