var yearsAgo = function(year) {
  var yearAgo = thisYear.getFullYear() - year;

  return yearAgo;
}

var thisYear = new Date();

console.log("That was " + yearsAgo(2010) + " years ago.");
