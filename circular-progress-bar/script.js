let number = document.getElementById("number");
let number2 = document.getElementById("number2");

// let circle = document.getElementById("number");


let percentage = 40
let percentage2 = 65


let values = {number:percentage, number2: percentage2};

let counter = 0;

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

