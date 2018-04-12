var countdownGenerator = function (x) {
  var time = x;
  var countingDown = "T-minus "
  var blastOff = "Blast Off!"
  var upInTheAir = "Rockets already gone, bub!"
  return function () {
    if (time > 0) {
      console.log(countingDown + time + "...");
      time--;
    }
    else if (time == 0) {
      console.log(blastOff)
      time--;
    }
    else {
      console.log(upInTheAir)
      time--;
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!