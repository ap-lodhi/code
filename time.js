function timeFun(input) {
  if (input.length < 10) {
    console.log("Please check your time format");
    return;
  }
  //splitting string on :
  input = input.split(":");
  var hr = +input[0];
  var min = +input[1];
  //seperating sec and shift, i.e AM/PM
  var secTime = input[2].split("");
  var sec = +(secTime[0] + secTime[1]);
  var shift = secTime[2] + secTime[3];

  //adding 45 to minute and second
  sec = sec + 45;
  if (sec > 59) {
    sec = sec - 60;
    min += 1;
    if (sec < 10) {
      sec = "0" + sec;
    }
  }
  min += 45;
  if (min > 59) {
    min = min - 60;
    hr += 1;
    if (min < 10) {
      min = "0" + min;
    }
  }

  //converting ot 24 hour format
  if (shift == "PM") {
    hr = hr + 12;
    if (hr > 23) {
      hr = hr - 24;
    }
  }
  if (hr < 10) {
    hr = "0" + hr;
  }
  input = hr + ":" + min + ":" + sec;

  //output to console
  console.log(input);
}

timeFun("12:45:00PM"); //time format (hh:mm:sec + shift)\
