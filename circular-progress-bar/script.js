var number = document.getElementById("number");
var number2 = document.getElementById("number2");

// var circle = document.getElementById("number");


var percentage = 40
var percentage2 = 65


var values = {number:percentage, number2: percentage2};

var counter = 0;

intervalId = setInterval(() => {

    if (counter > Math.max(values)) {
        clearInterval(intervalId);
    }
    else {
        if (counter <= values["number"]) {
            number.innerHTML = counter + "%";
        }
        if (counter <= values["number2"]) {
            number2.innerHTML = counter + "%";
        }
    counter += 1
    }
}, 30)

