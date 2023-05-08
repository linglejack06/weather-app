export function convertTime(dateStr) {
  const date = new Date(dateStr);
  const hours = date.getHours();
  // % 12 will take time down to 12 hr format i.e. 13 % 12 -> 1
  if (hours >= 12) {
    return `${(hours % 12 > 0) ? hours % 12 : 12}PM`;
  // eslint-disable-next-line no-else-return
  } else if (!hours) {
    return '12AM';
  }
  return `${hours}AM`;
}
export function filterHourCards(hours) {
  let index;
  hours.forEach((hour) => {
    if (hour.classList.contains('current-hour')) {
      index = hours.indexOf(hour);
    }
  });
  return Array.prototype.concat(hours.slice(index, hours.length));
}
