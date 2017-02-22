var isWeekday = function(day) {
  var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var weekDay = week[day];

  var determineWeekday = weekDay.startsWith('S');

  if (determineWeekday === false) {
    return true;
  } else {
    return determineWeekday;
  }
}

const date = new Date();

console.log('Is it a week day: ' + isWeekday(date.getDay()));
